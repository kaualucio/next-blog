import { getAuthors } from '@/graphql/queries'
import { getClient } from '@/lib/client'
import Image from 'next/image'
import React from 'react'

export type AuthorsData = {
  id: string;
  name: string;
  bio: string;
  photo: {
    url: string;
  }
}

export const Author = async () => {
  const { data } = await getClient().query({ query: getAuthors })
  return (
    <div className="p-5 bg-[#fff] drop-shadow-xl rounded-md">
      <div className="w-full flex flex-col items-center gap-3 text-center">
        <div className="relative overflow-hidden w-24 h-24 rounded-full ">
          <Image 
            src={data.authors[0].photo.url}
            alt={data.authors[0].name}
            fill
            className="rounded-full"
          />
        </div>
        <p className="text-dark-gray text-md font-medium">{data.authors[0].name}</p>
        <p className="text-dark-gray text-sm">{data.authors[0].bio}</p>
      </div>
    </div>
  )
}
