import React, { useContext, useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../customHooks/ProductsContext";
export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const { products, loading, error } = useContext(ProductsContext);

  useEffect(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (filterOption) {
      case "inc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "dec":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "promotion":
        result = result.filter((product) => product.rating.rate > 4);
        break;
      case "new":
        result = result.filter((product) => product.rating.count > 100);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, searchTerm, filterOption]);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleFilter = (option) => {
    setFilterOption(option);
  };
  if (loading) {
    return (
      <div className="pt-[73px]">
        <TopBar onSearch={handleSearch} onFilter={handleFilter} />
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-lg">Loading products...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="pt-[73px]">
        <TopBar onSearch={handleSearch} onFilter={handleFilter} />
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-lg text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-[73px]">
      <TopBar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="mb-4 text-center">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
