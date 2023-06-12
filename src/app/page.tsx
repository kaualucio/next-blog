'use client'
import { MansoryItem } from '@/components/MansoryItem'
import { Calendar, Tag, Clock } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="py-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <MansoryItem colunms={2} />
            <MansoryItem />
            <MansoryItem />
            <MansoryItem />
            <MansoryItem />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-3 gap-4">
          <div className="col-span-2 p-4">
            <h2 className="text-3xl text-text font-bold mb-5">Últimos artigos</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="" className="block rounded-md bg-background2 group relative">
                <>
                  <div className="relative w-full h-52 overflow-hidden rounded-t-md">
                    <div className="absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50" />
                    <Image 
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="" 
                      width={400} 
                      height={150} 
                      className="absolute z-30 w-full h-full transition-all duration-300 ease-in-out transform bg-center bg-cover group-hover:scale-105"
                    />
                    <div className="absolute top-5 right-5 w-fit z-50 p-1 px-3 bg-primary text-text text-sm font-bold rounded-full">
                      <p className="text-md font-medium">Desenvolviment Web</p>
                    </div>
                    <div className="absolute bottom-5 left-5 z-50 flex items-center gap-2">
                      <div className=" w-10 h-10 rounded-full bg-secondary overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-text text-sm">Kauã Lúcio</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-text text-lg font-bold">Título do artigo</p>
                    <p className="mt-2 text-text text-sm leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellat doloribus reiciendis reprehenderit quis, veniam blanditiis ea quos cum, minus tempora distinctio eum sit nisi debitis exercitationem sunt ullam ut!</p>
                  </div>
                  <div className="border-t border-t-text-gray p-3 text-xs font-medium flex items-center gap-2 text-text">
                    <div className="flex items-center gap-1">
                      <Calendar size={17} />
                      <p>18/05</p>
                    </div>
                    -
                    <div className="flex items-center gap-1">
                      <Clock size={17} />
                      <p>5 min</p>
                    </div>
                  </div>
                </>
              </Link>

              <Link href="" className="block rounded-md bg-background2 group relative">
                <>
                  <div className="relative w-full h-52 overflow-hidden rounded-t-md">
                    <div className="absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50" />
                    <Image 
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="" 
                      width={400} 
                      height={150} 
                      className="absolute z-30 w-full h-full transition-all duration-300 ease-in-out transform bg-center bg-cover group-hover:scale-105"
                    />
                    <div className="absolute top-5 right-5 w-fit z-50 p-1 px-3 bg-primary text-text text-sm font-bold rounded-full">
                      <p className="text-md font-medium">Desenvolviment Web</p>
                    </div>
                    <div className="absolute bottom-5 left-5 z-50 flex items-center gap-2">
                      <div className=" w-10 h-10 rounded-full bg-secondary overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-text text-sm">Kauã Lúcio</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-text text-lg font-bold">Título do artigo</p>
                    <p className="mt-2 text-text text-sm leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellat doloribus reiciendis reprehenderit quis, veniam blanditiis ea quos cum, minus tempora distinctio eum sit nisi debitis exercitationem sunt ullam ut!</p>
                  </div>
                  <div className="border-t border-t-text-gray p-3 text-xs font-medium flex items-center gap-2 text-text">
                    <div className="flex items-center gap-1">
                      <Calendar size={17} />
                      <p>18/05</p>
                    </div>
                    -
                    <div className="flex items-center gap-1">
                      <Clock size={17} />
                      <p>5 min</p>
                    </div>
                  </div>
                </>
              </Link>
            </div>
          </div>
          <div className="col-span-1 p-4 flex flex-col gap-5">
            <div>
              <h2 className="text-3xl text-text font-bold mb-5">Sobre o autor</h2>
              <div className="p-5 bg-background2 rounded-md">
                <div className="w-full flex flex-col items-center gap-3 text-center">
                  <div className="w-24 h-24 rounded-full bg-secondary">
                    {/* <Image 
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                      width={48}
                      height={48}
                      className="rounded-full"
                    /> */}
                  </div>
                  <p className="text-text text-md font-medium">Kauã Lúcio</p>
                  <p className="text-text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere dolorem quidem quis eaque? Iusto maiores possimus magnam! Sapiente possimus corporis assumenda in doloremque, corrupti aperiam ipsum porro dolore iure.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl text-text font-bold mb-5">Categorias</h2>
              <ul className="flex flex-col gap-3 px-3">
                <li className="text-md text-text font-medium hover:text-secondary duration-300 transition-colors">
                  <Link href="">
                    Desenvolvimento (4)
                  </Link>
                </li>
                <li className="text-md text-text font-medium hover:text-secondary duration-300 transition-colors">
                  <Link href="">
                    Front-End (10)
                  </Link>
                </li>
                <li className="text-md text-text font-medium hover:text-secondary duration-300 transition-colors">
                  <Link href="">
                    Back-end (8)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
