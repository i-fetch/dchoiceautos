import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error); // <-- log the actual error here
    throw new Error(`Failed to connect to MongoDB: ${error.message}`);
  }
};

