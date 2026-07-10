import React from "react";
import { Globe } from "lucide-react";

const Countries = ({ product }) => {
  const countries = product?.countries || [];
  const cities = product?.cities || [];

  if (
    (!countries || countries.length === 0) &&
    (!cities || cities.length === 0)
  )
    return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold">
            Global Presence
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Export Countries
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-7">
            Jindutt Metal & Alloy Pvt. Ltd. supplies premium quality industrial
            products to customers across the globe with reliable delivery,
            certified quality and competitive pricing.
          </p>
        </div>

        {/* Countries */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-sky-50 hover:border-sky-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition">
                <Globe
                  size={28}
                  className="text-sky-700 group-hover:text-white transition"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {country}
                </h3>

                <p className="text-sm text-slate-500">Export Destination</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
