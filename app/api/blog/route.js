import connectDB from "@/lib/config/db";
import { cgBlogModel } from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const LoadDb = async () => {
  await connectDB();
};

LoadDb();

// API endpoint for fetching blogs
export async function GET() {
  console.log("Blog GET hit");

  const allBlogs = await cgBlogModel.find({});
  return NextResponse.json({ success: true, message: allBlogs });
}

// API endpoint for uploading blogs
export async function POST(request) {
  console.log("Blog POST hit");

  const formData = await request.formData();
  const timeStamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const imageBuffer = Buffer.from(imageByteData);
  const path = `./public/uploads/${timeStamp}_${image.name}`;

  await writeFile(path, imageBuffer);
  const imgUrl = `/uploads/${timeStamp}_${image.name}`;
  //console.log(imgUrl);

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    content: `${formData.get("content")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    authorImg: `${formData.get("authorImg")}`,
    image: `${imgUrl}`,
  };

  await cgBlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({
    success: true,
    message: "Blog posted successfully!",
  });
}
