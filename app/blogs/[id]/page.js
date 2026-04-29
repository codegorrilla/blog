import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { blogData } from "@/assets/assets";
import BackButton from "@/components/BackButton";

const page = async ({ params }) => {
  const { id } = await params;
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <Header />
        <main className="w-full flex flex-col md:flex-row py-0 px-4 md:px-12 md:py-5 lg:px-28">
          <section className="basis-full md:basis-6xl lg:basis-full">
            <div className="text-black text-center text-2xl">
              Blog post not found
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="w-full flex flex-col md:flex-row py-0 px-4 md:px-12 md:py-5 lg:px-28">
        <section className="basis-full md:basis-6xl lg:basis-full">
          <article className="w-full">
            <div className="flex justify-between items-end border-b border-gray-300">
              <div>
                <BackButton />
                <h4 className="font-main font-black text-base text-brand-orange pb-1">
                  {blog.category}
                </h4>

                <h1 className="font-accent text-4xl text-brand-blue leading-tight pb-5">
                  {blog.title}
                </h1>
              </div>

              <div className="flex justify-start gap-6 font-main font-black text-sm text-left pb-8">
                <span className="text-black">{blog.date}</span>
                <span className="text-brand-yellow">by {blog.author}</span>
              </div>
            </div>
            <Image
              src={blog.imageHero}
              alt={blog.title}
              className="w-full max-w-300 h-auto my-8 rounded"
              loading="eager"
            />

            <p className="font-main text-black text-xl leading-relaxed pb-6">
              {blog.description}
            </p>

            <div className="text-black text-lg leading-relaxed">
              {/* Add full blog content here */}
              <p>Full blog content goes here...</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default page;
