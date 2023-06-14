'use client'
import { Article } from '@/components/Article'
import { Author } from '@/components/Author'
import { Categories } from '@/components/Categories'
import { MansoryItem } from '@/components/MansoryItem'
import { Title } from '@/components/Title'
import { Calendar, Tag, Clock } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="py-10 px-5">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
            <MansoryItem colunms={2} />
            <MansoryItem />
            <MansoryItem />
            <MansoryItem />
            <MansoryItem />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 lg:col-span-2 p-4">
            <Title label="Últimos artigos"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
          <div className="col-span-1 p-4 flex flex-col gap-5">
            <div>
              <Title label="Sobre o autor"/>
              <Author />
            </div>
            <div>
              <Title label="Categorias"/>
              <Categories />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
