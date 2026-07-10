import React from "react";
import { Link, useParams } from "react-router-dom";
import materials from "../../data/materials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const MaterialCategory = () => {
  const { slug } = useParams();
  const material = materials.find((item) => item.slug === slug);

  if (!material) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Material Group Not Found
          </h1>
          <p className="mt-3 text-slate-600">
            The selected material group is unavailable right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50">
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400 mb-2">
            Material Group
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white">
            {material.name} Products
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200 text-sm sm:text-base">
            {material.overview}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-wrap gap-3 mb-10">
          {material.highlight?.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {material.items?.map((item) => (
            <Link
              key={item.slug}
              to={`/materials/${material.slug}/${item.slug}`}
              className="group flex flex-col bg-white rounded-2xl border-2 border-sky-500 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-xl font-bold text-blue-900 leading-7 mb-3 uppercase">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-6 flex-grow">
                  {item.shortDescription}
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

export default MaterialCategory;
