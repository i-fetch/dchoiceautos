// models/Car.js
import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Car name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Car price is required"],
      min: [0, "Price cannot be negative"],
    },
    image: {
      type: String,
      default: "/placeholder.svg",
    },
    badge: {
      type: String,
      required: [true, "Badge is required"],
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    features: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in development
export default mongoose.models?.Car || mongoose.model("Car", CarSchema);
