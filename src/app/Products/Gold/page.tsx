"use client";
import { Suspense } from "react"; // Import Suspense
import Gold from "@/components/Gold";

const GoldPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Gold />
    </Suspense>
  );
};

export default GoldPage;
