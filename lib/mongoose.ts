import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("MongoDB Url missing!");
    return;
  }

  if (isConnected) {
    console.log("Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "snippet-store",
    });
    isConnected = true;
    console.log("Connected");
  } catch (error) {
    console.log("Couldn't connect to MongoDB", error);
  }
};
