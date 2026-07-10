import React from "react";
import pipe from "../../assets/images/productImage/steel-pipes.webp";
import plates from "../../assets/images/productImage/plates.webp";
import rod from "../../assets/images/productImage/rod.webp";
import flanges from "../../assets/images/productImage/Flanges.webp";
import fastener from "../../assets/images/productImage/fastener.webp";
import buttweld from "../../assets/images/productImage/buttweld.webp";
import coil from "../../assets/images/productImage/coil.webp";
import valves from "../../assets/images/productImage/valves.webp";
import { Link } from "react-router";

const cardData = [
  {
    id: 1,
    title: "PIPES & TUBES",
    subtitle: "COMPONENT RANGE",
    image: pipe,
    link: "/pipes",
  },
  {
    id: 2,
    title: "SHEETS & PLATES",
    subtitle: "COMPONENT RANGE",
    image: plates,
    link: "/sheets-plates",
  },
  {
    id: 3,
    title: "ROD & BAR",
    subtitle: "COMPONENT RANGE",
    image: rod,
    link: "/rods-bars",
  },
  {
    id: 4,
    title: "FLANGES",
    subtitle: "COMPONENT RANGE",
    image: flanges,
    link: "/flanges",
  },
  {
    id: 5,
    title: "FASTENERS",
    subtitle: "COMPONENT RANGE",
    image: fastener,
    link: "/fasteners",
  },
  {
    id: 6,
    title: "BUTTWELD FITTINGS",
    subtitle: "COMPONENT RANGE",
    image: buttweld,
    link: "/buttweld-fittings",
  },
  {
    id: 7,
    title: "COILS",
    subtitle: "COMPONENT RANGE",
    image: coil,
    link: "/coils",
  },
  {
    id: 8,
    title: "INDUSTRIAL VALVES",
    subtitle: "COMPONENT RANGE",
    image: valves,
    link: "/valves",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-slate-50 py-20 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      {/* HEADER SECTION */}
      <div className="w-full flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-blue-600 text-xs animate-pulse">◆</span>
          <h2 className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase">
            Production Manifest
          </h2>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-[#0B1E69] uppercase">
          Industrial Product{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            Classifications
          </span>
        </h1>
        <div className="w-16 h-[3px] bg-gradient-to-r from-sky-500 to-blue-600 mt-5 rounded-full"></div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cardData.map((card) => (
          <Link
            key={card.id}
            to={card.link}
            className="group relative bg-white border border-slate-100 rounded-2xl flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 ease-out shadow-md hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-1"
          >
            {/* CENTER BACKGROUND GROW ANIMATION MASK */}
            <div className="absolute inset-0 bg-[#0B1E69] scale-0 rounded-full transition-transform duration-500 ease-out origin-center group-hover:scale-[2.5] z-0"></div>

            {/* CARD IMAGE */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden border-b border-slate-100 group-hover:border-transparent z-10">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#0B1E69]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 backdrop-blur-[2px]">
                <div className="w-12 h-12 border border-sky-400/40 rounded-full flex items-center justify-center mb-3 scale-75 group-hover:scale-100 transition-transform duration-300">
                  <span className="text-sky-400 text-lg">✦</span>
                </div>

                <span className="text-[11px] font-bold tracking-[0.2em] text-sky-400 uppercase text-center">
                  Inspect Specs
                </span>
              </div>
            </div>

            {/* BODY */}
            <div className="p-6 pt-7 pb-7 flex flex-col items-start flex-grow justify-start relative select-none z-10">
              <span className="text-[9px] font-extrabold tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md uppercase mb-3 transition-all duration-300 group-hover:bg-white/10 group-hover:text-sky-300">
                {card.subtitle}
              </span>

              <div className="relative py-1 w-full">
                <span className="absolute top-0 left-0 w-0 h-[1px] bg-sky-400/40 transition-all duration-300 ease-out group-hover:w-full"></span>

                <h3 className="text-lg font-black tracking-wide text-[#0B1E69] uppercase transition-colors duration-200 group-hover:text-white py-2 leading-snug">
                  {card.title}
                </h3>

                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sky-400/40 transition-all duration-300 ease-out group-hover:w-full"></span>
              </div>
            </div>

            {/* FOOTER */}
            <div className="w-full border-t border-slate-100/80 px-6 py-4 flex items-center justify-between transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-500 group-hover:border-transparent z-10">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-200 group-hover:text-white">
                View Grades
              </span>

              <svg
                className="w-4 h-4 text-slate-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;
