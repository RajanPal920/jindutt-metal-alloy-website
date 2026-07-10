import React, { useState } from "react";
import {
  adani,
  adityaBirla,
  cairn,
  environment,
  essar,
  godrej,
  health,
  hpGas,
  jindal,
  manufacturing,
  reliance,
  rpmexport,
  tataSteel,
  wipro,
} from "../../assets";
import {
  certifications,
  companylogos,
  countries,
  industriesData,
  logos,
  servicesData,
  smallCards,
  state,
  testimonials,
} from "../../data";

const Hero4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* SECTION 1: THIRD-PARTY INSPECTION AGENCIES */}
      <section
        className="w-full bg-[#082479] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      >
        {/* TOP HEADER CONTROLS */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-2 border p-2 rounded-full border-sky-400/50 bg-sky-400/10">
            <span className="text-sky-400 text-xs">◆</span>
            <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              Quality Assurance Framework
            </h4>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-white uppercase leading-[1.15]">
            Approved Third-Party{" "}
            <span className="text-sky-400">Inspection Agencies</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Our engineering components are universally verified and certified by
            global metallurgical authorities.
          </p>
        </div>

        {/* COMPONENT CAROUSEL CONTAINER BOX */}
        <div className="w-full h-60 max-w-6xl mx-auto items-center justify-center border flex border-white/10 bg-[#001966]/40 backdrop-blur-sm p-10 relative rounded-lg overflow-hidden">
          {/* Technical crosshair corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-yellow-500"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-yellow-500"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>

          {/* LOGO SLIDER SYSTEM */}
          <div className="w-full relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            {/* TRACK GROUP 1 */}
            <div className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]">
              {logos.map((logo, index) => (
                <div
                  key={`group1-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-100 contrast-100"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden font-bold text-slate-500 text-xs text-center">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>

            {/* TRACK GROUP 2 */}
            <div
              className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]"
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`group2-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden font-bold text-slate-500 text-xs text-center">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GLOBAL INDUSTRIAL CERTIFICATIONS */}
      <section
        className="w-full bg-[#00175a] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      >
        {/* HEADER */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-2 border p-2 rounded-full border-sky-400/50 bg-sky-400/10">
            <span className="text-sky-400 text-xs">◆</span>
            <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              Quality Assurance Protocol
            </h4>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-white uppercase leading-[1.15]">
            GLOBAL INDUSTRIAL{" "}
            <span className="text-sky-400">CERTIFICATIONS</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Our commitment to zero-failure performance is backed by globally
            recognized triple-standard certifications, ensuring absolute
            compliance for high-integrity industrial environments.
          </p>
        </div>

        {/* ALIGNED TRIPLE CARD GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto relative z-10 px-4">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-md border border-white/10 rounded-2xl p-8 pt-10 flex flex-col items-center text-center transition-all duration-300 hover:border-sky-400/30 hover:bg-white/5 hover:-translate-y-1 group min-h-[400px]"
            >
              {/* Card Top Vector Icon Wrapper */}
              <div className="mb-5 p-3.5 bg-sky-500/10 rounded-xl border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Certification Name */}
              <h3 className="text-xl font-bold tracking-wide text-white mb-4">
                {item.title}
              </h3>

              {/* Sleek Horizontal Rule Divider */}
              <div className="w-16 h-[2px] bg-sky-500/30 mb-6 group-hover:bg-sky-400/60 transition-colors duration-300"></div>

              {/* Core Description Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-auto px-2">
                {item.description}
              </p>

              {/* Footing Square Check Badge */}
              <div className="mt-8 w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: STRATEGIC MANUFACTURER HERO */}
      <section className="w-full pt-24 pb-12 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center relative overflow-hidden font-sans">
        {/* TOP BADGE */}
        <div className="mb-8 flex justify-center">
          <h4 className="text-xs font-bold tracking-[0.25em] text-blue-700 border border-sky-400/50 bg-sky-400/10 px-8 py-2.5 rounded-full uppercase">
            Global Metallurgy Standards
          </h4>
        </div>

        {/* MAIN TYPOGRAPHY HEADER */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto items-center justify-center">
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 uppercase leading-[1.05] tracking-tighter">
            Strategic Manufacturer of <br /> High-Yield
          </h2>

          <h3 className="text-2xl md:text-5xl font-medium text-blue-400 uppercase leading-tight tracking-tight mt-2">
            Industrial Infrastructure <br /> Components
          </h3>
        </div>
      </section>

      {/* SECTION 4: INJECTED METRIC FEATURE GRID  */}
      <section className="w-full bg-[#f6f9fc] py-16 px-6 md:px-12 lg:px-24 font-sans flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: LARGE DESCRIPTION BLOCKS */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            {/* LARGE CARD 1 */}
            <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col items-start justify-center flex-1 min-h-[240px]">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed text-left">
                Jindutt Metal & Alloy Pvt. Ltd. commands systemic quality control over a diverse
                inventory of critical pipeline configurations, forged steel
                assemblies, structural fasteners and heavy-duty plates.
              </p>
            </div>

            {/* LARGE CARD 2 */}
            <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col items-start justify-center flex-1 min-h-[240px]">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed text-left">
                Engineered for Energy Infrastructure, Chemical Processing and
                Power Generation sectors where operational reliability is
                critical.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x3 METRICS CARDS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full content-center">
            {smallCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-2xl hover:border-blue-500 shadow-[0_6px_24px_rgb(0,0,0,0.01)] flex flex-col items-start justify-center min-h-[125px] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <h4 className="text-blue-950 font-black text-sm tracking-wider uppercase">
                    {card.title}
                  </h4>
                </div>
                <p className="text-slate-500 font-medium text-[13px] pl-8">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: INJECTED METRIC FEATURE GRID  */}
      <section>
        <div className="w-full h-30 max-w-7xl mx-auto items-center justify-between border flex border-white/10 bg-blue-950 backdrop-blur-sm p-10 relative rounded-3xl overflow-hidden m-10">
          <span className="flex flex-col items-center justify-center  border-r-blue-200 border-r-2 pr-10">
            <h5 className="text-3xl font-bold text-blue-500">50+</h5>
            <p className="text-slate-100">MATERIAL GRADES</p>
          </span>
          <span className="flex flex-col items-center justify-center  border-r-blue-200 border-r-2 pr-10">
            <h5 className="text-3xl font-bold text-blue-500">20+</h5>
            <p className="text-slate-100">COUNTRIES SERVED</p>
          </span>
          <span className="flex flex-col items-center justify-center  border-r-blue-200 border-r-2 pr-10">
            <h5 className="text-3xl font-bold text-blue-500">1000+</h5>
            <p className="text-slate-100">DELIVERIES</p>
          </span>
          <span className="flex flex-col items-center justify-center  border-r-blue-200 border-r-2 pr-10">
            <h5 className="text-3xl font-bold text-blue-500">100+</h5>
            <p className="text-slate-100">CERTIFIED MATERIAL</p>
          </span>
          <span className="flex flex-col items-center justify-center">
            <h5 className="text-3xl font-bold text-blue-500">10+</h5>
            <p className="text-slate-100">YEARS EXPERIENCE</p>
          </span>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY SECTOR GRID */}
      <section
        className="w-full bg-[#082479] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      >
        {/* TOP HEADER CONTROLS */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-2 border p-2 rounded-full border-sky-400/50 bg-sky-400/10">
            <span className="text-sky-400 text-xs">◆</span>
            <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              GLOBAL INDUSTRIAL ECOSYSTEM
            </h4>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-white uppercase leading-[1.15]">
            INDUSTRIEES WE <span className="text-sky-400">POWER</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Delivering certified indutrial components to mission-critical
            sectors worldwide.
          </p>
        </div>

        <div className="min-h-screen p-8 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto w-full">
            {industriesData.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B2C85] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                    />

                    {/* ICON */}
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-sky-400">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="mt-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                        Industry Sector
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: STRATEGIC/COMPANY  PARTNERSHIP HERO */}
      <section className="w-full text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        {/* TOP HEADER CONTROLS */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-2 border p-2 rounded-full border-sky-400/50 bg-sky-400/10">
            <span className="text-sky-400 text-xs">◆</span>
            <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              TRUSTED SUPPLY NETWORK
            </h4>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-blue-950 uppercase leading-[1.15]">
            STRATEGIC <span className="text-sky-400">PARTNERSHIPS</span>
          </h1>
        </div>

        {/* COMPONENT CAROUSEL CONTAINER BOX */}
        <div className="w-full h-60 max-w-6xl mx-auto items-center justify-center border flex  bg-blue-950 backdrop-blur-sm p-10 relative rounded-lg overflow-hidden">
          {/* Technical crosshair corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-yellow-500"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-yellow-500"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>

          {/* LOGO SLIDER SYSTEM */}
          <div className="w-full relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            {/* TRACK GROUP 1 */}
            <div className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]">
              {companylogos.map((logo, index) => (
                <div
                  key={`group1-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-100 contrast-100"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden font-bold text-slate-500 text-xs text-center">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>

            {/* TRACK GROUP 2 */}
            <div
              className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]"
              aria-hidden="true"
            >
              {companylogos.map((logo, index) => (
                <div
                  key={`group2-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden font-bold text-slate-500 text-xs text-center">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: STRATEGIC MANUFACTURER HERO */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.25em] text-sky-500 text-sm font-bold">
              OUR SERVICES
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#001E73]">
              Engineering <span className="text-sky-400">Excellence</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-500 leading-relaxed">
              Precision manufacturing backed by technical expertise, rigorous
              inspection, and complete supply-chain transparency.
            </p>
          </div>

          {/* Accordion */}
          <div
            className="flex h-[600px] bg-[#00175a]"
            style={{
              backgroundImage: `
      linear-gradient(rgba(14,165,233,0.25) 1px, transparent 1px),
      linear-gradient(90deg, rgba(14,165,233,0.25) 1px, transparent 1px)
    `,
              backgroundSize: "48px 48px",
            }}
          >
            {servicesData.map((tab, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`
              relative
              cursor-pointer
              transition-all
              duration-700
              ease-in-out
              border-r
              border-slate-200
              last:border-r-0
              overflow-hidden

              ${
                isActive
                  ? "flex-[5] bg-white"
                  : "flex-[1.2] bg-slate-50 hover:bg-slate-100"
              }
            `}
                >
                  {/* Number */}
                  <div className="absolute top-7 left-7 text-sky-500 font-bold tracking-widest z-20">
                    {tab.id}
                  </div>

                  {/* Plus */}
                  <div className="absolute top-7 right-7 text-slate-300 text-2xl font-light">
                    +
                  </div>

                  {/* Active Content */}

                  <div
                    className={`
                absolute
                inset-0
                flex
                flex-col
                justify-center
                px-14
                transition-all
                duration-500

                ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10 pointer-events-none"
                }
              `}
                  >
                    <div className="w-12 h-12 border-l-4 border-t-4 border-sky-500 mb-8"></div>

                    <h2 className="text-4xl lg:text-5xl font-black text-[#001E73] whitespace-pre-line leading-tight">
                      {tab.title}
                    </h2>

                    <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-[#001E73] my-8"></div>

                    <p className="max-w-md text-slate-600 leading-8 text-lg">
                      {tab.desc}
                    </p>
                  </div>

                  {/* Inactive */}

                  <div
                    className={`
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-between
                py-10
                transition-all
                duration-500

                ${!isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
                  >
                    <div></div>

                    <div
                      className="uppercase font-bold tracking-[0.3em] text-[#001E73] text-sm"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {tab.title.replace("\n", " ")}
                    </div>

                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#00175a] text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Half */}
          <div className="w-full lg:w-1/2">
            <h5 className="text-sky-400 uppercase tracking-[0.2em] text-sm mb-3">
              SUPPLY CHAIN EXCELLENCE
            </h5>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              GLOBAL FOOTPRINT <br />
              <span className="text-sky-400">& DOMESTIC REACH</span>
            </h1>

            <p className="mt-6 text-slate-300 leading-8">
              Jindutt Metal & Alloy Pvt. Ltd. operates a sophisticated industrial supply chain,
              serving as a critical material partner for refineries,
              petrochemical plants, and power stations across 50+ countries and
              every major industrial hub in India.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-4xl font-bold text-sky-400">50+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  Export Countries
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-sky-400">100+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  Domestic Hubs
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-sky-400">500+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  Guaranteed Response
                </p>
              </div>
            </div>
          </div>

          {/* Right Half */}
          <div
            className="w-full lg:w-1/2 h-[500px] p-[2px] bg-sky-400/40"
            style={{
              clipPath:
                "polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%)",
            }}
          >
            <img
              className="w-full h-full object-cover"
              src={rpmexport}
              alt="Jindutt Metal & Alloy Pvt. Ltd."
            />
          </div>
        </div>
      </section>

      <section className="w-full  text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        {/* HEADER */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-2 p-2  text-sky-400/50">
            <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              NATIONAL INFRASTRUCTURE SUPPORT
            </h4>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-blue-950 uppercase leading-[1.15]">
            STRATEGIC <span className="text-sky-400">DOMESTIC SUPPLY</span>
          </h1>
          <span className="w-50 bg-gradient-to-r from-blue-950 to-sky-300 h-1 rounded-full"></span>
          <p className="text-blue-950 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Jindutt Metal & Alloy Pvt. Ltd. serves as a critical material partner for India's premier
            industrial <br /> hubs, delivering high-integrity alloys for
            zero-failure performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {state.map((item, index) => {
            const widths = [
              "w-fit",
              "w-[140px]",
              "w-[170px]",
              "w-[190px]",
              "w-[160px]",
            ];

            const margins = ["mt-0", "mt-2", "mt-4", "mt-6", "mt-1"];

            return (
              <button
                key={index}
                className={`
          ${widths[index % widths.length]}
          ${margins[index % margins.length]}
          py-3
          px-5
          rounded-full
          border
          border-sky-500
          bg-white
          text-sky-950
          font-bold
          text-sm
          flex
          items-center
          justify-center
          gap-2
          transition-all
          duration-300
          hover:bg-gradient-to-r
          hover:from-sky-500
          hover:via-blue-600
          hover:to-cyan-500
          hover:text-white
          hover:border-transparent
          hover:shadow-xl
          hover:shadow-sky-500/30
          hover:-translate-y-1
        `}
              >
                <span className="text-sky-400 text-xs group-hover:text-white">
                  ◆
                </span>
                {item.name}
              </button>
            );
          })}
        </div>
      </section>

      <section
        className="w-full bg-[#00175a] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      >
        {/* HEADER */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-2 border p-2 rounded-full border-sky-400/50 bg-sky-400/10">
            <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              GLOBAL TRADE AUTHORITY
            </h4>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-white uppercase leading-[1.15]">
            INTERNATIONAL <span className="text-sky-400">EXPORT NETWORK</span>
          </h1>
          <span className="w-50 bg-gradient-to-r from-blue-950 to-sky-300 h-1 rounded-full"></span>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            As a premier ISO Certified manufacturer, Jindutt Metal & Alloy Pvt. Ltd. maintains a
            high-velocity export corridor, delivering precision-engineered
            piping solutions to over 50 countries worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {countries.map((country) => (
            <button
              key={country.name}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-[#082C8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Flag */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-white">
                <span
                  className={`fi fi-${country.code}`}
                  style={{
                    width: "28px",
                    height: "20px",
                    display: "inline-block",
                  }}
                />
              </div>

              {/* Country Name */}
              <div className="relative z-10 flex flex-col items-start">
                <span className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
                  {country.name}
                </span>

                <span className="text-xs uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-sky-200">
                  Export Market
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-20">
          <h4 className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
            MARKET TRUST
          </h4>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-blue-950 uppercase">
            INDUSTRIAL <span className="text-sky-400">IMPACT</span>
          </h1>

          <span className="w-56 h-1 rounded-full bg-gradient-to-r from-blue-950 to-sky-400"></span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item}
              className="group relative bg-white border border-sky-100 rounded-2xl shadow-xl p-10 pt-16 transition-all duration-500 hover:-translate-y-3 hover:bg-blue-950"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:left-auto group-hover:right-6 group-hover:translate-x-0">
                <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-4xl font-bold">❞</span>
                </div>
              </div>

              {/* Review */}
              <p className="text-slate-600 italic leading-9 text-lg transition-colors duration-500 group-hover:text-white">
                "Jindutt Metal & Alloy Pvt. Ltd. consistently delivers certified piping components
                with complete documentation and traceability. Their
                responsiveness and commitment to quality have made them a
                dependable sourcing partner."
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200 my-10 transition-colors duration-500 group-hover:bg-slate-700"></div>

              {/* Footer */}
              <div className="flex items-center gap-5">
                <div className="w-18 h-18 rounded-xl border border-sky-200 bg-sky-50 flex items-center justify-center transition-all duration-500 group-hover:bg-sky-500 group-hover:border-sky-500">
                  <span className="text-sky-500 text-2xl font-bold transition-colors duration-500 group-hover:text-white">
                    {item.initials}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-blue-950 uppercase transition-colors duration-500 group-hover:text-white">
                    {item.name}
                  </h3>

                  <p className="text-sky-500 uppercase tracking-[0.2em] text-sm font-semibold mt-1 transition-colors duration-500 group-hover:text-sky-300">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CSS keyframe configuration injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default Hero4;
