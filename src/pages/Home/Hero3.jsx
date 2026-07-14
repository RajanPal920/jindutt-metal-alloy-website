// src/components/home/Hero3.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaAward,
  FaFileDownload,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";

const Hero3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white pt-20"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(215, 155, 32, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(215, 155, 32, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* LEFT SIDE - CONTENT & STATS */}
      <div
        ref={leftRef}
        className={`w-full lg:w-[58%] flex flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20 z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
        }`}
      >
        {/* Top Tagline */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-[#0a1a52] uppercase">
            Operational Class: Heavy Infrastructure
          </span>
        </div>

        {/* Main Header */}
        <div className="max-w-2xl mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
            <span className="text-[#0a1a52]">Forging Structural</span> <br />
            <span className="text-[#d79b20]">Absolute Integrity.</span>
          </h1>
        </div>

        {/* Body Text */}
        <div className="max-w-2xl mb-10">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Jindutt Metal & Alloy Pvt. Ltd. constructs high-yield component
            architectures engineered exclusively for high-pressure,
            severe-temperature environments. We cross-verify metallurgical
            structures to guarantee systemic endurance across global
            distribution networks.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-[#d79b20]/30 to-transparent mb-8"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mb-10">
          <div className="group">
            <h3 className="text-3xl md:text-4xl font-black text-[#d79b20] tracking-tight">
              100%
            </h3>
            <p className="text-[10px] font-bold tracking-wider text-[#0a1a52] mt-1 uppercase">
              Ultrasonic Tested
            </p>
          </div>
          <div className="group">
            <h3 className="text-3xl md:text-4xl font-black text-[#d79b20] tracking-tight">
              9001
            </h3>
            <p className="text-[10px] font-bold tracking-wider text-[#0a1a52] mt-1 uppercase">
              ISO Certified
            </p>
          </div>
          <div className="group">
            <h3 className="text-3xl md:text-4xl font-black text-[#d79b20] tracking-tight">
              Zero
            </h3>
            <p className="text-[10px] font-bold tracking-wider text-[#0a1a52] mt-1 uppercase">
              Delamination Rate
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="flex items-center gap-3 mt-auto">
          <span className="w-2 h-2 rounded-full bg-[#d79b20]"></span>
          <Link
            to="/products"
            className="text-xs font-bold tracking-wider text-[#0a1a52] uppercase hover:text-[#d79b20] transition flex items-center gap-2 group"
          >
            Explore Technical Network
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - DARK PANEL */}
      <div
        ref={rightRef}
        className={`w-full lg:w-[42%] bg-[#0a1a52] mr-10 px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 flex flex-col justify-between relative min-h-[500px] lg:min-h-screen transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#d79b20]/30"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#d79b20]/30"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#d79b20]/5 rounded-full blur-3xl"></div>

        {/* QMS Header Badge Section */}
        <div className="mt-6 flex items-start gap-4 relative z-10">
          <div className="border border-[#d79b20]/30 p-3 text-[#d79b20] flex items-center justify-center w-12 h-12 rounded-xl bg-[#d79b20]/10">
            <FaIndustry className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.15em] font-bold text-[#d79b20] block uppercase mb-1">
              Quality Management System
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              ISO 9001: 2015 <br />
              Certificate
            </h2>
          </div>
        </div>

        {/* Certificate Description */}
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed my-6 max-w-md relative z-10">
          Verifies our strict international compliance with high-integrity
          quality control, advanced manufacturing assessments, product
          reliability tracking, and raw material validation standards.
        </p>

        {/* Download Button Component */}
        <div className="w-full max-w-md bg-[#d79b20] hover:bg-[#c08a1a] transition text-white flex items-center justify-between rounded-xl shadow-lg shadow-[#d79b20]/20 mb-8 cursor-pointer group relative z-10">
          <div className="p-4 md:p-5 flex flex-col text-left">
            <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-2">
              <FaFileDownload className="w-3 h-3" />
              Download Quality Certificate
            </span>
            <span className="text-[10px] text-white/70 mt-0.5 font-medium">
              PDF Format • Fully Verified QMS Asset
            </span>
          </div>
          <div className="bg-white/20 p-5 md:p-6 flex items-center justify-center group-hover:bg-white/30 transition rounded-r-xl">
            <span className="text-lg">↓</span>
          </div>
        </div>

        {/* Execute Verification Action */}
        <div className="w-full border-t border-white/10 pt-6 mt-auto relative z-10">
          <button className="text-[10px] tracking-[0.15em] font-bold text-white uppercase hover:text-[#d79b20] transition flex items-center gap-2 group">
            <FaShieldAlt className="w-3 h-3 group-hover:scale-110 transition-transform" />
            Execute Compliance Verification
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex gap-4 mt-6 relative z-10">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="w-3 h-3 text-[#d79b20]" />
            <span className="text-[8px] text-white/60 uppercase tracking-wider">
              Global Standard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaAward className="w-3 h-3 text-[#d79b20]" />
            <span className="text-[8px] text-white/60 uppercase tracking-wider">
              Certified Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
