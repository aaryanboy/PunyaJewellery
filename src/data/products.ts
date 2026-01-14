// ────────────────────────────────────────────────────────────────
// src/data/products.ts
// ────────────────────────────────────────────────────────────────

/** 1. Domain types — extend or tighten as your catalogue grows */
export type Category    = "gold" | "silver";
export type Subcategory =
  | "ring"
  | "earring"
  | "tiara"
  | "ranihar"
  | "necklace"
  | "bracelet"
  | "pendant"
  | "balla";              // Nepali thick bangles — a.k.a. chura

export interface Product {
  id: string;             // g‑r‑1, s‑ti‑2  …anything unique
  name: string;
  price: number;          // use paise / cents if you need decimals
  image: string;          // public path or <Bucket URL>
  description?: string;
}

/** 2. Strongly‑typed master list */
export const productData: Record<Category, Record<Subcategory, Product[]>> = {
  gold: {
    // ───── Rings ─────
    ring: [
      { id: "g-r-1", name: "Gold Ring 1", price: 100, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-2", name: "Gold Ring 2", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-3", name: "Gold Ring 3", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-4", name: "Gold Ring 4", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-5", name: "Gold Ring 5", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-6", name: "Gold Ring 6", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-7", name: "Gold Ring 7", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-8", name: "Gold Ring 8", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-9", name: "Gold Ring 9", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-10", name: "Gold Ring 10", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-11", name: "Gold Ring 11", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-12", name: "Gold Ring 12", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-13", name: "Gold Ring 13", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-14", name: "Gold Ring 14", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-15", name: "Gold Ring 15", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-16", name: "Gold Ring 16", price: 120, image: "/images/Untouched/forgold.jpg" },
    ],

    // ───── Other sub‑categories ─────
    earring:  [ { id: "g-e-1", name: "Gold Earring 1",  price:  80, image: "/images/Untouched/forgold.jpg" } ],
    tiara:    [ { id: "g-t-1", name: "Gold Tiara 1",    price: 200, image: "/images/Untouched/forgold.jpg", description: "A beautifully crafted gold tiara." } ],
    ranihar:  [ { id: "g-ra-1", name: "Gold Ranihar 1", price: 150, image: "/images/Untouched/forgold.jpg" } ],
    necklace: [ { id: "g-n-1", name: "Gold Necklace 1", price: 300, image: "/images/Untouched/forgold.jpg" } ],
    bracelet: [ { id: "g-b-1", name: "Gold Bracelet 1", price:  90, image: "/images/Untouched/forgold.jpg" } ],
    pendant:  [ { id: "g-p-1", name: "Gold Pendant 1",  price: 110, image: "/images/Untouched/forgold.jpg" } ],
    balla:    [ { id: "g-ba-1", name: "Gold Balla 1",    price: 250, image: "/images/Untouched/forgold.jpg", description: "Traditional thick gold bangles (balla/chura)." } ],
  },

  silver: {
    ring:     [ { id: "s-r-1",  name: "Silver Ring 1",   price:  50, image: "/images/Untouched/forsilver.jpg" } ],
    earring:  [ { id: "s-e-1",  name: "Silver Earring 1", price:  35, image: "/images/Untouched/forsilver.jpg" } ],
    tiara:    [ { id: "s-t-1",  name: "Silver Tiara 1",  price:  90, image: "/images/Untouched/forsilver.jpg" } ],
    ranihar:  [ { id: "s-ra-1", name: "Silver Ranihar 1",price:  70, image: "/images/Untouched/forsilver.jpg" } ],
    necklace: [ { id: "s-n-1",  name: "Silver Necklace 1",price: 130, image: "/images/Untouched/forsilver.jpg" } ],
    bracelet: [ { id: "s-b-1",  name: "Silver Bracelet 1",price:  45, image: "/images/Untouched/forsilver.jpg" } ],
    pendant:  [ { id: "s-p-1",  name: "Silver Pendant 1", price:  55, image: "/images/Untouched/forsilver.jpg" } ],
    balla:    [ { id: "s-ba-1", name: "Silver Balla 1",   price:  85, image: "/images/Untouched/forsilver.jpg" } ],
  },
} as const;

/** 3. Handy helpers (optional) */
export const validCategories  = Object.keys(productData) as Category[];
export const validSubcats     = Object.keys(productData.gold) as Subcategory[];
export const defaultSubcat = (category: Category): Subcategory => "ring";
