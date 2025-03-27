import React from "react";
import { useParams, useNavigate} from "react-router-dom";
import { jewelryData } from "@/data/jewelryData";
const FullscreenProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the product based on the ID
  const product = jewelryData.find((item) => item.id.toString() === id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="relative bg-white shadow-lg rounded-lg max-w-2xl p-6 text-center">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 text-lg">{product.description}</p>
        <p className="text-lg font-semibold text-green-600 mt-2">${product.price}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default FullscreenProductDetail;
