import React from "react";
import HeroText from "./HeroText";
import Subscription from "./Subscription";
import BlogList from "./BlogList";

const BlogContent = () => {
	return (
		<div className='w-full'>
			<HeroText />
			<BlogList />
			<Subscription />
		</div>
	);
};

export default BlogContent;
