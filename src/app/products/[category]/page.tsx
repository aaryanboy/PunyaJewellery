// app/products/[category]/page.tsx
import { redirect } from "next/navigation";
import { Category, defaultSubcat, validCategories } from "@/data/products";

type Params = { category: string };

/** runtime + compile‑time check */
function isCategory(value: string): value is Category {
  return (validCategories as readonly string[]).includes(value);
}

export default function CategoryRoot({ params }: { params: Params }) {
  const { category } = params;

  // 🚧 1. Validate
  if (!isCategory(category)) {
    // could also render a 404 component instead of redirecting
    redirect("/404");
  }

  // ✅ 2. Here `category` is now *narrowed* to `Category`
  const targetSubcat = defaultSubcat(category);

  // 🚀 3. Redirect to first sub‑category
  redirect(`/products/${category}/${targetSubcat}`);
}
