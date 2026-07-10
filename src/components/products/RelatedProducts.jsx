import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import products from "../../data/products";

const RelatedProducts = ({ relatedProducts = [], product }) => {
  const slugs = relatedProducts?.length
    ? relatedProducts
    : product?.relatedProducts || [];

  if (!slugs.length) return null;

  const related = products.filter((item) => slugs.includes(item.slug));

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold">
            You May Also Like
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Related Products
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600">
            Explore more industrial products manufactured and supplied by
            Jindutt Metal & Alloy Pvt. Ltd. Export.
          </p>
        </div>

        {/* Products */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-sky-100 text-sky-700">
                  {product.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-7 line-clamp-3">
                  {product.shortDescription}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sky-600 font-semibold">
                  View Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
