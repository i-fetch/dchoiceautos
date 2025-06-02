import CarForm from "@/components/CarForms";
import { getCars } from "@/lib/getCars";
import DashboardLayout from "@/components/DashboardLayout";

export default async function DashboardPage() {
  const cars = (await getCars()).map(car => ({
    ...car,
    _id: car._id.toString(),
  }));

  return (
    <DashboardLayout>
      <div className="p-4 space-y-4">
        <CarForm /> {/* For adding new cars */}
        <hr className="border-muted" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarForm key={car._id} car={car} /> // For editing existing cars
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
