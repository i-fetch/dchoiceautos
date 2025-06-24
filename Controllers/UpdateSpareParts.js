'use server';

import { connectToDB } from '@/lib/connectDB';
import SparePart from '@/models/SparePartmodel';
import { revalidatePath } from 'next/cache';
import { put, del } from '@vercel/blob';
import { z } from 'zod';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 10);

const partSchema = z.object({
  name: z.string().min(1, 'Part name is required').trim(),
  category: z.string().min(1, 'Category is required').trim(),
  brand: z.string().min(1, 'Brand is required').trim(),
  price: z.number().min(0, 'Price must be 0 or more'),
  discount: z.string().optional(),
  isFeatured: z.boolean().optional(),
  isBestSeller: z.boolean().optional(),
  isNewArrival: z.boolean().optional(),
});

export async function addSparePart(formData) {
  try {
    if (!(formData instanceof FormData)) {
      return { message: 'Invalid form data' };
    }

    const rawData = {
      name: formData.get('name'),
      category: formData.get('category'),
      brand: formData.get('brand'),
      price: Number(formData.get('price')),
      discount: formData.get('discount') || '',
      isFeatured: formData.get('isFeatured') === 'on',
      isBestSeller: formData.get('isBestSeller') === 'on',
      isNewArrival: formData.get('isNewArrival') === 'on',
    };

    const validatedData = partSchema.parse(rawData);

    let imageUrl = '/placeholder.svg';
    const file = formData.get('image');

    if (file && typeof file === 'object' && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) return { message: 'Image must be less than 5MB' };
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        return { message: 'Only JPEG or PNG images are allowed' };
      }

      const ext = file.name?.split('.').pop()?.toLowerCase() || 'jpg';
      const fileName = `sparepart-${nanoid()}.${ext}`;
      const blob = await put(fileName, file, { access: 'public' });
      imageUrl = blob.url;
    }

    await connectToDB();
    await SparePart.create({ ...validatedData, image: imageUrl });

    revalidatePath('/dashboard/spareparts');
    return { message: 'Spare part added successfully' };
  } catch (error) {
    console.error('addSparePart error:', error);
    return { message: error?.message || 'Failed to add spare part' };
  }
}

export async function updateSparePart(id, formData) {
  try {
    if (!(formData instanceof FormData)) {
      return { message: 'Invalid form data' };
    }

    const rawData = {
      name: formData.get('name'),
      category: formData.get('category'),
      brand: formData.get('brand'),
      price: Number(formData.get('price')),
      discount: formData.get('discount') || '',
      isFeatured: formData.get('isFeatured') === 'on',
      isBestSeller: formData.get('isBestSeller') === 'on',
      isNewArrival: formData.get('isNewArrival') === 'on',
    };

    const validatedData = partSchema.parse(rawData);
    let updateData = { ...validatedData };

    await connectToDB();
    const part = await SparePart.findById(id);
    if (!part) return { message: 'Spare part not found' };

    const file = formData.get('image');

    if (file && typeof file === 'object' && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) return { message: 'Image must be less than 5MB' };
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        return { message: 'Only JPEG or PNG images are allowed' };
      }

      if (part.image && part.image !== '/placeholder.svg') {
        try {
          await del(part.image);
        } catch (err) {
          console.error('Image deletion failed:', err);
        }
      }

      const ext = file.name?.split('.').pop()?.toLowerCase() || 'jpg';
      const fileName = `sparepart-${nanoid()}.${ext}`;
      const blob = await put(fileName, file, { access: 'public' });
      updateData.image = blob.url;
    }

    await SparePart.findByIdAndUpdate(id, updateData);
    revalidatePath('/dashboard/spareparts');
    return { message: 'Spare part updated successfully' };
  } catch (error) {
    console.error('updateSparePart error:', error);
    return { message: error?.message || 'Failed to update spare part' };
  }
}

export async function deleteSparePart(id) {
  try {
    await connectToDB();
    const part = await SparePart.findById(id);

    if (part?.image && part.image !== '/placeholder.svg') {
      try {
        await del(part.image);
      } catch (err) {
        console.error('Image deletion failed:', err);
      }
    }

    await SparePart.findByIdAndDelete(id);
    revalidatePath('/dashboard/spareparts');
    return { message: 'Spare part deleted successfully' };
  } catch (error) {
    console.error('deleteSparePart error:', error);
    return { message: error?.message || 'Failed to delete spare part' };
  }
}
