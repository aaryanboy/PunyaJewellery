// data/products.ts
export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string; // Optional property for product description
  };
  
  export const productData: {
    [category: string]: {
      [subcategory: string]: Product[];
    };
  } = {
    gold: {
      ring: [
        { id: "g-r-1", name: "Gold Ring 1", price: 100, image: "/images/Untouched/forgold.jpg" },
        { id: "g-r-2", name: "Gold Ring 2", price: 120, image: "/images/Untouched/forgold.jpg" },
      ],
      tiara: [
        { id: "g-t-1", name: "Gold Tiara 1", price: 200, image: "/images/Untouched/forgold.jpg" ,description: "This is a beautiful gold tiara."},
      ],
      ranihar: [
        { id: "g-ra-1", name: "Gold Ranihar 1", price: 150, image: "/images/Untouched/forgold.jpg" },
      ],
      earing: [
        { id: "g-e-1", name: "Gold Earing 1", price: 80, image: "/images/Untouched/forgold.jpg" },
      ],
    },
    silver: {
      ring: [
        { id: "s-r-1", name: "Silver Ring 1", price: 50, image: "/images/Untouched/forsilver.jpg" },
      ],
      tiara: [
        { id: "s-t-1", name: "Silver Tiara 1", price: 90, image: "/images/Untouched/forsilver.jpg" },
      ],
      ranihar: [
        { id: "s-ra-1", name: "Silver Ranihar 1", price: 70, image: "/images/Untouched/forsilver.jpg" },
      ],
      
    },
  };