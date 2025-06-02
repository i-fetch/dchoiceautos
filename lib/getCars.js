// lib/getCars.js
import { connectToDB } from "@/lib/connectDB";
import Car from "@/models/Car";

export async function getCars() {
  await connectToDB();
  return await Car.find().lean();
}
