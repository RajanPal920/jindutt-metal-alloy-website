import React from "react";
import { Link } from "react-router-dom";
import materials from "../../data/materials";

const Materials = () => {
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)]">
      <div className="bg-slate-950 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-400">
            Materials
          </span>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Engineered materials for critical industrial applications.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore our broad portfolio of stainless, duplex, nickel, titanium,
            and specialty alloys with the quality assurance needed for demanding
            projects.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {materials.map((material) => (
            <Link
              key={material.slug}
              to={`/materials/${material.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(15,23,42,0.4)]"
            >
              <div className="overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {material.name}
                  </h3>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Alloy Group
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {material.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-sky-700">
                  View available grades →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
