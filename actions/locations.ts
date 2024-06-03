'use server'

import { storeLocation, deleteLocation as deleteLocationFromDB } from '@/libs/locations';
import { ParsedGoogleLocation } from '@/types/types';
import { revalidatePath } from 'next/cache';

const FORM_ERRORS = {
  name: 'Please provide a location name',
  googleLink: 'Please provide a correct google link',
}

const PARSE_GOOGLE_LINK_REGEX = /(?<=\/@)(.*?)(?=z)/

export async function addLocation(prevState, formData) {
  const name = formData.get('name')
  const googleLink = formData.get('googleLink')

  const errors: string[] = []

  const parsedLocation = parseGoogleLink(googleLink)

  if (!name?.length) errors.push(FORM_ERRORS.name)
  if (!googleLink?.length || !parsedLocation) errors.push(FORM_ERRORS.googleLink)

  if (errors.length) return { errors }

  //@ts-ignore
  storeLocation(name, parsedLocation.lat, parsedLocation.lon)
  revalidatePath('/')
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
