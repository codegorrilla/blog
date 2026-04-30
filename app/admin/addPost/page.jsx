"use client";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

const page = () => {
  const [uploadedImg, setUploadedImg] = useState(false);

  //handling image upload
  const handleImageUpload = (e) => {
    e.preventDefault();

    setUploadedImg(e.target.files[0]);
  };

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl font-main font-bold">Upload thumbnail</p>
        <label
          htmlFor="image"
          className="border w-36 h-36 rounded-md mt-4 flex flex-col items-center justify-center"
        >
          {uploadedImg ? (
            <Image
              src={URL.createObjectURL(uploadedImg)}
              alt=""
              width={144}
              height={144}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <BsUpload className="text-5xl" />
          )}
          <p className="text-sm text-gray-500 mt-2">Select Image</p>
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          required
          className="hidden"
          onChange={(e) => handleImageUpload(e)}
        />
      </form>
    </>
  );
};

export default page;
