import Image from 'next/image'
import React from 'react'

export const Author = () => {
  return (
    <div className="p-5 bg-[#fff] drop-shadow-xl rounded-md">
      <div className="w-full flex flex-col items-center gap-3 text-center">
        <div className="relative overflow-hidden w-24 h-24 rounded-full ">
          <Image 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            fill
            className="rounded-full"
          />
        </div>
        <p className="text-dark-gray text-md font-medium">Kauã Lúcio</p>
        <p className="text-dark-gray text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere dolorem quidem quis eaque? Iusto maiores possimus magnam! Sapiente possimus corporis assumenda in doloremque, corrupti aperiam ipsum porro dolore iure.</p>
      </div>
    </div>
  )
}
