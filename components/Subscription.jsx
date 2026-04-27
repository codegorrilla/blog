import React from "react";

const Subscription = () => {
	return (
		<footer className='w-full flex flex-col items-center mx-auto py-3'>
			<h2 className='font-accent text-[2rem] text-brand-blue py-1'>
				Subscribe to my newsletter
			</h2>
			<p className='font-main text-[1.25rem]'>
				to know about latest articles, handy resources
			</p>
			<form className='flex justify-between w-full max-w-125 scale:100 mt-3 rounded-full p-1 border border-black'>
				<input
					type='email'
					placeholder='example@gmail.com'
					className='w-[80%] pl-4 outline-none font-main text-black text-[1.25rem] text-left'
				/>
				<button className='bg-brand-blue active:bg-brand-orange transition-all rounded-full px-7 py-2 font-main font-black text-[1.25rem] text-center text-white capitalize cursor-pointer'>
					enlist
				</button>
			</form>
		</footer>
	);
};

export default Subscription;
