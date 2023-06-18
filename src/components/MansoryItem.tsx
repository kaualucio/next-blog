'use client'
import Link from 'next/link'
import React from 'react'
import { Calendar, Tag, Clock } from '@phosphor-icons/react'
import Image from 'next/image';
import { ArticleData } from '@/app/page';
import { format } from 'date-fns';

interface MansoryItem {
  colunms?: 1 | 2;
  rows?: 1 | 2
  post: ArticleData
}

export const MansoryItem = ({ colunms = 1, rows = 1, post}: MansoryItem) => {
  return (
    <div className={`relative ${colunms === 1 ? 'col-span-1': 'col-span-1 md:col-span-2'} ${rows === 2 ? 'row-span-2' : 'row-span-1'} min-h-[270px] rounded-md group overflow-hidden`}>
        <Image 
            src={post.image.url} 
            alt="" 
            fill
            className="absolute z-30  w-full h-full object-cover transition-all duration-300 ease-in-out transform bg-center bg-cover group-hover:scale-105"
          />
      <div className="absolute top-0 left-0 z-40 w-full h-full bg-gradient-to-t from-dark to-transparent" />
      <Link href={`/${post.slug}`} className="block h-full relative z-50 p-5 text-white group">
        <div className="h-full flex flex-col justify-end gap-5">
          <div>
            <h2 className="text-white text-3xl font-bold inline-block transition-colors duration-200 group-hover:text-primary">{post.title.length < 90 ? post.title : post.title.substring(1, 90) + '...' }</h2>
            <div className="mt-2 flex flex-col gap-2">
              <div className="text-sm font-medium flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <p>{format(new Date(post.createdAt), 'dd/MM/yyyy')}</p>
                </div>
                -
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <p>5 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
                <Image 
                  src={post.author.photo.url}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm">{post.author.name}</p>
            </div>
            <div className="relative z-[60] w-fit p-1 px-3 bg-primary text-white text-sm font-bold rounded-full">
              <p className="text-md font-medium">{post.categories[0].name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
