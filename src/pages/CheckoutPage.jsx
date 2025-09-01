import React, { useContext } from "react";
import { CartContext } from "../customHooks/CartContext";
import { ProductsContext } from "../customHooks/ProductsContext";
import CheckoutProductCard from "../components/CheckoutProductCard";

export default function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);
  const { products, loading, error } = useContext(ProductsContext);

  const idCount = new Map();
  for (let id of cart) {
    idCount.set(id, (idCount.get(id) || 0) + 1);
  }

  const cartProducts = products
    .filter((product) => idCount.has(product.id))
    .map((product) => ({
      ...product,
      quantity: idCount.get(product.id),
      total: idCount.get(product.id) * product.price,
    }));

  const grandTotal = cartProducts.reduce((sum, p) => sum + p.total, 0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  function clearCart() {
    setCart(() => []);
  }
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-700 rounded-lg shadow-lg mt-[73px]">
      <h2 className="text-4xl font-bold mb-6 text-center text-cyan-500">
        🛒 Checkout
      </h2>
      {cartProducts.length === 0 && (
        <div className="text-center text-gray-500 py-16">
          Your cart is empty!
        </div>
      )}
      {cartProducts.map((product) => (
        <CheckoutProductCard key={product.id} product={product} />
      ))}
      {cartProducts.length > 0 && (
        <div className="mt-8 text-right text-xl font-bold text-green-700">
          Total: ${grandTotal.toFixed(2)}
        </div>
      )}
      <button
        className="text-slate-200 border-2 border-red-500 p-2 shadow-lg hover:scale-105 cursor-pointer transition-all"
        onClick={() => {
          clearCart();
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}
