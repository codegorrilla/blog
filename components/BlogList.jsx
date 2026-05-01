"use client";
import React from "react";
import BlogItem from "./BlogItem";
import { pubDate } from "@/utility/publishDate";
// import { blogData } from "@/assets/assets";

const BlogList = ({ menu, blogs }) => {

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
