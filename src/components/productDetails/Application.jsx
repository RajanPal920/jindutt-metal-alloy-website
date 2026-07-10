import React from "react";
import { Factory } from "lucide-react";

const Application = ({ product }) => {
  const applications = product?.applications || [];
  const industries = product?.industries || [];

  if (
    (!applications || applications.length === 0) &&
    (!industries || industries.length === 0)
  )
    return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sky-600 uppercase tracking-[0.3em] font-semibold">
            Industrial Usage
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Applications
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Application Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((application, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition">
                <Factory
                  size={30}
                  className="text-sky-700 group-hover:text-white transition"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-800">
                {application}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Application;
