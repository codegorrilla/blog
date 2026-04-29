"use client";
import { useState } from "react";
import { blogData } from "@/assets/assets";
import BlogContent from "@/components/BlogContent";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// Calculate article counts by category
const getCategoryCount = (category) => {
  if (category === "All") {
    return blogData.length;
  }
  return blogData.filter((item) => item.category === category).length;
};

export default function Home() {
  const [menu, setMenu] = useState("All");

  return (
    <>
      <Header />
      <main className="w-full flex flex-col md:flex-row py-0 px-4 md:px-12 md:py-5 lg:px-28">
        <aside className="basis-full md:basis-2xs pt-1 pb-6 md:py-0">
          <Sidebar menu={menu} setMenu={setMenu} getCategoryCount={getCategoryCount} />
        </aside>
        <section className="basis-full md:basis-6xl lg:basis-full">
          <BlogContent menu={menu} />
        </section>
      </main>
    </>
  );
}
