import SpareParts from "./SpareParts";

// Sample parts categories
const categories = [
  { id: "engine", name: "Engine Parts" },
  { id: "brakes", name: "Brake System" },
  { id: "suspension", name: "Suspension" },
  { id: "electrical", name: "Electrical" },
  { id: "body", name: "Body Parts" },
  { id: "interior", name: "Interior" },
];

// Sample parts data
const parts = [
  {
    id: 1,
    name: "Premium Brake Pads",
    price: "$89.99",
    image: "/spare-parts/premium-brake-pads.png",
    category: "brakes",
    badge: "Best Seller",
    discount: "15% OFF",
    brand: "Brembo",
  },
  {
    id: 2,
    name: "Engine Oil Filter",
    price: "$24.99",
    image: "/spare-parts/high-performance-oil-filter.png",
    category: "engine",
    badge: "New Arrival",
    brand: "Bosch",
  },
  {
    id: 3,
    name: "Suspension Coil Springs",
    price: "$149.99",
    image: "/spare-parts/magwheels.jpg",
    category: "suspension",
    discount: "10% OFF",
    brand: "Monroe",
  },
  {
    id: 4,
    name: "LED Headlight Assembly",
    price: "$299.99",
    image: "/spare-parts/head-light.jpg",
    category: "electrical",
    badge: "Premium",
    brand: "Denso",
  },
  {
    id: 5,
    name: "Front Bumper Cover",
    price: "$189.99",
    image: "/spare-parts/radiator.png",
    category: "body",
    brand: "OEM",
  },
  {
    id: 6,
    name: "Leather Seat Covers",
    price: "$129.99",
    image: "/spare-parts/custom-seats-covers.png",
    category: "interior",
    badge: "Limited Stock",
    brand: "OEM",
  },
  {
    id: 7,
    name: "Spark Plug Set",
    price: "$49.99",
    image: "/spare-parts/spark-plug-set.png",
    category: "engine",
    brand: "Denso",
  },
  {
    id: 8,
    name: "Brake Rotors (Pair)",
    price: "$119.99",
    image: "/spare-parts/brake-rotors-paired.png",
    category: "brakes",
    discount: "20% OFF",
    brand: "Brembo",
  },
];

// Sample brands data
const brands = ["OEM", "Bosch", "Denso", "Brembo", "Monroe"];

export default function SparePartsPage() {
  return <SpareParts categories={categories} parts={parts} brands={brands} />;
}