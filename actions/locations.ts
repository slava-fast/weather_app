'use server'

import { storeLocation, deleteLocation as deleteLocationFromDB } from '@/libs/locations';
import { ParsedGoogleLocation } from '@/types/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FORM_ERRORS = {
  name: 'Please provide a location name',
  location: 'Please provide a location either via google maps link or via latitude and longitude',
}

const PARSE_GOOGLE_LINK_REGEX = /(?<=\/@)(.*?)(?=z)/

export async function addLocation(prevState, formData) {
  const name = formData.get('name')
  const googleLink = formData.get('googleLink')
  const lat = formData.get('lat')
  const lon = formData.get('lon')

  const errors: string[] = []

  const parsedLocation = parseGoogleLink(googleLink)

  if (!name?.length) errors.push(FORM_ERRORS.name)
  if ((!lat || !lon) && (!googleLink?.length || !parsedLocation)) errors.push(FORM_ERRORS.location)

  if (errors.length) return { errors }

  if (lat && lon) {
    storeLocation(name, lat, lon)
  } else if (parsedLocation?.lat && parsedLocation?.lon) {
    storeLocation(name, parsedLocation.lat, parsedLocation.lon)
  }

  revalidatePath('/')

  return {
    success: true,
  }
}

export async function deleteLocation(locationId: string) {
  deleteLocationFromDB(locationId)
  revalidatePath('/')
}

function parseGoogleLink(googleLink = ''): ParsedGoogleLocation | null {
  const parsedString = PARSE_GOOGLE_LINK_REGEX.exec(googleLink)

  if (!parsedString?.length) return null


  const [lat, lon, zoom] = parsedString[1].split(',')

  return {
    lat,
    lon,
    zoom
  }
}
