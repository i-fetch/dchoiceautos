'use client';

import React, { useRef, useState } from 'react';
import { addCar, updateCar, deleteCar } from '@/controllers/UpdateCarSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CarForm({ car }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    const res = car
      ? await updateCar(car._id, formData)
      : await addCar(formData);
    setMessage(res.message);
    setIsSubmitting(false);
    formRef.current?.reset();
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this car?")) {
      const res = await deleteCar(car._id);
      alert(res.message);
    }
  };

  return (
    <Card className="bg-slate-100 dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black dark:text-white">
          {car ? "Edit Car" : "Add Car"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue={car?.name || ""} required />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              defaultValue={car?.price || ""}
              required
            />
          </div>

          <div>
            <Label htmlFor="badge">Badge</Label>
            <Input id="badge" name="badge" defaultValue={car?.badge || ""} required />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" defaultValue={car?.category || ""} required />
          </div>

          <div>
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              name="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              defaultValue={car?.rating || ""}
              required
            />
          </div>

          <div>
            <Label htmlFor="features">Features (comma separated)</Label>
            <Textarea
              id="features"
              name="features"
              defaultValue={car?.features?.join(", ") || ""}
            />
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {car ? "Update" : "Add"}
            </Button>

            {car && (
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
