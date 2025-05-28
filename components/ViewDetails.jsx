'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

export default function ViewDetailsButton({
  message = "Details viewed successfully!",
  onView,
}) {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "View Details",
      description: message,
      variant: "destructive",
      duration: 3000,
    });

    if (typeof onView === "function") {
      onView(); // Run callback if provided
    }
  };

  return (
    <Button onClick={handleClick} variant="outline">
      View Details
    </Button>
  );
}
