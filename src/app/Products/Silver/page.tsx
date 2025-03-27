"use client";
import { Suspense } from "react";
import Silver from "@/components/Silver";

const SilverPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Silver />
    </Suspense>
  );
};

export default SilverPage;
