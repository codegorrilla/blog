"use client";
import React, { useRef } from "react";

const HeroText = () => {
	const setDaytime = useRef("morning");
	return (
		<h1 className='font-accent text-[2rem] leading-tight text-brand-yellow'>
			<span className='text-brand-blue'>
				<strong
					className='capitalize text-brand-orange'
					ref={setDaytime}>
					morning!
				</strong>{" "}
				welcome to my journal,
			</span>{" "}
			here I document everything that I learn regarding web development, so that
			the information can be handy for aspiring developers like me.👍
		</h1>
	);
};

export default HeroText;
