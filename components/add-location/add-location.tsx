'use client'

import { useState } from 'react';
import AddLocationForm from '@/components/add-location/add-location-form';

export default function AddLocation() {
  const [isAddLocationOpen, setIsAddLocationOpen] = useState(false)

  const toggleIsAddLocationOpen = () => setIsAddLocationOpen(!isAddLocationOpen)

  return <div className="relative">
    <button
      className="
        h-full
        whitespace-nowrap
        ml-8
        p-2
        px-12
        bg-font-color
        text-white
        rounded-md
        text-3xl
      "
      onClick={toggleIsAddLocationOpen}
    >
      Add new location
    </button>
    {isAddLocationOpen && <>
      <div
        className="fixed bg-font-color/60 backdrop-blur-sm left-0 top-0 right-0 bottom-0 z-9"
        onClick={toggleIsAddLocationOpen}
      />
      <AddLocationForm onCancel={toggleIsAddLocationOpen} />
    </>}
  </div>
}
