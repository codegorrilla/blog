import React from "react";
import BlogItem from "./BlogItem";
import { blogData } from "@/assets/assets";

const BlogList = ({ menu }) => {
  return (
    <div className="flex flex-wrap justify-start gap-5 gap-y-10 mt-15 md:mt-24 mb-16">
      {blogData
        .filter((item) => (menu === "All" ? true : item.category === menu))
        .map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
    </div>
  );
};

export default BlogList;
