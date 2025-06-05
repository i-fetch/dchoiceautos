// app/page.js
import { connectToDB } from '@/lib/connectDB';
import Car from "@/models/Car";
import CarPage from "./CarPage";

function sanitizeDocs(docs) {
  return docs.map(doc => ({
    ...doc,
    _id: doc._id.toString(),
  }));
}

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = 9;

  await connectToDB();

  const cars = await Car.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  const sanitizedCars = sanitizeDocs(cars);

  const totalCars = await Car.countDocuments();
  const totalPages = Math.ceil(totalCars / limit);

  return (
    <div>
      <CarPage cars={sanitizedCars} />
      <div className="container mx-auto px-4 py-4 flex justify-center gap-4">
        {page > 1 && (
          <a href={`/?page=${page - 1}`} className="px-4 py-2 bg-gray-200 rounded">Previous</a>
        )}
        {page < totalPages && (
          <a href={`/?page=${page + 1}`} className="px-4 py-2 bg-gray-200 rounded">Next</a>
        )}
      </div>
    </div>
  );
}
