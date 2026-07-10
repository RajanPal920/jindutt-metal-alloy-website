import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      {/* Image */}
      <div className="relative h-64 overflow-hidden " >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-slate-600 text-sm leading-7 line-clamp-3 mb-6">
          {product.description}
        </p>

        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          View Details
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
