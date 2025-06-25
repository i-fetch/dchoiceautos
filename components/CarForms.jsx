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
    <Card className="bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-xl rounded-3xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.01]">
      {/* Loading overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 rounded-3xl">
          <div className="flex flex-col items-center gap-2">
            <span className="animate-spin text-4xl">⏳</span>
            <span className="text-white font-semibold">Processing...</span>
          </div>
        </div>
      )}
      <CardHeader className="pb-0">
        <CardTitle className="text-3xl font-bold text-primary dark:text-white flex items-center gap-2">
          {car ? (
            <>
              <span role="img" aria-label="edit">🚗✏️</span> Edit Car
            </>
          ) : (
            <>
              <span role="img" aria-label="add">🚗➕</span> Add Car
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          action={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4"
        >
          <div className="space-y-3">
            <Label htmlFor="name" className="font-semibold">Car Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={car?.name || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. Tesla Model S"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="price" className="font-semibold">Price ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              defaultValue={car?.price || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. 79999"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="badge" className="font-semibold">Badge</Label>
            <Input
              id="badge"
              name="badge"
              defaultValue={car?.badge || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. New, Featured"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="category" className="font-semibold">Category</Label>
            <Input
              id="category"
              name="category"
              defaultValue={car?.category || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. Sedan, SUV"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="rating" className="font-semibold">Rating</Label>
            <Input
              id="rating"
              name="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              defaultValue={car?.rating || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. 4.8"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label htmlFor="features" className="font-semibold">Features <span className="text-xs text-muted">(comma separated)</span></Label>
            <Textarea
              id="features"
              name="features"
              defaultValue={car?.features?.join(", ") || ""}
              className="resize-none h-24 focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. Sunroof, Leather Seats, Bluetooth"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label htmlFor="image" className="font-semibold">Car Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90 transition"
            />
          </div>

          <div className="flex gap-4 md:col-span-2 mt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-primary to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-primary/80 transition"
            >
              {isSubmitting ? (
                <span className="animate-spin mr-2">⏳</span>
              ) : car ? "Update Car" : "Add Car"}
            </Button>

            {car && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-red-600 hover:to-red-800 transition"
              >
                {isSubmitting ? (
                  <span className="animate-spin mr-2">⏳</span>
                ) : "Delete Car"}
              </Button>
            )}
          </div>

          {(message || error) && (
            <div className="md:col-span-2 mt-2">
              {message && (
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 rounded-lg px-4 py-2 text-sm font-medium shadow">
                  <span role="img" aria-label="success">✅</span> {message}
                </div>
              )}
              {error && (
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/40 rounded-lg px-4 py-2 text-sm font-medium shadow">
                  <span role="img" aria-label="error">❌</span> {error}
                </div>
              )}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
