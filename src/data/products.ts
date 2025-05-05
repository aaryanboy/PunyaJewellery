// data/products.ts
export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    // Add other properties as needed, e.g., description, stock
  };
  
  export const productData: {
    [category: string]: {
      [subcategory: string]: Product[];
    };
  } = {
    gold: {
      ring: [
        { id: "g-r-1", name: "Gold Ring 1", price: 100, image: "/images/gold-ring-1.jpg" },
        { id: "g-r-2", name: "Gold Ring 2", price: 120, image: "/images/gold-ring-2.jpg" },
      ],
      tiara: [
        { id: "g-t-1", name: "Gold Tiara 1", price: 200, image: "/images/gold-tiara-1.jpg" },
      ],
      ranihar: [
        { id: "g-ra-1", name: "Gold Ranihar 1", price: 150, image: "/images/gold-ranihar-1.jpg" },
      ],
      earing: [
        { id: "g-e-1", name: "Gold Earing 1", price: 80, image: "/images/gold-earing-1.jpg" },
      ],
    },
    silver: {
      ring: [
        { id: "s-r-1", name: "Silver Ring 1", price: 50, image: "/images/silver-ring-1.jpg" },
      ],
      tiara: [
        { id: "s-t-1", name: "Silver Tiara 1", price: 90, image: "/images/silver-tiara-1.jpg" },
      ],
      ranihar: [
        { id: "s-ra-1", name: "Silver Ranihar 1", price: 70, image: "/images/silver-ranihar-1.jpg" },
      ],
      
    },
  };