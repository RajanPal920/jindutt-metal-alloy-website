import React from "react";
import { Link, useParams } from "react-router-dom";
import materials from "../../data/materials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const MaterialDetail = () => {
  const { slug, itemSlug } = useParams();
  const material = materials.find((item) => item.slug === slug);
  const detail = material?.items?.find((item) => item.slug === itemSlug);

  if (!material || !detail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Material Details Not Found
          </h1>
          <p className="mt-3 text-slate-600">
            The requested material grade is not available right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Hero Banner — matches Products/Materials/Dimensions banner treatment */}
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-5 sm:px-8 lg:px-10">
          <Link
            to={`/materials/${material.slug}`}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 hover:text-sky-300 mb-3 inline-block w-fit"
          >
            ← Back to {material.name}
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200 text-sm sm:text-base">
            {detail.description}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        {/* Main content */}
        <div className="overflow-hidden rounded-2xl border-2 border-sky-500 bg-white shadow-md">
          <img
            src={detail.image}
            alt={detail.title}
            className="h-72 w-full object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold text-blue-900 uppercase">
              Overview
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {detail.shortDescription}
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-blue-900 uppercase">
                Key Properties
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {detail.properties?.map((property) => (
                  <span
                    key={property}
                    className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900"
                  >
                    {property}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="rounded-2xl border-2 border-sky-500 bg-white p-8 shadow-md h-fit">
          <h3 className="text-lg font-bold text-blue-900 uppercase">
            Typical Applications
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {detail.applications?.map((application) => (
              <li key={application} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500 shrink-0" />
                <span>{application}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-blue-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-900/60">
              Material Group
            </p>
            <h4 className="mt-2 text-xl font-bold text-blue-900 uppercase">
              {material.name}
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {material.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialDetail;
