import React from "react";

const Hero3 = () => {
  return (
    <section
      className=" mt-20 w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(14, 165, 233, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(14, 165, 233, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* LEFT SIDE - CONTENT & STATS */}
      <div className="w-full lg:w-[58%] flex flex-col justify-between p-8 md:p-16 lg:p-20 z-10">
        {/* Top Tagline */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase">
            Operational Class: Heavy Infrastructure
          </span>
        </div>

        {/* Main Header */}
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black uppercase tracking-tight text-slate-900 leading-[1.05]">
            Forging Structural <br />
            <span className="text-blue-600">Absolute Integrity.</span>
          </h1>
        </div>

        {/* Body Text */}
        <div className="max-w-2xl mb-12">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed tracking-wide">
            Jindutt Metal & Alloy Pvt. Ltd. constructs high-yield component architectures engineered
            exclusively for high-pressure, severe-temperature environments. We
            cross-verify metallurgical structures to guarantee systemic
            endurance across global distribution networks.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-slate-200 mb-8"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mb-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight">
              100%
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-wider text-slate-800 mt-1 uppercase">
              Ultrasonic Tested
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight">
              9001
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-wider text-slate-800 mt-1 uppercase">
              ISO Certified
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight">
              Zero
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-wider text-slate-800 mt-1 uppercase">
              Delamination Rate
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <a
            href="#network"
            className="text-xs font-bold tracking-wider text-slate-950 uppercase hover:text-blue-600 transition flex items-center gap-2"
          >
            Explore Technical Network <span className="text-sm">➔</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - DARK BLUE PANEL */}
      <div className="w-full lg:w-[42%] bg-[#001E73] p-8 md:p-16 flex flex-col justify-between relative min-h-[500px] lg:min-h-screen">
        {/* Top-Left Blueprint Frame Corner */}
        <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-white/20"></div>
        {/* Bottom-Right Blueprint Frame Corner */}
        <div className="absolute bottom-10 right-10 w-[40px] h-[40px] border-b border-r border-white/30"></div>

        {/* QMS Header Badge Section */}
        <div className="mt-6 flex items-start gap-4">
          {/* Badge Icon Box */}
          <div className="border border-white/30 p-2 text-sky-400 flex items-center justify-center relative w-10 h-10">
            <span className="text-xl">⚙</span>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.15em] font-bold text-sky-400 block uppercase mb-1">
              Quality Management System
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              ISO 9001: 2015 <br />
              Certificate
            </h2>
          </div>
        </div>

        {/* Certificate Description */}
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed my-8 max-w-md">
          Verifies our strict international compliance with high-integrity
          quality control, advanced manufacturing assessments, product
          reliability tracking, and raw material validation standards.
        </p>

        {/* Download Button Component */}
        <div className="w-full max-w-md bg-sky-500 hover:bg-sky-400 transition text-white flex items-center justify-between rounded-none shadow-lg mb-8 cursor-pointer group">
          <div className="p-4 md:p-5 flex flex-col text-left">
            <span className="text-xs font-bold tracking-wider uppercase">
              Download Quality Certificate
            </span>
            <span className="text-[10px] text-sky-100 mt-0.5 font-medium">
              PDF Format • Fully Verified QMS Asset
            </span>
          </div>
          <div className="bg-sky-600/50 p-5 md:p-6 flex items-center justify-center group-hover:bg-sky-600/80 transition">
            <span className="text-base">↓</span>
          </div>
        </div>

        {/* Execute Verification Action */}
        <div className="w-full border-t border-white/10 pt-6 mt-auto">
          <button className="text-[10px] tracking-[0.15em] font-bold text-white uppercase hover:text-sky-300 transition flex items-center gap-2">
            Execute Compliance Verification <span className="text-xs">🛡️</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
