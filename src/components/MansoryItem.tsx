import Link from 'next/link'
import React from 'react'
import { Calendar, Tag, Clock } from '@phosphor-icons/react'
import Image from 'next/image';

interface MansoryItem {
  colunms?: 1 | 2;
}

export const MansoryItem = ({ colunms = 1}: MansoryItem) => {
  return (
    <div className={`relative ${colunms === 1 ? 'col-span-1': 'col-span-2'} min-h-[300px] max-h-[300px] rounded-md group overflow-hidden `}>
      <div className="bg-[url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-105" />
      <div className="absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50" />
      <Link href="" className="block h-full relative z-50 p-5 text-text group">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-text group-hover:text-secondary duration-200 text-3xl font-bold inline-block">Nome do artigo 123</h2>
            <div className="mt-2 flex flex-col gap-2">
              <div className="text-sm font-medium flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <p>18/05</p>
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
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm">Kauã Lúcio</p>
            </div>
            <div className="w-fit p-1 px-3 bg-primary text-text text-sm font-bold rounded-full">
              <p className="text-md font-medium">Desenvolviment Web</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
