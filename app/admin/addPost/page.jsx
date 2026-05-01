"use client";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [uploadedImg, setUploadedImg] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    content: "",
    category: "React",
    author: "code.gorrilla",
    authorImg: "/author-profile-thumb.png",
  });

  //handling image upload
  const handleImageUpload = (e) => {
    e.preventDefault();

    setUploadedImg(e.target.files[0]);
  };

  //handling input values
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  //form submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", uploadedImg);

    const response = await axios.post("/api/blog", formData);

    if (response.data.success) {
      toast.success(response.data.message);

      setData({
        title: "",
        description: "",
        content: "",
        category: "React",
        author: "code.gorrilla",
        authorImg: "/author-profile-thumb.png",
      });
      setUploadedImg(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16" onSubmit={onSubmitHandler}>
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
          onChange={handleImageUpload}
        />
        <p className="text-xl mt-4 font-main font-bold">Enter post title</p>
        <input
          type="text"
          placeholder="Post title"
          required
          className="border w-full sm:w-[500px] h-12 rounded-md mt-4 p-3 text-black text-sm outline-none font-main"
          name="title"
          value={data.title}
          onChange={onChangeHandler}
        />

        <p className="text-xl mt-4 font-main font-bold">Description</p>
        <textarea
          placeholder="Write content summary here"
          required
          className="border w-full sm:w-[500px] h-16 rounded-md mt-4 p-3 text-black text-sm outline-none font-main"
          name="description"
          value={data.description}
          onChange={onChangeHandler}
        />

        <p className="text-xl mt-4 font-main font-bold">Content</p>
        <textarea
          placeholder="Write your content here"
          required
          className="border w-full sm:w-[500px] h-64 rounded-md mt-4 p-3 text-black text-sm outline-none font-main"
          name="content"
          value={data.content}
          onChange={onChangeHandler}
        />

        <p className="text-xl mt-4 font-main font-bold">Category</p>
        <select
          id="category"
          required
          className="border w-full sm:w-[500px] h-12 rounded-md mt-4 p-3 text-black text-sm outline-none font-main"
          name="category"
          value={data.category}
          onChange={onChangeHandler}
        >
          <option value="">Select Category</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="Express">Express</option>
          <option value="MongoDB">MongoDB</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white cursor-pointer"
        >
          Post
        </button>
      </form>
    </>
  );
};

export default Page;
