"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import { pubDate } from "@/utility/publishDate";
// import { blogData } from "@/assets/assets";

const BlogList = ({ menu }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    const data = response.data;

    if (data.success) {
      setBlogs(data.message);

      console.log(data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-wrap justify-start gap-5 gap-y-10 mt-15 md:mt-24 mb-16">
      {blogs
        .filter((item) => (menu === "All" ? true : item.category === menu))
        .map((item, index) => {
          return (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              date={pubDate(item.createdAt)}
              author={item.author}
            />
          );
        })}
    </div>
  );
};

export default BlogList;
