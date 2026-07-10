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
        className="relative h-56 bg-cover bg-center sm:h-72 lg:h-80"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Material Group
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {material.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {material.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {material.highlight?.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {material.items?.map((item) => (
            <Link
              key={item.slug}
              to={`/materials/${material.slug}/${item.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(15,23,42,0.4)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.shortDescription}
                </p>
                <div className="mt-5 text-sm font-semibold text-sky-700">
                  View material details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialCategory;
