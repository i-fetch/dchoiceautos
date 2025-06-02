// lib/getSpareParts.js
import { connectToDB } from "@/lib/connectDB";
import SparePart from "@/models/SparePartmodel";

export async function getSpareParts() {
  await connectToDB();
  return await SparePart.find().lean();
}
