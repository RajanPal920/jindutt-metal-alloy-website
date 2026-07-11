import React from "react";
import { Layers, CheckCircle2 } from "lucide-react";

const Grades = ({ product }) => {
  const grades = product?.grades || product?.materialGrades || [];

  if (!grades.length) return null;

  return (
    <section className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
      {/* Header */}
      <div className="bg-slate-900 px-8 py-6">
        <p className="uppercase tracking-[0.3em] text-sky-400 text-sm font-semibold">
          Material Information
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Available Material Grades
        </h2>
      </div>

      {/* Body */}
      <div className="grid lg:grid-cols-3 gap-10 p-8 lg:p-10">
        {/* Left */}
        <div>
          <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
            <Layers size={34} className="text-sky-600" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Premium Quality Grades
          </h3>

          <p className="mt-4 text-slate-600 leading-8">
            Jindutt Metal & Alloy Pvt. Ltd. supplies industrial products in
            various international grades complying with ASTM, ASME, DIN, EN and
            other global standards. Every material undergoes strict quality
            inspection before dispatch.
          </p>

          <div className="mt-8 rounded-2xl bg-sky-50 border border-sky-200 p-5">
            <p className="text-sky-700 font-semibold">
              ✔ Mill Test Certificate Available
            </p>

            <p className="text-slate-600 mt-2">
              EN 10204 3.1 / Third Party Inspection available on request.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {grades.map((grade) => (
              <div
                key={grade}
                className="group rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-sky-500 hover:shadow-xl transition-all duration-300 p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">
                    <CheckCircle2
                      size={22}
                      className="text-green-600 group-hover:text-white"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">{grade}</h4>

                    <p className="text-sm text-slate-500">Industrial Grade</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            <div className="rounded-2xl bg-slate-900 text-white p-6 text-center">
              <h4 className="text-3xl font-bold">{grades.length}+</h4>
              <p className="mt-2 text-slate-300">Available Grades</p>
            </div>

            <div className="rounded-2xl bg-sky-600 text-white p-6 text-center">
              <h4 className="text-3xl font-bold">100%</h4>
              <p className="mt-2 text-sky-100">Quality Tested</p>
            </div>

            <div className="rounded-2xl bg-green-600 text-white p-6 text-center">
              <h4 className="text-3xl font-bold">50+</h4>
              <p className="mt-2 text-green-100">Export Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grades;
