import React from "react";
import { ShieldCheck } from "lucide-react";

const Features = ({ product }) => {
  const features = product?.features || [];

  if (!features || features.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sky-600 uppercase tracking-[0.3em] font-semibold">
            Product Advantages
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Key Features
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-sky-50 hover:border-sky-300 hover:shadow-lg transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition">
                <ShieldCheck
                  size={28}
                  className="text-sky-700 group-hover:text-white transition"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {feature}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Premium quality assurance
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
