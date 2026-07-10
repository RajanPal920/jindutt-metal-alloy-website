import React from "react";
import { FileText } from "lucide-react";

const Specification = ({ product }) => {
  const specifications = product?.specifications || [];

  if (!specifications || specifications.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sky-600 uppercase tracking-[0.3em] font-semibold">
            Product Standards
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Specifications
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Specification Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:bg-sky-50 hover:border-sky-300 transition duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                <FileText size={22} className="text-sky-700" />
              </div>

              <div>
                <p className="text-slate-500 text-sm">Standard</p>

                <h3 className="font-semibold text-slate-800">{spec}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specification;
