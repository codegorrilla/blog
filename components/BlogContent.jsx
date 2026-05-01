import React from "react";
import HeroText from "./HeroText";
import Subscription from "./Subscription";
import BlogList from "./BlogList";

const BlogContent = ({ menu, blogs }) => {
  return (
    <div className="w-full">
      <HeroText />
      <BlogList menu={menu} blogs={blogs} />
      <Subscription />
    </div>
  );
};

export default BlogContent;
