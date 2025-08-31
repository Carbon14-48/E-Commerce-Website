import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import ProductCard from "../components/ProductCard"; // Adjust path as needed

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="pt-[73px]">
        <TopBar />
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-[73px]">
        <TopBar />
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-lg text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[73px]">
      <TopBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
