import { AsideArticle } from "@/components/AsideArticle";
import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { Datetime } from "@/components/Datetime";
import { ShareInSocials } from "@/components/ShareInSocials";
import { Title } from "@/components/Title";
import { getAllSlugCategories, getPostsByCategory } from "@/graphql/queries";
import { getClient } from "@/lib/client";
import Image from "next/image";
import { Article } from "@/components/Article";
import { ArticleData } from "@/app/page";


export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: getAllSlugCategories,
  })
 
  return data.categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }))
}


export default async function ArticlesByCategory({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({
    query: getPostsByCategory,
    variables: {
      slug: params.slug
    }
  })

  return (
    <section className="relative py-10 px-5">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-7">
          {
            data.posts.map((post: ArticleData) => (
            <Article key={post.id} post={post} />
            )) 
          }
        </div>
        <div className="col-span-1 ">
          <Title label="Categorias"/>
          {/* @ts-expect-error Server Component */}
          <Categories />
        </div>
      </div>
    </section>
  )
}