import { AsideArticle } from "@/components/AsideArticle";
import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { Datetime } from "@/components/Datetime";
import { ShareInSocials } from "@/components/ShareInSocials";
import { Title } from "@/components/Title";
import { Calendar, Clock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";



export default async function Article() {


  return (
    <section className="py-10 px-5">
      <div className="relative mx-auto w-full max-w-7xl grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Datetime />
          <h1 className="mt-3 text-text text-3xl font-bold">Titulo do artigo</h1>
          <div className="p-5 flex items-center justify-center">
            <Image 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="" 
              width={700} 
              height={150}
              className="rounded-xl" 
            />
          </div>
          <div className="text-text text-md text-justify my-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum sapien ut commodo auctor. Pellentesque ultrices purus libero. Nunc rhoncus posuere felis, in varius odio tincidunt at. Suspendisse convallis odio neque, ut condimentum ex aliquam sed. Sed fringilla ac massa vitae vestibulum. Suspendisse fermentum, ex ut aliquam varius, tortor neque sollicitudin felis, nec cursus magna orci non nisi. Ut ac tortor sed sapien molestie eleifend. Sed porttitor ligula sed purus ornare, sed sagittis diam dapibus. Praesent facilisis ultrices gravida. Sed iaculis nisl ac dignissim vestibulum. Morbi euismod nunc ipsum, sed ultrices massa sodales et.
            </p>
            <p>
              Suspendisse et lorem iaculis, maximus leo et, aliquam mauris. In condimentum efficitur volutpat. Donec enim metus, eleifend id tempor a, commodo non lectus. In quis ex tempor, vehicula lorem sit amet, vestibulum dolor. Nulla enim sem, sollicitudin quis accumsan tristique, eleifend non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras at ullamcorper neque. Vestibulum dignissim lacinia tortor in dictum. Phasellus nec tortor facilisis, pretium nunc vel, tempus ligula. Suspendisse placerat, massa et mattis maximus, tortor libero porttitor lacus, id dignissim ipsum libero nec nisi. Maecenas dolor libero, scelerisque ac nunc ut, mattis dictum neque. Integer id tincidunt tellus.
            </p>
            <p>
              Vestibulum turpis nisi, dapibus at nunc ut, suscipit suscipit eros. Vestibulum egestas pulvinar erat, sed tincidunt lacus tempus vel. Suspendisse mollis nibh felis, eu suscipit nulla molestie et. Duis sapien ligula, euismod quis fermentum auctor, pharetra id nibh. Curabitur vulputate, neque eget egestas semper, velit neque pellentesque quam, ut congue eros ex eu libero. Quisque ullamcorper augue sed pharetra cursus. Pellentesque ultrices facilisis enim, euismod dictum velit finibus in. Aliquam facilisis varius urna, eu mollis lorem interdum eget. Suspendisse placerat felis a ullamcorper egestas. Integer quis enim tincidunt, dapibus felis non, feugiat diam. Nulla facilisis lacinia finibus. Phasellus a sagittis mi, eu sollicitudin massa. Donec tincidunt lorem nec erat tristique tincidunt. Sed eleifend nunc at condimentum aliquet.
            </p>
            <p>
              Vivamus rutrum erat ut ligula placerat venenatis. In placerat, eros at placerat tempor, ligula odio hendrerit enim, varius venenatis tellus velit eget tortor. Proin tempus sapien arcu, ut lacinia leo sodales laoreet. Morbi eu neque quis elit venenatis facilisis id sed elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris volutpat, odio a malesuada vehicula, tellus tellus porta dui, at sagittis metus metus eu felis. Nunc at rhoncus velit, vulputate tristique justo. Maecenas eget pretium tellus. Nunc semper consequat ipsum non aliquam. Pellentesque eleifend tellus vitae urna interdum porttitor. Donec viverra ante et bibendum laoreet. Duis tincidunt ipsum tincidunt mollis faucibus.
            </p>
            <p>
              Nulla facilisis pharetra ligula, et luctus lorem efficitur a. Quisque ullamcorper sapien condimentum, tempus metus ac, dictum ligula. Ut at facilisis sapien, vitae ornare tellus. Etiam cursus, metus gravida pretium congue, nulla ligula tempus est, ac placerat orci eros id nisl. Praesent in risus non leo fermentum faucibus. Donec mattis nunc est, sit amet ullamcorper eros porttitor non. Phasellus vel augue luctus, rhoncus turpis ac, finibus quam.
            </p>
          </div>
          <Author />
        </div>
        <div className="sticky top-5 left-0 col-span-1 flex flex-col gap-7">
          <div>
            <Title label="Artigos relevantes" />
            <div className="bg-background2 rounded-md overflow-hidden">
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