"use client";

import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="bg-gray-500 hover:bg-brand-orange rounded-full mb-5 px-4 hover:px-6 py-2 font-main font-black text-base text-white  ease-in-out duration-500 cursor-pointer group flex justify-start items-center gap-0 hover:gap-3"
      onClick={() => router.back()}
    >
      <BsArrowLeft className="w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 ease-in-out duration-500" />
      <span className="text-left group-hover:text-right">Back</span>
    </button>
  );
};

export default BackButton;
