'use client';

import React, { useRef, useState } from 'react';
import { addSparePart, updateSparePart, deleteSparePart } from '@/Controllers/UpdateSpareParts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function SparePartForm({ sparePart }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setMessage("");
    setError("");
    try {
      const res = sparePart
        ? await updateSparePart(sparePart._id, formData)
        : await addSparePart(formData);

      if (res.error) throw new Error(res.error);

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
    if (!confirm("Are you sure you want to delete this spare part?")) return;
    setIsSubmitting(true);
    setMessage("");
    setError("");
    try {
      const res = await deleteSparePart(sparePart._id);
      if (res.error) throw new Error(res.error);
      setMessage(res.message || "Spare part deleted successfully.");
    } catch (err) {
      setError(err.message || "Failed to delete spare part.");
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
      <CardHeader className="pb-0">
        <CardTitle className="text-3xl font-bold text-primary dark:text-white flex items-center gap-2">
          {sparePart ? (
            <>
              <span role="img" aria-label="edit">🔧✏️</span> Edit Spare Part
            </>
          ) : (
            <>
              <span role="img" aria-label="add">🔧➕</span> Add Spare Part
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
            <Label htmlFor="name" className="font-semibold">Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={sparePart?.name || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. Brake Pad"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="brand" className="font-semibold">Brand</Label>
            <Input
              id="brand"
              name="brand"
              defaultValue={sparePart?.brand || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. Bosch"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="category" className="font-semibold">Category</Label>
            <Input
              id="category"
              name="category"
              defaultValue={sparePart?.category || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. Engine, Suspension"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="price" className="font-semibold">Price ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              defaultValue={sparePart?.price || ""}
              required
              className="focus:ring-2 focus:ring-primary/70 transition rounded-lg"
              placeholder="e.g. 120.50"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label className="font-semibold">Tags</Label>
            <div className="flex gap-4 flex-wrap">
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
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label htmlFor="image" className="font-semibold">Image</Label>
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
              ) : sparePart ? "Update" : "Add"}
            </Button>

            {sparePart && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-red-600 hover:to-red-800 transition"
              >
                {isSubmitting ? (
                  <span className="animate-spin mr-2">⏳</span>
                ) : "Delete"}
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
