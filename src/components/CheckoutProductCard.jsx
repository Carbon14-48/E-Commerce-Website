import React from "react";
export default function CheckoutProductCard({ product }) {
  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={product.image}
        alt={product.title}
        className="w-20 h-20 object-contain rounded mr-6"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-green-600 font-bold">${product.price}</p>
        <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
      </div>
      <div className="font-bold text-lg text-blue-600">
        ${product.total.toFixed(2)}
      </div>
    </div>
  );
}
