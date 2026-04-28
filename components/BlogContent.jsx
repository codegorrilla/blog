import React from "react";
import HeroText from "./HeroText";
import Subscription from "./Subscription";
import BlogList from "./BlogList";

const BlogContent = ({ menu }) => {
  return (
    <div className="w-full">
      <HeroText />
      <BlogList menu={menu} />
      <Subscription />
    </div>
  );
};

export default BlogContent;
