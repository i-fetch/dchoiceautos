// lib/getSpareParts.js
import { connectToDB } from "@/lib/connectDB";
import SparePart from "@/models/SparePartmodel";

export async function getSpareParts() {
  await connectToDB();
  const parts = await SparePart.find().lean();
  
  return parts.map((part) => ({
    ...part,
    _id: part._id.toString(),
  }));
}
