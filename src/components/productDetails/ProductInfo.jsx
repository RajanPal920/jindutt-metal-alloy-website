import React from "react";

const ProductInfo = ({ product }) => {
  const highlights = [
    product?.category,
    product?.seoTitle,
    product?.specifications?.[0],
  ].filter(Boolean);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)] overflow-hidden">
      <div className="p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-600 bg-amber-50 rounded-full px-4 py-2">
            Overview
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            {product?.category}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-slate-900">
              Engineered for performance, reliability, and long-term industrial
              use
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-8 text-slate-600">
              {product?.description}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-900">
              Key Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
