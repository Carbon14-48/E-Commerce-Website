import React, { useState, useContext } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { CartContext } from "../customHooks/CartContext.jsx";
export default function ProductCard({ product }) {
  const [detailsMode, setDetailsMode] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  function cartHandler() {
    setCart((prev) => [...prev, product.id]);
    console.log(cart);
  }

  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.description}
          className="w-[400px] h-[400px] object-contain p-4"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-green-600 animate-pulse">
            ${product.price}
          </p>
          <button
            onClick={() => setDetailsMode(!detailsMode)}
            className="flex items-center p-1 text-green-500 hover:scale-103 rounded transition-all duration-300 cursor-pointer"
            aria-label={detailsMode ? "Hide details" : "Show details"}
            style={{ minWidth: "120px" }}
          >
            {detailsMode ? (
              <VisibilityOffOutlinedIcon fontSize="small" />
            ) : (
              <RemoveRedEyeOutlinedIcon fontSize="small" />
            )}
            <span className="ml-2 text-sm">
              {detailsMode ? "Hide Details" : "Show Details"}
            </span>
          </button>
        </div>

        {detailsMode && (
          <div className="mb-4 pt-2 border-t">
            <p className="text-sm text-gray-600 dark:text-teal-200">
              {product.description}
            </p>
            <div className="flex justify-between text-sm">
              <span className="pt-4">Rating: ⭐ {product.rating.rate}/5</span>
              <span className="pt-4">Stock: {product.rating.count}</span>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            cartHandler();
          }}
          className="w-full mt-3 flex justify-center items-center p-2 bg-blue-500 hover:scale-103 cursor-pointer hover:bg-blue-600 text-white rounded transition-all duration-300"
          aria-label="Add to cart"
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
