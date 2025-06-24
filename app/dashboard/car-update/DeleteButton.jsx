'use client';

import { Button } from "@/components/ui/button";

export default function DeleteCarButton({ carId, carName }) {
  const handleClick = (e) => {
    if (!confirm(`Are you sure you want to delete ${carName}?`)) {
      e.preventDefault();
    }
  };

  return (
    <form action={`/api/delete-car?id=${carId}`} method="POST">
      <Button variant="destructive" type="submit" onClick={handleClick}>
        Delete
      </Button>
    </form>
  );
}
