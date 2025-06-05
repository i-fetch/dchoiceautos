// app/spareparts/page.jsx
import { connectToDB } from '@/lib/connectDB';
import SparePart from '@/models/SparePartmodel';
import SpareParts from './SpareParts';

export default async function SparePartsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 9;

  await connectToDB();

  // Fetch paginated spare parts from DB
  const parts = await SparePart.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  const totalParts = await SparePart.countDocuments();
  const totalPages = Math.ceil(totalParts / limit);

  // Optional: derive categories & brands from fetched parts dynamically, or keep static
  // Here, keeping your static categories and brands for now:
  const categories = [
    { id: "engine", name: "Engine Parts" },
    { id: "brakes", name: "Brake System" },
    { id: "suspension", name: "Suspension" },
    { id: "electrical", name: "Electrical" },
    { id: "body", name: "Body Parts" },
    { id: "interior", name: "Interior" },
  ];

  const brands = ["OEM", "Bosch", "Denso", "Brembo", "Monroe"];

  return (
    <div>
      <SpareParts categories={categories} parts={parts} brands={brands} />

      <div className="container mx-auto px-4 py-4 flex justify-center gap-4">
        {page > 1 && (
          <a href={`/spareparts?page=${page - 1}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            Previous
          </a>
        )}
        {page < totalPages && (
          <a href={`/spareparts?page=${page + 1}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            Next
          </a>
        )}
      </div>
    </div>
  );
}
