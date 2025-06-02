"use server";

import { connectToDB } from '@/lib/connectDB';
import Car from "@/models/Car";
import { revalidatePath } from "next/cache";
import { put, del } from "@vercel/blob";
import { z } from "zod";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 10);

const carSchema = z.object({
  name: z.string().min(1, "Car name is required").trim(),
  price: z.number().min(0, "Price cannot be negative"),
  badge: z.string().min(1, "Badge is required").trim(),
  category: z.string().min(1, "Category is required").trim(),
  rating: z.number().min(0, "Rating must be at least 0").max(5, "Rating cannot exceed 5"),
  features: z
    .string()
    .optional()
    .transform(val =>
      val ? val.split(",").map(f => f.trim()).filter(Boolean) : []
    ),
});

export async function addCar(formData) {
  try {
    if (!(formData instanceof FormData)) {
      return { message: "Invalid form data" };
    }

    const rawData = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      badge: formData.get("badge"),
      category: formData.get("category"),
      rating: Number(formData.get("rating")),
      features: formData.get("features"),
    };

    const validatedData = carSchema.parse(rawData);
    let imageUrl = "/placeholder.svg";

    const file = formData.get("image");
    if (file && typeof file === "object" && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        return { message: "Image size must be less than 5MB" };
      }

      if (!["image/jpeg", "image/png"].includes(file.type)) {
        return { message: "Only JPEG or PNG images are allowed" };
      }

      const fileExtension = file.name?.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `car-${nanoid()}.${fileExtension}`;
      const blob = await put(fileName, file, { access: "public" });
      imageUrl = blob.url;
    }

    await connectToDB();
    await Car.create({ ...validatedData, image: imageUrl });

    revalidatePath("/");
    return { message: "Car added successfully" };
  } catch (error) {
    console.error("addCar error:", error);
    return { message: error?.message || "Failed to add car" };
  }
}

export async function updateCar(id, formData) {
  try {
    if (!(formData instanceof FormData)) {
      return { message: "Invalid form data" };
    }

    const rawData = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      badge: formData.get("badge"),
      category: formData.get("category"),
      rating: Number(formData.get("rating")),
      features: formData.get("features"),
    };

    const validatedData = carSchema.parse(rawData);
    let updateData = { ...validatedData };

    await connectToDB();
    const car = await Car.findById(id);
    if (!car) return { message: "Car not found" };

    const file = formData.get("image");

    if (file && typeof file === "object" && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        return { message: "Image size must be less than 5MB" };
      }

      if (!["image/jpeg", "image/png"].includes(file.type)) {
        return { message: "Only JPEG or PNG images are allowed" };
      }

      if (car.image && car.image !== "/placeholder.svg") {
        try {
          await del(car.image);
        } catch (err) {
          console.error("Image delete failed:", err);
        }
      }

      const fileExtension = file.name?.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `car-${nanoid()}.${fileExtension}`;
      const blob = await put(fileName, file, { access: "public" });
      updateData.image = blob.url;
    }

    await Car.findByIdAndUpdate(id, updateData);
    revalidatePath("/");
    return { message: "Car updated successfully" };
  } catch (error) {
    console.error("updateCar error:", error);
    return { message: error?.message || "Failed to update car" };
  }
}

export async function deleteCar(id) {
  try {
    await connectToDB();
    const car = await Car.findById(id);

    if (car?.image && car.image !== "/placeholder.svg") {
      try {
        await del(car.image);
      } catch (err) {
        console.error("Image deletion failed:", err);
      }
    }

    await Car.findByIdAndDelete(id);
    revalidatePath("/");
    return { message: "Car deleted successfully" };
  } catch (error) {
    console.error("deleteCar error:", error);
    return { message: error?.message || "Failed to delete car" };
  }
}
