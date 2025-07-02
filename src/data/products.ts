// src/data/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};

export const productData: {
  [category: string]: {
    [subcategory: string]: Product[];
  };
} = {
  gold: {
    ring: [
      { id: "g-r-1", name: "Gold Ring 1", price: 100, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-2", name: "Gold Ring 2", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-3", name: "Gold Ring 3", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-4", name: "Gold Ring 4", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-5", name: "Gold Ring 5", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-6", name: "Gold Ring 6", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-7", name: "Gold Ring 7", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-8", name: "Gold Ring 8", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-9", name: "Gold Ring 9", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-10", name: "Gold Ring 10", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-11", name: "Gold Ring 11", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-12", name: "Gold Ring 12", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-13", name: "Gold Ring 13", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-14", name: "Gold Ring 14", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-15", name: "Gold Ring 15", price: 120, image: "/images/Untouched/forgold.jpg" },
      { id: "g-r-16", name: "Gold Ring 16", price: 120, image: "/images/Untouched/forgold.jpg" },

    ],
    tiara: [
      { id: "g-t-1", name: "Gold Tiara 1", price: 200, image: "/images/Untouched/forgold.jpg", description: "This is a beautiful gold tiara." },
    ],
    ranihar: [
      { id: "g-ra-1", name: "Gold Ranihar 1", price: 150, image: "/images/Untouched/forgold.jpg" },
    ],
    earing: [
      { id: "g-e-1", name: "Gold Earing 1", price: 80, image: "/images/Untouched/forgold.jpg" },
    ],
    necklace: [
      { id: "g-n-1", name: "Gold Necklace 1", price: 300, image: "/images/Untouched/forgold.jpg" },
    ],
    bracelet: [
      { id: "g-b-1", name: "Gold Bracelet 1", price: 90, image: "/images/Untouched/forgold.jpg" },
    ],
    pendant: [
      { id: "g-p-1", name: "Gold Pendant 1", price: 110, image: "/images/Untouched/forgold.jpg" },
    ],
    balla: [
      { id: "g-c-1", name: "Gold Chura 1", price: 250, image: "/images/Untouched/forgold.jpg" },
    ],
  },
  silver: {
    ring: [
      { id: "s-r-1", name: "Silver Ring 1", price: 50, image: "/images/Untouched/forsilver.jpg" },
    ],
    tiara: [
      { id: "s-t-1", name: "Silver Tiara 1", price: 90, image: "/images/Untouched/forsilver.jpg" },
    ],
    ranihar: [
      { id: "s-ra-1", name: "Silver Ranihar 1", price: 70, image: "/images/Untouched/forsilver.jpg" },
    ],
  },
}
