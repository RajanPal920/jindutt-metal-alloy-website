import React from "react";
import {
  FileText,
  Ruler,
  Layers,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const Specification = ({ product }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 px-8 py-6">
        <p className="uppercase tracking-[0.3em] text-sky-400 text-sm font-semibold">
          Technical Information
        </p>

        <h2 className="text-3xl font-bold text-white mt-2">
          Product Specifications
        </h2>
      </div>

      {/* Specification Table */}
      <div className="divide-y divide-slate-200">
        {/* Standards */}
        <div className="grid lg:grid-cols-3">
          <div className="bg-slate-50 p-6 flex items-center gap-3 font-semibold">
            <FileText className="text-sky-600" />
            Standards
          </div>

          <div className="lg:col-span-2 p-6">
            <div className="flex flex-wrap gap-3">
              {product.specifications?.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grades */}
        <div className="grid lg:grid-cols-3">
          <div className="bg-slate-50 p-6 flex items-center gap-3 font-semibold">
            <Layers className="text-sky-600" />
            Material Grades
          </div>

          <div className="lg:col-span-2 p-6">
            <div className="flex flex-wrap gap-3">
              {product.grades?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sizes */}
        {product.sizes && (
          <div className="grid lg:grid-cols-3">
            <div className="bg-slate-50 p-6 flex items-center gap-3 font-semibold">
              <Ruler className="text-sky-600" />
              Available Sizes
            </div>

            <div className="lg:col-span-2 p-6">
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Finishes */}
        {product.finishes && (
          <div className="grid lg:grid-cols-3">
            <div className="bg-slate-50 p-6 flex items-center gap-3 font-semibold">
              <ShieldCheck className="text-sky-600" />
              Surface Finish
            </div>

            <div className="lg:col-span-2 p-6">
              <div className="grid md:grid-cols-2 gap-3">
                {product.finishes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle size={18} className="text-green-600" />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specification;
