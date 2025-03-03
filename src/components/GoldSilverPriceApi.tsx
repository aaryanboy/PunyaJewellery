// GoldSilverPrice.tsx
import React, { useEffect, useState } from "react";

// Define the structure of the fetched data
interface PriceData {
  per10gram: number;
  per1tola: number;
}

interface MetalData {
  name: string;
  types: {
    type: string;
    per10gram: number;
    per1tola: number;
  }[];
}

const GoldSilverPriceApi: React.FC = () => {
  const [goldPrice, setGoldPrice] = useState<PriceData | null>(null);
  const [silverPrice, setSilverPrice] = useState<PriceData | null>(null);

  // Function to fetch and display the gold and silver prices
  const fetchGoldSilverPrice = async () => {
    const url = "https://nepali-gold-silver-rate-live.p.rapidapi.com/api/rates/Nepal";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e9815d93e8msh7b5af54e9669b12p13120ejsn4e32deca2e17",
        "x-rapidapi-host": "nepali-gold-silver-rate-live.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const metals: MetalData[] = result.metals;

      // Extract Gold and Silver price data
      const gold = metals.find((metal) => metal.name === "Gold");
      const silver = metals.find((metal) => metal.name === "Silver");

      if (gold && gold.types[0]) {
        setGoldPrice({
          per10gram: gold.types[0].per10gram,
          per1tola: gold.types[0].per1tola,
        });
      }

      if (silver && silver.types[0]) {
        setSilverPrice({
          per10gram: silver.types[0].per10gram,
          per1tola: silver.types[0].per1tola,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch prices when component mounts
  useEffect(() => {
    fetchGoldSilverPrice();
  }, []);

  // Render the price data
  return (
    <div>
      <h1>Gold and Silver Price in Nepal</h1>
      {goldPrice && silverPrice ? (
        <>
          <div>
            <h2>Gold Price:</h2>
            <p>Per 10 Gram: NPR {goldPrice.per10gram}</p>
            <p>Per 1 Tola: NPR {goldPrice.per1tola}</p>
          </div>
          <div>
            <h2>Silver Price:</h2>
            <p>Per 10 Gram: NPR {silverPrice.per10gram}</p>
            <p>Per 1 Tola: NPR {silverPrice.per1tola}</p>
          </div>
        </>
      ) : (
        <p>Loading prices...</p>
      )}
    </div>
  );
};

export default GoldSilverPriceApi;
