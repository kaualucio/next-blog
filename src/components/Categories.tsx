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
    <ul className="flex flex-col gap-3 px-3 py-2 rounded-md">
      {
        categories.map(category => (
          <li key={category.label} className="text-md text-dark-gray font-medium hover:text-primary duration-300 transition-colors">
            <Link href={category.href}>
              {category.label}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
