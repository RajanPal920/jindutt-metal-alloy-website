import React from "react";
import heroBg from "../../assets/images/industries/main-banner.webp";
import workshop from "../../assets/images/industries/workshop.webp";
import aboutCardData from "../../data/aboutCard";
import industriesData from "../../data/industriesData";
import { Link } from "react-router-dom";

const About = () => {
 
   
 


  return (
    <>
      <section
        className="relative w-full min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-950/80"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          {/* TEXT AREA */}
          <div className="max-w-3xl">
            <p className="text-sky-300 uppercase tracking-widest text-sm font-semibold">
              GLOBAL METAL SUPPLIES & EXPORTER
            </p>

            <h1 className="text-white font-black text-4xl md:text-6xl leading-tight mt-4">
              ENGINEERED FOR <br />
              PERFORMANCE. <br />
              BUILT FOR GLOBAL <br />
              INDUSTRY.
            </h1>

            <p className="text-slate-200 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
              Jindutt Metal & Alloy Pvt. Ltd. supplies Stainless Steel, Duplex Steel, Super Duplex
              Steel, Nickel Alloys, Titanium, Inconel, Monel, Hastelloy and
              industrial piping products to customers worldwide.
            </p>
          </div>

          {/* STATS SECTION */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-blue-950 hover:scale-95 transition-all ">
              <h2 className="text-4xl font-bold text-white">50+</h2>
              <p className="text-white mt-2">Countries Served</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-blue-950 hover:scale-95 transition-all">
              <h2 className="text-4xl font-bold text-white">5000+</h2>
              <p className="text-white mt-2">Product Variants</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-blue-950 hover:scale-95 transition-all">
              <h2 className="text-4xl font-bold text-white">ISO</h2>
              <p className="text-white mt-2">Certified Quality</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-blue-950 hover:scale-95 transition-all">
              <h2 className="text-4xl font-bold text-white">24/7</h2>
              <p className="text-white mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 ">
        <div className="w-8xl  px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* IMAGE SECTION */}
          <div className="w-80 lg:w-1/2 ">
            <img
              src={workshop}
              alt="workshop"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-blue-950 text-3xl md:text-4xl font-bold">
              ABOUT Jindutt Metal & Alloy Pvt. Ltd. EXPORT
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Jindutt Metal & Alloy Pvt. Ltd. is a trusted manufacturer, stockist, supplier and
              exporter of premium metal products. We serve oil & gas,
              petrochemical, power generation, marine, pharmaceutical, food
              processing and infrastructure industries.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our commitment to quality, timely delivery and technical
              excellence enables us to support critical industrial projects
              across domestic and international markets.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sky-500 font-semibold">
              WHY Jindutt Metal & Alloy Pvt. Ltd. EXPORT
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#001E73]">
              TRUSTED BY GLOBAL <br />
              INDUSTRIAL BUYERS
            </h2>

            <p className="mt-6 text-slate-500 leading-8">
              Delivering premium metal products with quality assurance, global
              reach and dependable supply chain support.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {aboutCardData.map((card, index) => {
              const Icon = card.svg;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300">
                    <Icon
                      size={34}
                      className="text-sky-600 group-hover:text-white transition-all"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-xl font-bold text-[#001E73]">
                    {card.title}
                  </h3>

                  {/* Line */}
                  <div className="w-16 h-1 bg-sky-500 rounded-full my-5"></div>

                  {/* Description */}
                  <p className="text-slate-500 leading-7">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-sky-400 font-semibold">
              APPLICATION INDUSTRIES
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
              INDUSTRIES WE SERVE
            </h2>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {industriesData.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Image */}

                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>

                {/* Title */}

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold ">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative max-w-7xl mx-auto overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0F1F7D] via-[#1559C5] to-[#0D63D8] py-20"
        style={{
          backgroundImage: `
      radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 35%),
      radial-gradient(circle at bottom left, rgba(255,255,255,0.06), transparent 40%)
    `,
        }}
      >
        <div className="max-w-7xl mx-auto overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0F1F7D] to-[#0D63D8]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-16 lg:px-20">
            {/* Left Content */}
            <div className="max-w-3xl">
              <p className="text-white uppercase tracking-[0.2em] text-sm font-medium">
                GLOBAL METAL SUPPLIER
              </p>

              <h2 className="mt-5 text-5xl md:text-6xl font-black leading-[1.05] text-white uppercase">
                Looking For A
                <br />
                Reliable
                <br />
                Industrial Metal
                <br />
                Partner?
              </h2>

              <p className="mt-8 max-w-2xl text-lg text-blue-100 leading-8">
                From stainless steel piping solutions to specialty alloys, Jindutt Metal & Alloy Pvt. Ltd.
                Export delivers quality products with global reach and
                dependable support.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="rounded-full bg-white px-6 py-4 text-lg font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
              >
                Get A Quote
              </Link>

              <Link
                to="/products"
                className="rounded-full border-2 border-white/60 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-700 hover:shadow-xl"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default About;
