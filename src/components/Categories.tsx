import { getAllCategories } from '@/graphql/queries'
import { getClient } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

type Category = {
  name: string;
  slug: string;
}

export const Categories = async () => {
  const { data } = await getClient().query({ query: getAllCategories })

  return (
    <ul className="flex flex-col gap-3 px-3 py-2 rounded-md">
      {
        data.categories.map((category: Category) => (
          <li key={category.name} className="text-md text-dark-gray font-medium hover:text-primary duration-300 transition-colors">
            <Link href={`/categoria/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
