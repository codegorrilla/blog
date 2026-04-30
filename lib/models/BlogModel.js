import mongoose from "mongoose";

const cgBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

export const cgBlogModel =
  mongoose.models.cgBlogModel || mongoose.model("cgBlogModel", cgBlogSchema);
