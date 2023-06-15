import { Article } from '@/components/Article'
import { Author } from '@/components/Author'
import { Categories } from '@/components/Categories'
import { MansoryItem } from '@/components/MansoryItem'
import { Title } from '@/components/Title'
import { getAllArticles } from '@/graphql/queries'
import { getClient } from '@/lib/client'

export type ArticleData = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    url: string;
  }
  categories: {
    name: string;
  }[]
  createdAt: Date | string;
  content: {
    html: string;
  }
  author: {
    name: string;
    photo: {
      url: string;
    }
  }
}

export default async function Home() {
  const { data } = await getClient().query({ query: getAllArticles })

  return (
    <>
      <section className="pt-10 pb-5 px-5">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 p-3 bg-[#fff] drop-shadow-xl rounded-md">
            <MansoryItem colunms={2} rows={2} />
            <MansoryItem />
            <MansoryItem />
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5">
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
    </>
  )
}
