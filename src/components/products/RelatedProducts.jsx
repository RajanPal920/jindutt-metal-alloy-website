import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import products from "../../data/products";

const RelatedProducts = ({ relatedProducts = [], product }) => {
  const slugs =
    relatedProducts?.length > 0
      ? relatedProducts
      : product?.relatedProducts || [];

  if (!slugs.length) return null;

  const related = products.filter((item) => slugs.includes(item.slug));

  return (
    <section className=" w-full py-24 bg-gradient-to-b from-slate-100 to-white ">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 ">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Related Products
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Explore More Products
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Discover our complete range of industrial products manufactured to
            international standards with superior quality and worldwide export.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              to={`/products/${item.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-500 border border-slate-200"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                {/* Category */}
                <span className="absolute top-5 left-5 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  {item.category}
                </span>

                {/* Product Name */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white">{item.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="line-clamp-3 text-slate-600 leading-7">
                  {item.shortDescription}
                </p>

                {/* Button */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                    Premium Quality
                  </span>

                  <div className="flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white font-semibold transition group-hover:bg-slate-900">
                    View Product
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
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
