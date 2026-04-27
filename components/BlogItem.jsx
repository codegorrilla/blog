import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/assets/assets";

const BlogItem = ({ title, description, category, image }) => {
	return (
		<div className='lg:w-80.75 xl:w-90.75 mb-10'>
			<h4 className='font-main font-black text-base text-brand-orange text-left pb-1'>
				{category}
			</h4>
			<Image
				src={image}
				alt=''
				width={363}
				height={252}
			/>

			<h3 className='font-accent text-[1.75rem] text-brand-blue hover:underline leading-tight py-3'>
				{title}
			</h3>
			<p className='font-main text-black text-[1.25rem] text-left tracking-tight leading-tight pb-3'>
				{description}
			</p>
			<p className='flex justify-start gap-3 font-main font-black text-[.875rem] text-left'>
				<span className=' text-black'>{blogData[0].date}</span>
				<span className='text-brand-yellow'>by {blogData[0].author}</span>
			</p>
		</div>
	);
};

export default BlogItem;
