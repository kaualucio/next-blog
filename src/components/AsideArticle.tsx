import { ArticleData } from '@/app/page'
import { getFeaturedArticles } from '@/graphql/queries'
import { getClient } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const AsideArticle = async () => {
  const { data } = await getClient().query({ query: getFeaturedArticles })
  return (
    <>
      {
        data.posts.map((post: ArticleData) => (
          <Link key={post.id} href={post.slug} className="block w-full border-b border-white duration-200 transition group">
            <div className="flex gap-3 overflow-hidden">
              <Image
                src={post.image.url} 
                alt="" 
                width={150} 
                height={100}
                className="rounded-l-sm" 
              />
              <div className="py-2">
                <h2 className="text-dark-gray text-md font-medium overflow-hidden group-hover:text-primary transition-all duration-200">{post.title.length < 50 ? post.title : post.title.substring(1, 90) + '...' }</h2>
              </div>
            </div>
          </Link>
        ))
      }
    </>
  )
}
