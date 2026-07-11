import React from "react";
import {
  ShieldCheck,
  Award,
  PackageCheck,
  Globe,
  FileDown,
  MessageCircle,
} from "lucide-react";

const ProductOverview = ({ product }) => {
  return (
    <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
      <div className="grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative h-full overflow-hidden ">
          <div className="absolute inset-0">
            <img
              src={product.image}
              alt={product.title}
              className=" object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-12">
          {/* Category */}
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-sky-700">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
            {product.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {product.description}
          </p>

          {/* Trust Cards */}

          <div className="mt-10 grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-500 hover:bg-white hover:shadow-lg">
              <ShieldCheck className="text-sky-600" size={34} />
              <h3 className="mt-4 font-bold text-slate-900">ASTM / ASME</h3>
              <p className="mt-1 text-sm text-slate-500">
                International Standards
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-green-500 hover:bg-white hover:shadow-lg">
              <Award className="text-green-600" size={34} />
              <h3 className="mt-4 font-bold text-slate-900">ISO Certified</h3>
              <p className="mt-1 text-sm text-slate-500">
                Premium Manufacturing
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-500 hover:bg-white hover:shadow-lg">
              <PackageCheck className="text-orange-600" size={34} />
              <h3 className="mt-4 font-bold text-slate-900">Ready Stock</h3>
              <p className="mt-1 text-sm text-slate-500">Immediate Dispatch</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-500 hover:bg-white hover:shadow-lg">
              <Globe className="text-purple-600" size={34} />
              <h3 className="mt-4 font-bold text-slate-900">Global Export</h3>
              <p className="mt-1 text-sm text-slate-500">
                Exporting to 50+ Countries
              </p>
            </div>
          </div>

          {/* Specifications */}

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 text-lg font-semibold text-white">
              Quick Specifications
            </div>

            <div className="divide-y">
              <div className="flex justify-between px-6 py-5">
                <span className="font-medium text-slate-500">
                  Material Grades
                </span>

                <span className="max-w-[250px] text-right font-semibold text-slate-900">
                  {product.grades?.slice(0, 3).join(", ")}
                </span>
              </div>

              <div className="flex justify-between px-6 py-5">
                <span className="font-medium text-slate-500">Standard</span>

                <span className="font-semibold text-slate-900">
                  {product.specifications?.[0]}
                </span>
              </div>

              <div className="flex justify-between px-6 py-5">
                <span className="font-medium text-slate-500">Product Type</span>

                <span className="font-semibold text-slate-900">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex-1 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700">
              <div className="flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Request Quote
              </div>
            </button>

            <button className="flex-1 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              <div className="flex items-center justify-center gap-2">
                <FileDown size={20} />
                Download Catalogue
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
