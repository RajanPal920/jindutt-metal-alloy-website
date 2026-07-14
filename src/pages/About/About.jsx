// src/pages/About/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaGlobe,
  FaBoxes,
  FaHeadset,
  FaTrophy,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import heroBg from "../../assets/images/industries/main-banner.webp";
import workshop from "../../assets/images/industries/workshop.webp";
import aboutCardData from "../../data/aboutCard";
import industriesData from "../../data/industriesData";

const About = () => {
  return (
    <>
      {/* =============================== */}
      {/* HERO SECTION */}
      {/* =============================== */}
      <section
        className="relative w-full min-h-[90vh] flex items-center pt-20 lg:pt-24"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a52]/90 to-[#0a1a52]/70"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                Global Metal Supplies & Exporter
              </span>
            </div>

            <h1 className="text-white font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] mt-4">
              ENGINEERED FOR <br />
              <span className="text-[#d79b20]">PERFORMANCE.</span> <br />
              BUILT FOR GLOBAL <br />
              <span className="text-[#d79b20]">INDUSTRY.</span>
            </h1>

            <p className="text-slate-200 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
              Jindutt Metal & Alloy Pvt. Ltd. supplies Stainless Steel, Duplex
              Steel, Super Duplex Steel, Nickel Alloys, Titanium, Inconel,
              Monel, Hastelloy and industrial piping products to customers
              worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="bg-[#d79b20] hover:bg-[#c08a1a] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d79b20]/25"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#d79b20]/20 flex items-center justify-center mb-3 group-hover:bg-[#d79b20]/30 transition-colors">
                <FaGlobe className="w-5 h-5 text-[#d79b20]" />
              </div>
              <h2 className="text-3xl font-bold text-white">50+</h2>
              <p className="text-slate-300 text-sm mt-1">Countries Served</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#d79b20]/20 flex items-center justify-center mb-3 group-hover:bg-[#d79b20]/30 transition-colors">
                <FaBoxes className="w-5 h-5 text-[#d79b20]" />
              </div>
              <h2 className="text-3xl font-bold text-white">5000+</h2>
              <p className="text-slate-300 text-sm mt-1">Product Variants</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#d79b20]/20 flex items-center justify-center mb-3 group-hover:bg-[#d79b20]/30 transition-colors">
                <FaAward className="w-5 h-5 text-[#d79b20]" />
              </div>
              <h2 className="text-3xl font-bold text-white">ISO</h2>
              <p className="text-slate-300 text-sm mt-1">Certified Quality</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#d79b20]/20 flex items-center justify-center mb-3 group-hover:bg-[#d79b20]/30 transition-colors">
                <FaHeadset className="w-5 h-5 text-[#d79b20]" />
              </div>
              <h2 className="text-3xl font-bold text-white">24/7</h2>
              <p className="text-slate-300 text-sm mt-1">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* ABOUT SECTION */}
      {/* =============================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#d79b20]/20 to-[#0a1a52]/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <img
                src={workshop}
                alt="Workshop"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <FaTrophy className="w-6 h-6 text-[#d79b20]" />
                  <div>
                    <p className="text-sm font-bold text-[#0a1a52]">
                      25+ Years
                    </p>
                    <p className="text-xs text-slate-500">
                      Industry Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                About Us
              </span>
            </div>

            <h1 className="text-[#0a1a52] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              ABOUT JINDUTT METAL & ALLOY <br />
              <span className="text-[#d79b20]">PVT. LTD. EXPORT</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Jindutt Metal & Alloy Pvt. Ltd. is a trusted manufacturer,
              stockist, supplier and exporter of premium metal products. We
              serve oil & gas, petrochemical, power generation, marine,
              pharmaceutical, food processing and infrastructure industries.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our commitment to quality, timely delivery and technical
              excellence enables us to support critical industrial projects
              across domestic and international markets.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-[#d79b20]" />
                <span className="text-sm text-slate-600">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-[#d79b20]" />
                <span className="text-sm text-slate-600">Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-[#d79b20]" />
                <span className="text-sm text-slate-600">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* WHY CHOOSE US SECTION */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0a1a52] leading-tight">
              TRUSTED BY GLOBAL <br />
              <span className="text-[#d79b20]">INDUSTRIAL BUYERS</span>
            </h2>

            <p className="mt-4 text-slate-500 leading-8 max-w-2xl mx-auto">
              Delivering premium metal products with quality assurance, global
              reach and dependable supply chain support.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {aboutCardData.map((card, index) => {
              const Icon = card.svg;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d79b20]/30 relative overflow-hidden"
                >
                  {/* Decorative Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d79b20] to-[#0a1a52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#d79b20]/10 flex items-center justify-center group-hover:bg-[#d79b20] transition-all duration-300">
                    <Icon
                      size={32}
                      className="text-[#d79b20] group-hover:text-white transition-all"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-[#0a1a52] group-hover:text-[#d79b20] transition-colors">
                    {card.title}
                  </h3>

                  {/* Line */}
                  <div className="w-12 h-0.5 bg-[#d79b20] rounded-full my-4"></div>

                  {/* Description */}
                  <p className="text-slate-500 leading-7">{card.description}</p>

                  {/* Arrow on Hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <FaArrowRight className="w-4 h-4 text-[#d79b20]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* INDUSTRIES SECTION */}
      {/* =============================== */}
      <section className="w-full py-20 bg-[#0a1a52]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                Application Industries
              </span>
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              INDUSTRIES WE <span className="text-[#d79b20]">SERVE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52] via-[#0a1a52]/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-bold">
                    {industry.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#d79b20] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute top-4 right-4 bg-[#d79b20]/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaArrowRight className="w-4 h-4 text-[#d79b20]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CTA SECTION */}
      {/* =============================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a1a52] via-[#1a3a7a] to-[#0a1a52] py-16 px-8 lg:px-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d79b20]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d79b20]/5 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-[#d79b20]"></span>
                <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                  Global Metal Supplier
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white">
                Looking For A <br />
                <span className="text-[#d79b20]">Reliable</span> Industrial{" "}
                <br />
                Metal Partner?
              </h2>

              <p className="mt-6 max-w-xl text-lg text-blue-100/80 leading-relaxed">
                From stainless steel piping solutions to specialty alloys,
                Jindutt Metal & Alloy Pvt. Ltd. Export delivers quality products
                with global reach and dependable support.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/contact"
                className="group bg-[#d79b20] hover:bg-[#c08a1a] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d79b20]/25 flex items-center justify-center gap-2"
              >
                Get A Quote
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/products"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                View Products
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
