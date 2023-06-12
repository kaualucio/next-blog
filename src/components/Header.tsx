import Image from 'next/image'
import React from 'react'

import Logo from '../../public/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="px-5 border-b border-b-background2 ">
      <div className="mx-auto h-20 w-full max-w-7xl flex items-center justify-between gap-3">
        <div>
          <Image
            src={Logo}
            alt="Logo"
          />
        </div>
        {/* <nav className="h-full">
          <ul className="h-full flex items-center justify-center gap-5">
            <li className="relative group h-full text-text text-md font-medium transition px-1 duration-300 hover:text-secondary">
              <Link href="/" className="h-full flex items-center justify-center">Home</Link>
              <div className="absolute bottom-0 left-0 duration-300 w-0 group-hover:w-full h-[2px] bg-secondary"/>
            </li>
            <li className="relative group h-full text-text text-md font-medium transition px-1 duration-300 hover:text-secondary">
              <Link href="/" className="h-full flex items-center justify-center">Categoria 1</Link>
              <div className="absolute bottom-0 left-0 duration-300 w-0 group-hover:w-full h-[2px] bg-secondary"/>
            </li>
            <li className="relative group h-full text-text text-md font-medium transition px-1 duration-300 hover:text-secondary">
              <Link href="/" className="h-full flex items-center justify-center">Categoria 2</Link>
              <div className="absolute bottom-0 left-0 duration-300 w-0 group-hover:w-full h-[2px] bg-secondary"/>
            </li>
            <li className="relative group h-full text-text text-md font-medium transition px-1 duration-300 hover:text-secondary">
              <Link href="/" className="h-full flex items-center justify-center">Categoria 3</Link>
              <div className="absolute bottom-0 left-0 duration-300 w-0 group-hover:w-full h-[2px] bg-secondary"/>
            </li>
          </ul>
        </nav> */}
        <div className="w-full max-w-[500px]">
          <input 
            type="text"
            placeholder="O que você procura?" 
            className="block p-3 w-full rounded-full bg-background2 text-text text-sm" />
        </div>
      </div>
    </header>
  )
}
