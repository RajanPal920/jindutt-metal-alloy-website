import React from "react";
import { FileText, Download } from "lucide-react";
import dimensions from "../../data/dimensions";

const Dimensions = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-950 py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
            Technical Reference
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Dimension & Spec Sheets
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl">
            Download size, tolerance, and weight charts for each product
            category.
          </p>
          <div className="mt-5 h-[3px] w-16 bg-amber-500" />
        </div>
      </div>

      {/* List */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          {dimensions.map((dim, i) => (
            <div
              key={dim.slug}
              className={`flex items-center justify-between gap-4 px-6 py-5 ${
                i !== dimensions.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-red-700" />
                </span>
                <span className="font-semibold text-slate-900 text-sm">
                  {dim.name}
                </span>
              </div>

              {dim.pdf ? (
                <a
                  href={dim.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800 transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dimensions;
