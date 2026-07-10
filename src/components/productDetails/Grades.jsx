import React from "react";
import { CheckCircle } from "lucide-react";

const Grades = ({ product }) => {
  const grades = product?.grades || product?.materialGrades || [];

  if (!grades || grades.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sky-600 uppercase tracking-[0.3em] font-semibold">
            Available Materials
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Product Grades
          </h2>

          <div className="w-24 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grades Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {grades.map((grade, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-5 flex items-center gap-4"
            >
              <div className="bg-sky-100 p-2 rounded-full">
                <CheckCircle size={22} className="text-sky-600" />
              </div>

              <h3 className="font-semibold text-slate-800">{grade}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grades;
