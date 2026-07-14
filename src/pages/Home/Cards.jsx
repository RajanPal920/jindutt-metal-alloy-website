// src/components/home/Cards.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaIndustry,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import pipe from "../../assets/images/productImage/steel-pipes.webp";
import plates from "../../assets/images/productImage/plates.webp";
import rod from "../../assets/images/productImage/rod.webp";
import flanges from "../../assets/images/productImage/Flanges.webp";
import fastener from "../../assets/images/productImage/fastener.webp";
import buttweld from "../../assets/images/productImage/buttweld.webp";
import coil from "../../assets/images/productImage/coil.webp";
import valves from "../../assets/images/productImage/valves.webp";

const cardData = [
  {
    id: 1,
    title: "PIPES & TUBES",
    subtitle: "COMPONENT RANGE",
    image: pipe,
    link: "/products/pipes",
    icon: FaIndustry,
    description: "Premium quality pipes and tubes for industrial applications",
  },
  {
    id: 2,
    title: "SHEETS & PLATES",
    subtitle: "COMPONENT RANGE",
    image: plates,
    link: "/products/sheets",
    icon: FaIndustry,
    description: "High-grade sheets and plates for heavy engineering",
  },
  {
    id: 3,
    title: "ROD & BAR",
    subtitle: "COMPONENT RANGE",
    image: rod,
    link: "/products/round-bars",
    icon: FaIndustry,
    description: "Precision rods and bars for critical applications",
  },
  {
    id: 4,
    title: "FLANGES",
    subtitle: "COMPONENT RANGE",
    image: flanges,
    link: "/products/flanges",
    icon: FaIndustry,
    description: "High-strength flanges for secure connections",
  },
  {
    id: 5,
    title: "FASTENERS",
    subtitle: "COMPONENT RANGE",
    image: fastener,
    link: "/products/fasteners",
    icon: FaIndustry,
    description: "Reliable fasteners for demanding environments",
  },
  {
    id: 6,
    title: "BUTTWELD FITTINGS",
    subtitle: "COMPONENT RANGE",
    image: buttweld,
    link: "/products/buttweld-fittings",
    icon: FaIndustry,
    description: "Precision buttweld fittings for piping systems",
  },
  {
    id: 7,
    title: "COILS",
    subtitle: "COMPONENT RANGE",
    image: coil,
    link: "/products/coils",
    icon: FaIndustry,
    description: "High-quality coils for continuous processing",
  },
  {
    id: 8,
    title: "INDUSTRIAL VALVES",
    subtitle: "COMPONENT RANGE",
    image: valves,
    link: "/products/valves",
    icon: FaIndustry,
    description: "Industrial valves for flow control applications",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* HEADER SECTION */}
      <div className="w-full flex flex-col items-center text-center mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
            Production Manifest
          </span>
          <span className="w-10 h-0.5 bg-[#d79b20]"></span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#0a1a52] leading-tight">
          Industrial Product{" "}
          <span className="text-[#d79b20]">Classifications</span>
        </h2>

        <p className="text-slate-500 text-sm mt-3 max-w-2xl">
          Premium quality industrial components engineered for critical
          applications across global industries
        </p>

        <div className="w-16 h-1 bg-[#d79b20] mt-4 rounded-full"></div>
      </div>

      {/* CARDS GRID - WITH FLIP ANIMATION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
        {cardData.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              to={card.link}
              className="group relative block w-full h-[320px] perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* FRONT SIDE - Image */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
                  <div className="relative w-full h-full bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Front Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/70 via-[#0a1a52]/30 to-transparent"></div>

                    {/* Front Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-[8px] font-extrabold tracking-[0.2em] text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase mb-2">
                        {card.subtitle}
                      </span>
                      <h3 className="text-xl font-black text-white uppercase leading-tight">
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-white/60 text-xs">
                        <span>Hover to flip</span>
                        <span className="text-[#d79b20]">✦</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE - Content */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a1a52] to-[#1a3a7a] p-6 flex flex-col justify-between">
                  {/* Premium Top Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d79b20] via-[#0a1a52] to-[#d79b20]"></div>

                  {/* Decorative Corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#d79b20]/30"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#d79b20]/30"></div>

                  {/* Back Content */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center z-10">
                    <div className="w-16 h-16 rounded-full bg-[#d79b20]/10 border-2 border-[#d79b20]/30 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#d79b20]" />
                    </div>

                    <h3 className="text-xl font-black text-white uppercase mb-2">
                      {card.title}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                      {card.description}
                    </p>

                    <div className="flex items-center gap-2 mt-4 text-[#d79b20] text-xs font-semibold uppercase tracking-wider">
                      <span>Explore Now</span>
                      <FaArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Back Footer */}
                  <div className="w-full border-t border-white/10 pt-4 flex justify-between items-center z-10">
                    <span className="text-[8px] text-white/40 uppercase tracking-widest">
                      Premium Quality
                    </span>
                    <FaCheckCircle className="w-3 h-3 text-[#d79b20]" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-[#0a1a52] hover:bg-[#1a3a7a] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0a1a52]/25"
        >
          View All Products
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Add CSS for 3D Flip */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Cards;
