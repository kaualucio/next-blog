import Image from 'next/image'
import React from 'react'

import Logo from '../../public/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-[90] w-full px-5 border-b border-b-background2 bg-background ">
      <div className="mx-auto h-20 w-full max-w-7xl flex items-center justify-between gap-3">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
          />
        </Link>
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
