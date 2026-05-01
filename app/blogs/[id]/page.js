import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Subscription from "@/components/Subscription";
import { blogData } from "@/assets/assets";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Page = async ({ params }) => {
  const { id } = await params;
  const blog = blogData.find((item) => item.id === parseInt(id));

  //if there is no blog post
  if (!blog) {
    return (
      <div>
        <Header />
        <main className="w-full flex flex-col md:flex-row py-0 px-4 md:px-12 md:py-5 lg:px-28">
          <section className="basis-full md:basis-6xl lg:basis-full">
            <article className="w-full">
              <div className="flex justify-between items-end border-b border-gray-300">
                <div>
                  <Link
                    href="/"
                    className="bg-gray-500 hover:bg-brand-orange rounded-full mb-5 px-4 hover:px-6 py-2 font-main font-black text-base text-white  ease-in-out duration-500 cursor-pointer group flex justify-start items-center gap-0 hover:gap-3"
                  >
                    <BsArrowLeft className="w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 ease-in-out duration-500" />
                    <span className="text-left group-hover:text-right">
                      Back
                    </span>
                  </Link>
                </div>
              </div>

              <p className="pt-10 font-main text-black text-xl leading-relaxed pb-6">
                Blog post not found
              </p>
            </article>
          </section>
        </main>
      </div>
    );
  }

  //if there is a blog post
  return (
    <div>
      <Header />
      <main className="w-full flex flex-col md:flex-row mb-20 py-0 px-4 md:px-12 md:py-5 lg:px-28">
        <aside className="basis-full md:basis-2xs pt-1 pb-6 md:py-0">
          <BackButton />
        </aside>
        <section className="basis-full md:basis-6xl lg:basis-full">
          <article className="w-full">
            <div className="flex justify-between items-center border-b border-gray-300">
              <div>
                <h4 className="font-main font-black text-base text-brand-orange pb-1">
                  {blog.category}
                </h4>

                <h1 className="font-accent text-4xl text-brand-blue leading-tight pb-5">
                  {blog.title}
                </h1>
              </div>

              <div className="flex justify-start items-center gap-3 font-main font-black text-sm text-left">
                <span className="text-black">{blog.date}</span>
                <Link
                  href={`/author/${blog.authorId}`}
                  className="flex justify-around items-center gap-2"
                >
                  <span className="text-brand-yellow">by {blog.author}</span>
                  <Image
                    src={blog.authorImg}
                    alt={blog.author}
                    className="rounded-full w-[50px] h-[50px] bg-gray-400"
                  />
                </Link>
              </div>
            </div>
            <Image
              src={blog.imageHero}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full max-w-300 my-8 rounded"
              style={{ height: "auto" }}
              loading="eager"
            />

            <p className="font-main text-black text-xl leading-relaxed pb-6">
              {blog.description}
            </p>
          </article>
        </section>
      </main>
      <Subscription />
    </div>
  );
};

export default Page;
