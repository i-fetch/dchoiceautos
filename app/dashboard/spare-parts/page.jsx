import SparePartForm from "@/components/SpareParts";
import { getSpareParts } from "@/lib/getSpareParts";
import DashboardLayout from "@/components/DashboardLayout";

export default async function SparePartsPage() {
  const spareParts = (await getSpareParts()).map(sparePart => ({
    ...sparePart,
    _id: sparePart._id.toString(),
  }));

  return (
    <DashboardLayout>
      <div className="p-4 space-y-4">
        <SparePartForm /> {/* For adding new spare parts */}
        <hr className="border-muted" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spareParts.map((sparePart) => (
            <SparePartForm key={sparePart._id} sparePart={sparePart} /> // For editing existing spare parts
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
