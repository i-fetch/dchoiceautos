// lib/getCars.js
import { connectToDB } from "@/lib/connectDB";
import Car from "@/models/Car";

export async function getCars() {
  await connectToDB();
  const cars = await Car.find().lean();

  // Convert _id to string for serialization
  return cars.map((car) => ({
    ...car,
    _id: car._id.toString(),
  }));
}
