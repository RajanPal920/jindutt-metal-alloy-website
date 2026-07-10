import React from "react";
import { Link } from "react-router-dom";
import materials from "../../data/materials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const Materials = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-5 sm:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white">
            Materials
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200 text-sm sm:text-base">
            Explore our broad portfolio of stainless, duplex, nickel, titanium,
            and specialty alloys for demanding industrial projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {materials.map((material) => (
            <Link
              key={material.slug}
              to={`/materials/${material.slug}`}
              className="group flex flex-col bg-white rounded-2xl border-2 border-sky-500 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-xl font-bold text-blue-900 leading-7 mb-3 uppercase">
                  {material.name}
                </h2>
                <p className="text-gray-600 text-sm leading-6 flex-grow">
                  {material.description}
                </p>
                <span className="mt-8 w-full text-center bg-blue-900 group-hover:bg-sky-600 text-white font-semibold uppercase tracking-wide py-3 rounded-lg transition-all duration-300">
                  Explore Range
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
