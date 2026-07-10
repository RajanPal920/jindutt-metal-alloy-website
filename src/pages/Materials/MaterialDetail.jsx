import React from "react";
import { Link, useParams } from "react-router-dom";
import materials from "../../data/materials";

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
      <div className="bg-slate-950 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to={`/materials/${material.slug}`}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 hover:text-sky-300"
          >
            ← Back to {material.name}
          </Link>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {detail.description}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)]">
          <img
            src={detail.image}
            alt={detail.title}
            className="h-72 w-full object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {detail.shortDescription}
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Key Properties
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {detail.properties?.map((property) => (
                  <span
                    key={property}
                    className="rounded-full bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700"
                  >
                    {property}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)]">
          <h3 className="text-lg font-semibold text-slate-900">
            Typical Applications
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {detail.applications?.map((application) => (
              <li key={application} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <span>{application}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Material Group
            </p>
            <h4 className="mt-2 text-xl font-semibold text-slate-900">
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
