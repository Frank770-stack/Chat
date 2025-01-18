import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGO_URI =
    "mongodb+srv://njaombefrank:CRIranJWhdLzqVRq@cluster0.jij78.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0";

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
