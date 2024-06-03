'use client'

import { FormEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    if (e.currentTarget.value) {
      params.set('searchName', e.currentTarget.value);
    } else {
      params.delete('searchName');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return <input
    className="p-2 px-5 border-2 border-font-color rounded-md w-full text-3xl"
    type="text"
    placeholder="Search your locations..."
    onChange={handleInputChange}
    defaultValue={searchParams.get('searchName')?.toString()}
  />
}
