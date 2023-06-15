'use client'
import { ArticleData } from '@/app/page'
import { Calendar, Clock } from '@phosphor-icons/react'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ArticleProps = {
  post: ArticleData
}

export const Article = ({ post } : ArticleProps) => {
  return (
    <Link href={`/${post.slug}`} className="bg-[#fff] drop-shadow-xl overflow-hidden group relative rounded-md ">
      <div className="flex w-full gap-3">
        <div className="w-2/5 relative h-52 overflow-hidden">
          <div className="absolute top-0 left-0 z-40 w-full h-full bg-gradient-to-t from-dark to-transparent" />
          <Image 
            src={post.image.url} 
            alt="" 
            fill
            className="absolute z-30 object-cover transition-all duration-300 ease-in-out transform bg-center bg-cover group-hover:scale-105"
          />
          <div className="absolute top-5 right-5 w-fit z-50 p-1 px-3 bg-primary text-text text-sm font-bold rounded-full">
            <p className="text-md text-white font-medium">{post.categories[0].name}</p>
          </div>
          <div className="absolute bottom-5 left-5 z-50 flex items-center gap-2">
            <div className=" w-10 h-10 rounded-full bg-secondary overflow-hidden">
              <Image 
                src={post.author.photo.url}
                alt=""
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <p className="text-white text-sm font-medium">{post.author.name}</p>
          </div>
        </div>
        <div className="w-3/5 p-3">
          <p className="text-dark-gray text-lg font-bold">{post.title}</p>
          <p className="mt-2 text-gray-400 text-sm leading-6">{post.excerpt.length <= 133 ? post.excerpt : post.excerpt.substring(1, 130) + '...' }</p>
          <div className="pt-3 text-xs font-medium flex items-center gap-2 text-dark-gray">
            <div className="flex items-center gap-1">
              <Calendar size={17} />
              <p>{format(new Date(post.createdAt), 'dd/MM/yyyy')}</p>
            </div>
            -
            <div className="flex items-center gap-1">
              <Clock size={17} />
              <p>5 min</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
