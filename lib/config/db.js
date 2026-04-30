import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const { DB_USER, DB_PWD, DB_HOST } = process.env;

    // DEBUG — remove after fixing
    // console.log("[DB DEBUG] DB_USER:", JSON.stringify(DB_USER));
    // console.log("[DB DEBUG] DB_HOST:", JSON.stringify(DB_HOST));
    // console.log("[DB DEBUG] DB_NAME:", JSON.stringify(DB_NAME));
    // console.log("[DB DEBUG] DB_PWD set:", !!DB_PWD);

    if (!DB_USER || !DB_PWD || !DB_HOST) {
      throw new Error("Missing MongoDB environment variables");
    }

    const encodedUser = encodeURIComponent(DB_USER);
    const encodedPwd = encodeURIComponent(DB_PWD);
    const uri = `mongodb+srv://${encodedUser}:${encodedPwd}@${DB_HOST}/`;

    await mongoose.connect(uri);

    isConnected = true;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;
