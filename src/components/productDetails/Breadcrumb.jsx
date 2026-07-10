import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ product }) => {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span className="font-medium text-slate-700">Home</span>
        <ChevronRight size={16} />
        <span className="font-medium text-slate-700">Products</span>
        <ChevronRight size={16} />
        <span className="text-sky-700 font-semibold">{product?.title}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
