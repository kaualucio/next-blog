import { AsideArticle } from "@/components/AsideArticle";
import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { Comment } from "@/components/Comment";
import { Datetime } from "@/components/Datetime";
import { FormComment } from "@/components/FormComment";
import { ShareInSocials } from "@/components/ShareInSocials";
import { Title } from "@/components/Title";
import { getAllSlugPosts, getComments, getPostBySlug } from "@/graphql/queries";
import { getClient } from "@/lib/client";
import Image from "next/image";


export async function generateStaticParams() {
  const {data} = await getClient().query({
    query: getAllSlugPosts,
  })
 
  return data.posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

const getPost = async (slug: string) => {
  const { data } = await getClient().query({
    query: getPostBySlug,
    variables: {
      slug: slug
    }
  })

  return data
}

const getPostComments = async (slug: string) => {
  const { data: comments, error, errors } = await getClient().query({
    query: getComments,
    variables: {
      slug: slug
    },
  })

  return comments
}


export default async function Article({ params }: { params: { slug: string } }) {
  

  const data = await getPost(params.slug)  
  const comments = await getPostComments(params.slug)  

  return (
    <section className="relative py-10 px-5">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-10">
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
          <div className="my-10 w-full">
            <Title label="Deixe seu comentário" />
            <FormComment postId={data.post.id} />
          </div>
          <div className="flex flex-col gap-3">
            {
              comments.comments.map((comment: any) => (
                <Comment key={comment.id} comment={comment} />
              ))
            }
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 relative ">
          <div className="sticky top-24 flex flex-col gap-7">
            <div className="">
              <Title label="Artigos relevantes" />
              <div className="bg-white shadow-md rounded-md overflow-hidden w-full">
                {/* @ts-expect-error Server Component */}
                <AsideArticle />
              </div>
            </div>
            <div>
              <Title label="Categorias" />
              {/* @ts-expect-error Server Component */}
              <Categories />
            </div>
            <div>
              <Title label="Compartilhar" />
              <ShareInSocials />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}