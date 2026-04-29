import { blogData } from "@/assets/assets";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import BackButton from "@/components/BackButton";

const page = async ({ params }) => {
  const { authorId } = await params;
  const author = blogData.find((item) => item.authorId === parseInt(authorId));
  return (
    <>
      <Header />
      <main className="w-full flex flex-col md:flex-row mb-20 py-0 px-4 md:px-12 md:py-5 lg:px-28">
        <aside className="basis-full md:basis-2xs pt-1 pb-6 md:py-0">
          <BackButton />
        </aside>
        <section className="basis-full md:basis-6xl lg:basis-full">
          <div className="flex gap-3">
            <Image
              src={author.authorImg}
              alt={author.author}
              className="rounded-full w-[50px] h-[50px] bg-gray-400"
            />
            <h1 className="font-main text-[1.5rem] text-brand-blue leading-tight pb-5">
              {author.author}
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
