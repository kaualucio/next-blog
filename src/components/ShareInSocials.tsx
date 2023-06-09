'use client'

import { FacebookLogo, RedditLogo, TwitterLogo } from '@phosphor-icons/react'
import React from 'react'

export const ShareInSocials = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center justify-center h-12 w-12 rounded-full shadow bg-white hover:scale-110 duration-200 text-primary">
        <TwitterLogo size={26} weight="fill" />
      </button>
      <button className="flex items-center justify-center h-12 w-12 rounded-full shadow bg-white hover:scale-110 duration-200 text-primary">
        <FacebookLogo size={26} weight="fill" />
      </button>
      <button className="flex items-center justify-center h-12 w-12 rounded-full shadow bg-white hover:scale-110 duration-200 text-primary">
        <RedditLogo size={26} weight="fill" />
      </button>
    </div>
  )
}
