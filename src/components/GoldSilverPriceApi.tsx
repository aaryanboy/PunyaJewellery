import React, { useEffect, useState } from "react";

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
  const [isClient, setIsClient] = useState(false);
  const [isGram, setIsGram] = useState(true);

  useEffect(() => {
    setIsClient(true);

    const savedGold = localStorage.getItem("goldPrice");
    const savedSilver = localStorage.getItem("silverPrice");

    if (savedGold) setGoldPrice(JSON.parse(savedGold));
    if (savedSilver) setSilverPrice(JSON.parse(savedSilver));

    fetchGoldSilverPrice();
  }, []);

  const fetchGoldSilverPrice = async () => {
    const url =
      "https://nepali-gold-silver-rate-live.p.rapidapi.com/api/rates/Nepal";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e9815d93e8msh7b5af54e9669b12p13120ejsn4e32deca2e17", //grams 144120,1642, tola 168100,1915
        "x-rapidapi-host": "nepali-gold-silver-rate-live.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      const metals: MetalData[] = result.metals;

      const gold = metals.find((metal) => metal.name === "Gold");
      const silver = metals.find((metal) => metal.name === "Silver");

      if (gold && gold.types[0]) {
        const newGoldPrice = {
          per10gram: gold.types[0].per10gram,
          per1tola: gold.types[0].per1tola,
        };

        if (
          !goldPrice ||
          newGoldPrice.per10gram !== goldPrice.per10gram ||
          newGoldPrice.per1tola !== goldPrice.per1tola
        ) {
          setGoldPrice(newGoldPrice);
          localStorage.setItem("goldPrice", JSON.stringify(newGoldPrice));
        }
      }

      if (silver && silver.types[0]) {
        const newSilverPrice = {
          per10gram: silver.types[0].per10gram,
          per1tola: silver.types[0].per1tola,
        };

        if (
          !silverPrice ||
          newSilverPrice.per10gram !== silverPrice.per10gram ||
          newSilverPrice.per1tola !== silverPrice.per1tola
        ) {
          setSilverPrice(newSilverPrice);
          localStorage.setItem("silverPrice", JSON.stringify(newSilverPrice));
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      {isClient && goldPrice && silverPrice ? (
        <>
          <button
            onClick={() => setIsGram(!isGram)}
            className="mb-4 p-2 bg-blue-500 text-white rounded"
          >
            {isGram ? "Switch to Tola" : "Switch to Gram"}
          </button>
          <div className="mb-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-yellow-600">Gold</h2>
            <p className="text-gray-700">
              {isGram
                ? `10 Gram: NPR ${goldPrice.per10gram}`
                : `1 Tola: NPR ${goldPrice.per1tola}`}
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-500">Silver</h2>
            <p className="text-gray-700">
              {isGram
                ? `10 Gram: NPR ${silverPrice.per10gram}`
                : `1 Tola: NPR ${silverPrice.per1tola}`}
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading prices...</p>
      )}
    </div>
  );
};

export default GoldSilverPriceApi;
