'use client';

import React, { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteCar, updateCar, addCar } from '@/Controllers/UpdateCarSection';

export default function CarForm({ car }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const res = car
        ? await updateCar(car._id, formData)
        : await addCar(formData);

      if (res.error) {
        throw new Error(res.error);
      }

      setMessage(res.message || "Action successful.");
      formRef.current?.reset();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this car?")) return;

    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const res = await deleteCar(car._id);
      if (res.error) throw new Error(res.error);
      setMessage(res.message || "Car deleted successfully.");
    } catch (err) {
      setError(err.message || "Failed to delete car.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
    }
  };

  return (
    <Card className="bg-white dark:bg-slate-900 shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-slate-800 dark:text-white">
          {car ? "Edit Car" : "Add Car"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          action={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Car Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={car?.name || ""}
              required
              className="focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              defaultValue={car?.price || ""}
              required
              className="focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="badge">Badge</Label>
            <Input
              id="badge"
              name="badge"
              defaultValue={car?.badge || ""}
              required
              className="focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              defaultValue={car?.category || ""}
              required
              className="focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="space-y-2">
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
              className="focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="features">Features (comma separated)</Label>
            <Textarea
              id="features"
              name="features"
              defaultValue={car?.features?.join(", ") || ""}
              className="resize-none h-24 focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="image">Car Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90 transition"
            />
          </div>

          <div className="flex gap-4 md:col-span-2">
            <Button type="submit" disabled={isSubmitting}>
              {car ? "Update Car" : "Add Car"}
            </Button>

            {car && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isSubmitting}
              >
                Delete Car
              </Button>
            )}
          </div>

          {message && (
            <p className="md:col-span-2 text-sm text-green-600 dark:text-green-400">
              {message}
            </p>
          )}

          {error && (
            <p className="md:col-span-2 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
