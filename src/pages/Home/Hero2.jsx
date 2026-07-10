import React from "react";

const Hero2 = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-12 md:px-24 py-16 gap-12">
      {/* LEFT SIDE - HUGE HEADER */}
      <div className="w-full md:w-1/2 flex items-center">
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-slate-800 leading-[1.1]">
          <span className="text-blue-600 block mb-2">
            Engineered for Extremes,
          </span>
          Our heavy-duty steel pipes and industrial tubing anchor critical
          energy, processing, and infrastructure frameworks globally.
        </h1>
      </div>

      {/* RIGHT SIDE - DETAILS & IMAGE */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full max-w-lg">
        {/* CONTENT BOX */}
        <div className="text-left flex flex-col items-start mt-4">
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-md">
            Manufactured under rigorous metallurgical standards and testing
            protocols, our high-yield products deliver unmatched structural
            integrity for demanding global contractors and heavy engineering
            firms.
          </p>

          <div className="w-full border-b border-blue-600 pb-2">
            <a
              href="/products"
              className="text-blue-600 font-bold text-xs tracking-wider hover:opacity-80 transition uppercase"
            >
              Verify Compliance & Standards →
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-12 flex justify-end w-full">
          <img
            src="https://rpmexport.in/images/pipeline.webp"
            alt="Pipeline"
            className="w-full max-w-md h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
