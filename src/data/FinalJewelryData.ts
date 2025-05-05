interface JewelryProduct {
    id: string;
    name: string;
    material: 'gold' | 'silver';  // Type safety for materials
    category: string;
    subCategory: string;
    size: string;
    weight: number;  // In grams
    price: number;   // In currency (e.g., NPR)
    description: string;
    imageUrl: string;
  }
  
  interface JewelryCatalog {
    products: JewelryProduct[];
  }
  
  // Sample data with 21 products
  const catalog: JewelryCatalog = {
    products: [
      {
        id: "P001",
        name: "Gold Tilhari",
        material: "gold",
        category: "Necklaces",
        subCategory: "Tilhari",
        size: "Medium",
        weight: 45,
        price: 35000,
        description: "A beautiful gold tilhari necklace with intricate design.",
        imageUrl: "https://example.com/images/gold_tilhari.jpg"
      },
      {
        id: "P002",
        name: "Gold Mangalsutra",
        material: "gold",
        category: "Necklaces",
        subCategory: "Mangalsutra",
        size: "Large",
        weight: 65,
        price: 60000,
        description: "Elegant gold mangalsutra with diamond embellishments.",
        imageUrl: "https://example.com/images/gold_mangalsutra.jpg"
      },
      {
        id: "P003",
        name: "Silver Ranihaar",
        material: "silver",
        category: "Necklaces",
        subCategory: "Ranihaar",
        size: "Large",
        weight: 120,
        price: 20000,
        description: "Stylish silver ranihaar with classic design.",
        imageUrl: "https://example.com/images/silver_ranihaar.jpg"
      },
      {
        id: "P004",
        name: "Silver Kantha",
        material: "silver",
        category: "Necklaces",
        subCategory: "Kantha",
        size: "Small",
        weight: 35,
        price: 15000,
        description: "A lightweight silver kantha necklace perfect for everyday wear.",
        imageUrl: "https://example.com/images/silver_kantha.jpg"
      },
      {
        id: "P005",
        name: "Gold Ranihaar",
        material: "gold",
        category: "Necklaces",
        subCategory: "Ranihaar",
        size: "Large",
        weight: 150,
        price: 120000,
        description: "Luxurious gold ranihaar with intricate patterns and diamonds.",
        imageUrl: "https://example.com/images/gold_ranihaar.jpg"
      },
      {
        id: "P006",
        name: "Silver Mangalsutra",
        material: "silver",
        category: "Necklaces",
        subCategory: "Mangalsutra",
        size: "Medium",
        weight: 60,
        price: 25000,
        description: "Simple yet elegant silver mangalsutra with subtle detailing.",
        imageUrl: "https://example.com/images/silver_mangalsutra.jpg"
      },
      {
        id: "P007",
        name: "Gold Kantha",
        material: "gold",
        category: "Necklaces",
        subCategory: "Kantha",
        size: "Medium",
        weight: 55,
        price: 45000,
        description: "Gold kantha with delicate filigree work.",
        imageUrl: "https://example.com/images/gold_kantha.jpg"
      },
      {
        id: "P008",
        name: "Gold Choker Necklace",
        material: "gold",
        category: "Necklaces",
        subCategory: "Choker",
        size: "Small",
        weight: 40,
        price: 28000,
        description: "Choker-style gold necklace with a modern touch.",
        imageUrl: "https://example.com/images/gold_choker.jpg"
      },
      {
        id: "P009",
        name: "Silver Choker Necklace",
        material: "silver",
        category: "Necklaces",
        subCategory: "Choker",
        size: "Small",
        weight: 38,
        price: 12000,
        description: "Classic silver choker with a contemporary design.",
        imageUrl: "https://example.com/images/silver_choker.jpg"
      },
      {
        id: "P010",
        name: "Gold Earrings",
        material: "gold",
        category: "Earrings",
        subCategory: "Studs",
        size: "Small",
        weight: 15,
        price: 10000,
        description: "Elegant gold stud earrings with a polished finish.",
        imageUrl: "https://example.com/images/gold_earrings.jpg"
      },
      {
        id: "P011",
        name: "Silver Earrings",
        material: "silver",
        category: "Earrings",
        subCategory: "Studs",
        size: "Small",
        weight: 12,
        price: 5000,
        description: "Stylish silver stud earrings with a unique design.",
        imageUrl: "https://example.com/images/silver_earrings.jpg"
      },
      {
        id: "P012",
        name: "Gold Bracelet",
        material: "gold",
        category: "Bracelets",
        subCategory: "Bangle",
        size: "Medium",
        weight: 35,
        price: 22000,
        description: "Beautiful gold bangle with intricate designs.",
        imageUrl: "https://example.com/images/gold_bracelet.jpg"
      },
      {
        id: "P013",
        name: "Silver Bracelet",
        material: "silver",
        category: "Bracelets",
        subCategory: "Bangle",
        size: "Small",
        weight: 25,
        price: 8000,
        description: "Simple and elegant silver bangle.",
        imageUrl: "https://example.com/images/silver_bracelet.jpg"
      },
      {
        id: "P014",
        name: "Gold Ring",
        material: "gold",
        category: "Rings",
        subCategory: "Solitaire",
        size: "Small",
        weight: 10,
        price: 15000,
        description: "A solitaire gold ring with a brilliant diamond.",
        imageUrl: "https://example.com/images/gold_ring.jpg"
      },
      {
        id: "P015",
        name: "Silver Ring",
        material: "silver",
        category: "Rings",
        subCategory: "Solitaire",
        size: "Medium",
        weight: 8,
        price: 7000,
        description: "A simple yet elegant solitaire silver ring.",
        imageUrl: "https://example.com/images/silver_ring.jpg"
      },
      {
        id: "P016",
        name: "Gold Anklet",
        material: "gold",
        category: "Anklets",
        subCategory: "Chain",
        size: "Medium",
        weight: 50,
        price: 18000,
        description: "Delicate gold anklet with a traditional design.",
        imageUrl: "https://example.com/images/gold_anklet.jpg"
      },
      {
        id: "P017",
        name: "Silver Anklet",
        material: "silver",
        category: "Anklets",
        subCategory: "Chain",
        size: "Small",
        weight: 45,
        price: 8500,
        description: "Elegant silver anklet with a minimalistic design.",
        imageUrl: "https://example.com/images/silver_anklet.jpg"
      },
      {
        id: "P018",
        name: "Gold Nose Pin",
        material: "gold",
        category: "Nose Pins",
        subCategory: "Stud",
        size: "Small",
        weight: 3,
        price: 5000,
        description: "Subtle gold nose pin with a sparkling diamond.",
        imageUrl: "https://example.com/images/gold_nosepin.jpg"
      },
      {
        id: "P019",
        name: "Silver Nose Pin",
        material: "silver",
        category: "Nose Pins",
        subCategory: "Stud",
        size: "Tiny",
        weight: 2,
        price: 1500,
        description: "Simple silver nose pin for everyday use.",
        imageUrl: "https://example.com/images/silver_nosepin.jpg"
      },
      {
        id: "P020",
        name: "Gold Pendant",
        material: "gold",
        category: "Pendants",
        subCategory: "Charm",
        size: "Medium",
        weight: 20,
        price: 12000,
        description: "Gold pendant with a charming and elegant design.",
        imageUrl: "https://example.com/images/gold_pendant.jpg"
      },
      {
        id: "P021",
        name: "Silver Pendant",
        material: "silver",
        category: "Pendants",
        subCategory: "Charm",
        size: "Small",
        weight: 15,
        price: 7000,
        description: "Silver pendant with a unique charm design.",
        imageUrl: "https://example.com/images/silver_pendant.jpg"
      }
    ]
  };
  