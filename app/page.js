"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogContent from "@/components/BlogContent";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  // Fetches blogs from the database
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    const data = response.data;

    if (data.success) {
      setBlogs(data.message);
    }
  };

  // Fetches blogs from the database when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Calculate article counts by category
  const getCategoryCount = (category) => {
    if (category === "All") {
      return blogs.length;
    }
    return blogs.filter((item) => item.category === category).length;
  };

  return (
    <>
      <Header />
      <main className="w-full flex flex-col md:flex-row py-0 px-4 md:px-12 md:py-5 lg:px-28">
        <aside className="basis-full md:basis-2xs pt-1 pb-6 md:py-0">
          <Sidebar
            menu={menu}
            setMenu={setMenu}
            getCategoryCount={getCategoryCount}
          />
        </aside>
        <section className="basis-full md:basis-6xl lg:basis-full">
          <BlogContent menu={menu} blogs={blogs} />
        </section>
      </main>
    </>
  );
}
