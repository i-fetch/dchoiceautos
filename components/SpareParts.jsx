'use client';

import React, { useRef, useState } from 'react';
import { addSparePart, updateSparePart, deleteSparePart } from '@/controllers/UpdateSpareParts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function SparePartForm({ sparePart }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    const res = sparePart
      ? await updateSparePart(sparePart._id, formData)
      : await addSparePart(formData);
    setMessage(res.message);
    setIsSubmitting(false);
    formRef.current?.reset();
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this spare part?")) {
      const res = await deleteSparePart(sparePart._id);
      alert(res.message);
    }
  };

  return (
    <Card className="bg-slate-100 dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black dark:text-white">
          {sparePart ? "Edit Spare Part" : "Add Spare Part"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue={sparePart?.name || ""} required />
          </div>

          <div>
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" name="brand" defaultValue={sparePart?.brand || ""} required />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" defaultValue={sparePart?.category || ""} required />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="text"
              defaultValue={sparePart?.price || ""}
              required
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <Checkbox
                id="isFeatured"
                name="isFeatured"
                defaultChecked={sparePart?.isFeatured || false}
              />
              Featured
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                id="isBestSeller"
                name="isBestSeller"
                defaultChecked={sparePart?.isBestSeller || false}
              />
              Best Seller
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                id="isNewArrival"
                name="isNewArrival"
                defaultChecked={sparePart?.isNewArrival || false}
              />
              New Arrival
            </label>
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {sparePart ? "Update" : "Add"}
            </Button>

            {sparePart && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isSubmitting}
              >
                Delete
              </Button>
            )}
          </div>

          {message && <p className="text-sm text-muted-foreground">{message}</p>}
        </form>
      </CardContent>
    </Card>
  );
}
