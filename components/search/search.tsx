import { FormEvent } from 'react';

export default function Search({ onSearchChange }: { onSearchChange: (search: string) => void }) {
  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    onSearchChange(e.currentTarget.value)
  }

  return <input
    className="p-2 px-5 border-2 border-font-color rounded-md w-full text-3xl"
    type="text"
    placeholder="Search your locations..."
    onChange={handleInputChange}
  />
}
