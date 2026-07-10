import React, { useState, useMemo } from "react";
import { X } from "lucide-react";
import products from "../../data/products";

// Filterable, lightbox gallery — mirrors the reference site's UX pattern
// (category filter + click-to-enlarge) using your own product photography.
// Swap in real facility/product photos any time by editing data/products.js
// or adding new entries here.
const Gallery = () => {
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [],
  );
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-blue-950 py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
            Our Work
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Gallery
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl">
            A look at our products and finished work.
          </p>
          <div className="mt-5 h-[3px] w-16 bg-amber-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                activeFilter === cat
                  ? "bg-sky-700 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-blue-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <button
              key={product.slug}
              onClick={() => setLightboxImage(product)}
              className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm text-left"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-sm font-semibold">
                  {product.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImage.image}
            alt={lightboxImage.name}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
