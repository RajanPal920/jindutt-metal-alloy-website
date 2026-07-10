import React from "react";
import {
  Repeat,
  CircleDot,
  LayoutGrid,
  AlignJustify,
  FileText,
  Database,
  Activity,
  Share2,
  Anchor,
  Settings,
  Wrench,
  Columns3,
  Minus,
  Download,
} from "lucide-react";
import dimensions from "../../data/dimensions";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

// Icon per category — mirrors the icon set used in the reference site's
// Dimensions mega-menu (fa-repeat, fa-circle-o-notch, fa-th-large, etc.)
const iconMap = {
  coils: Repeat,
  pipes: CircleDot,
  plates: LayoutGrid,
  "round-bars": AlignJustify,
  sheets: FileText,
  tubes: Database,
  wires: Activity,
  "buttweld-fittings": Share2,
  "forged-fittings": Anchor,
  flanges: Settings,
  fasteners: Wrench,
  "angle-channels": Columns3,
  "patta-patti": Minus,
};

const Dimensions = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero Banner — matches Products/Materials banner treatment */}
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-5 sm:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white">
            Dimensions
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200 text-sm sm:text-base">
            Download size, tolerance, and weight charts for each product
            category.
          </p>
        </div>
      </div>

      {/* Grid — same card language as Products & Materials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dimensions.map((dim) => {
            const Icon = iconMap[dim.slug] ?? FileText;
            return (
              <div
                key={dim.slug}
                className="flex items-center justify-between gap-4 bg-white border-2 border-sky-500 rounded-2xl px-6 py-5 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-900" />
                  </span>
                  <span className="font-bold text-blue-900 text-sm uppercase">
                    {dim.name}
                  </span>
                </div>

                {dim.pdf ? (
                  <a
                    href={dim.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-sky-600 transition-colors shrink-0"
                  >
                    <Download size={16} />
                    PDF
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 italic shrink-0">
                    Coming soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dimensions;
