import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.006)] hover:shadow-[0_12px_40px_rgb(15,23,42,0.04)] hover:border-slate-200/60 transition-all duration-500 flex flex-col h-full">
      {/* VISUAL CANVAS AREA */}
      <div className="relative h-60 bg-gradient-to-b from-slate-50 to-slate-100/50 overflow-hidden flex items-center justify-center border-b border-slate-100/50">
        {/* Subtle Engineering Grid Subtle Hint */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:24px_24px] mix-blend-overlay" />

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* CARD CONTENT HUB */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Header Title */}
          <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Body Description */}
          <p className="text-slate-400 text-xs font-normal leading-relaxed line-clamp-3 mb-6">
            {product.description}
          </p>
        </div>

        {/* Clean Line Link Action */}
        <div>
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 hover:text-slate-600"
          >
            <span>View Details</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 transform group-hover:translate-x-1 stroke-[2.5]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
