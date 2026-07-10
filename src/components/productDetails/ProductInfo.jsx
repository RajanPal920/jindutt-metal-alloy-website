import React from "react";

const ProductInfo = ({ product }) => {
  const highlights = [
    product?.category,
    product?.seoTitle,
    product?.specifications?.[0],
  ].filter(Boolean);

  return (
    <section className="rounded-[2rem] border border-slate-200/90 bg-white p-2 shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#f8fbff_60%,#ffffff_100%)] p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
            Product Overview
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            {product?.category}
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-slate-900">
              Engineered for performance, reliability, and long-term industrial
              use
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {product?.description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Key Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
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
