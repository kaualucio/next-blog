import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const AsideArticle = () => {
  return (
    <Link href="" className="block border-b border-background hover:bg-background-hover duration-200 transition">
      <div className="flex gap-3">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="" 
          width={150} 
          height={100}
          className="rounded-l-sm" 
        />
        <div className="py-2">
          <h2 className="text-text text-md font-medium overflow-hidden">Titulo do artigo</h2>
        </div>
      </div>
    </Link>
  )
}