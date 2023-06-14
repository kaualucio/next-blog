import Link from 'next/link'
import React from 'react'

const categories = [
  {
    label: 'Desenvolvimento Web',
    href: '',
  },
  {
    label: 'Front-End',
    href: '',
  },
  {
    label: 'Back-End',
    href: '',
  },
  {
    label: 'NPM',
    href: '',
  },
  {
    label: 'Carreira',
    href: '',
  },
  {
    label: 'Projetos',
    href: '',
  }
]

export const Categories = () => {
  return (
    <ul className="flex flex-col gap-3 px-3">
      {
        categories.map(category => (
          <li key={category.label} className="text-md text-text font-medium hover:text-secondary duration-300 transition-colors">
            <Link href={category.href}>
              {category.label}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
