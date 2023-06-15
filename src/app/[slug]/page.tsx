import { AsideArticle } from "@/components/AsideArticle";
import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { Datetime } from "@/components/Datetime";
import { ShareInSocials } from "@/components/ShareInSocials";
import { Title } from "@/components/Title";
import { getAllSlugPosts, getPostBySlug } from "@/graphql/queries";
import { getClient } from "@/lib/client";
import { Calendar, Clock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";


export async function generateStaticParams() {
  const {data} = await getClient().query({
    query: getAllSlugPosts,
  })
 
  return data.posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}


export default async function Article({ params }: { params: { slug: string } }) {
  const { data, errors } = await getClient().query({
    query: getPostBySlug,
    variables: {
      slug: params.slug
    }
  })
console.log(errors)
  return (
    <section className="py-10 px-5">
      <div className="relative mx-auto w-full max-w-6xl grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Datetime date={data.post.createdAt} />
          <h1 className="mt-3 text-dark-gray text-3xl font-bold">{data.post.title}</h1>
          <div className="p-5 flex items-center justify-center">
            <Image
              src={data.post.image.url}
              alt="" 
              width={700} 
              height={150}
              className="rounded-xl" 
            />
          </div>
          <div 
            className="text-dark-gray text-md text-justify my-5"
            dangerouslySetInnerHTML={{
              __html: data.post.content.html,
            }} 
          />
          {/* @ts-expect-error Server Component */}
          <Author />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <Title label="Artigos relevantes" />
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <AsideArticle />
              <AsideArticle />
              <AsideArticle />
            </div>
          </div>
          <div>
            <Title label="Categorias" />
            <Categories />
          </div>
          <div>
            <Title label="Compartilhar" />
            <ShareInSocials />
          </div>
        </div>
      </div>
    </section>
  )
}