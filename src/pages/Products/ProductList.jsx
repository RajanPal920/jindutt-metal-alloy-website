import React from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/Product/ProductCard";

import coils from "../../data/productDetails/coils";
// Later you'll import valves, flanges, wires, etc.

const ProductList = () => {
  const { category } = useParams();

  let products = [];

  if (category === "coils") {
    products = coils;
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">{category.toUpperCase()}</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
