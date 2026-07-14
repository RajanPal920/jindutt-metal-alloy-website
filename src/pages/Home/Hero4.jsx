// src/components/home/Hero4.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaIndustry,
  FaOilCan,
  FaFlask,
  FaShieldAlt,
  FaGlobe,
  FaAward,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteRight,
  FaChartLine,
  FaTruck,
  FaWarehouse,
  FaCogs,
} from "react-icons/fa";

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
  const [counts, setCounts] = useState({
    materialGrades: 0,
    countries: 0,
    deliveries: 0,
    certified: 0,
    experience: 0,
  });
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const statsSectionRef = useRef(null);
  const industriesSectionRef = useRef(null);

  // Stats data
  const stats = [
    {
      key: "materialGrades",
      target: 50,
      label: "MATERIAL GRADES",
      icon: FaStar,
      suffix: "+",
    },
    {
      key: "countries",
      target: 20,
      label: "COUNTRIES SERVED",
      icon: FaGlobe,
      suffix: "+",
    },
    {
      key: "deliveries",
      target: 1000,
      label: "DELIVERIES",
      icon: FaTruck,
      suffix: "+",
    },
    {
      key: "certified",
      target: 100,
      label: "CERTIFIED MATERIAL",
      icon: FaAward,
      suffix: "+",
    },
    {
      key: "experience",
      target: 10,
      label: "YEARS EXPERIENCE",
      icon: FaChartLine,
      suffix: "+",
    },
  ];

  // Intersection Observer for Stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for Industries
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIndustriesVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (industriesSectionRef.current) {
      observer.observe(industriesSectionRef.current);
    }

    return () => {
      if (industriesSectionRef.current) {
        observer.unobserve(industriesSectionRef.current);
      }
    };
  }, []);

  // Counting animation for stats
  useEffect(() => {
    if (!isStatsVisible) return;

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    const startValues = {
      materialGrades: 0,
      countries: 0,
      deliveries: 0,
      certified: 0,
      experience: 0,
    };

    const targetValues = {
      materialGrades: 50,
      countries: 20,
      deliveries: 1000,
      certified: 100,
      experience: 10,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        materialGrades: Math.min(
          Math.round(
            startValues.materialGrades +
              (targetValues.materialGrades - startValues.materialGrades) *
                progress,
          ),
          targetValues.materialGrades,
        ),
        countries: Math.min(
          Math.round(
            startValues.countries +
              (targetValues.countries - startValues.countries) * progress,
          ),
          targetValues.countries,
        ),
        deliveries: Math.min(
          Math.round(
            startValues.deliveries +
              (targetValues.deliveries - startValues.deliveries) * progress,
          ),
          targetValues.deliveries,
        ),
        certified: Math.min(
          Math.round(
            startValues.certified +
              (targetValues.certified - startValues.certified) * progress,
          ),
          targetValues.certified,
        ),
        experience: Math.min(
          Math.round(
            startValues.experience +
              (targetValues.experience - startValues.experience) * progress,
          ),
          targetValues.experience,
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isStatsVisible]);

  const getCount = (key) => counts[key] || 0;

  return (
    <>
      {/* =============================== */}
      {/* SECTION 1: THIRD-PARTY INSPECTION AGENCIES */}
      {/* =============================== */}
      <section className="w-full bg-[#0a1a52] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Quality Assurance Framework
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            Approved Third-Party{" "}
            <span className="text-[#d79b20]">Inspection Agencies</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Our engineering components are universally verified and certified by
            global metallurgical authorities.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="w-full max-w-6xl mx-auto border border-white/10 bg-[#0a1a52]/40 backdrop-blur-sm p-10 relative rounded-lg overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#d79b20]/50"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#d79b20]/50"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#d79b20]/50"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#d79b20]/50"></div>

          <div className="w-full relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]">
              {logos.map((logo, index) => (
                <div
                  key={`group1-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 2: GLOBAL INDUSTRIAL CERTIFICATIONS */}
      {/* =============================== */}
      <section className="w-full bg-[#0d1f4a] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Quality Assurance Protocol
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            GLOBAL INDUSTRIAL{" "}
            <span className="text-[#d79b20]">CERTIFICATIONS</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Our commitment to zero-failure performance is backed by globally
            recognized triple-standard certifications, ensuring absolute
            compliance for high-integrity industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto relative z-10">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-md border border-white/10 rounded-2xl p-8 pt-10 flex flex-col items-center text-center transition-all duration-300 hover:border-[#d79b20]/30 hover:bg-white/5 hover:-translate-y-1 group min-h-[380px]"
            >
              <div className="mb-5 p-3.5 bg-[#d79b20]/10 rounded-xl border border-[#d79b20]/20 group-hover:bg-[#d79b20]/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold tracking-wide text-white mb-4">
                {item.title}
              </h3>
              <div className="w-16 h-[2px] bg-[#d79b20]/30 mb-6 group-hover:bg-[#d79b20]/60 transition-colors duration-300"></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-auto px-2">
                {item.description}
              </p>
              <div className="mt-8 w-10 h-10 rounded-full bg-[#d79b20] flex items-center justify-center shadow-lg shadow-[#d79b20]/20 group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 3: STRATEGIC MANUFACTURER HERO */}
      {/* =============================== */}
      <section className="w-full pt-24 pb-12 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center relative overflow-hidden font-sans">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Global Metallurgy Standards
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto items-center justify-center">
          <h2 className="text-4xl lg:text-5xl font-black text-[#0a1a52] uppercase leading-[1.05] tracking-tighter">
            Strategic Manufacturer of <br /> High-Yield
          </h2>
          <h3 className="text-2xl md:text-5xl font-medium text-[#d79b20] uppercase leading-tight tracking-tight mt-2">
            Industrial Infrastructure <br /> Components
          </h3>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 4: INJECTED METRIC FEATURE GRID */}
      {/* =============================== */}
      <section className="w-full bg-[#f8fafc] py-16 px-6 md:px-12 lg:px-24 font-sans flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col items-start justify-center flex-1 min-h-[200px] hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#d79b20]/10 flex items-center justify-center mb-6">
                <FaShieldAlt className="w-6 h-6 text-[#d79b20]" />
              </div>
              <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed text-left">
                Jindutt Metal & Alloy Pvt. Ltd. commands systemic quality
                control over a diverse inventory of critical pipeline
                configurations, forged steel assemblies, structural fasteners
                and heavy-duty plates.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col items-start justify-center flex-1 min-h-[200px] hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#d79b20]/10 flex items-center justify-center mb-6">
                <FaCogs className="w-6 h-6 text-[#d79b20]" />
              </div>
              <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed text-left">
                Engineered for Energy Infrastructure, Chemical Processing and
                Power Generation sectors where operational reliability is
                critical.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full content-center">
            {smallCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-2xl hover:border-[#d79b20] shadow-sm hover:shadow-md flex flex-col items-start justify-center min-h-[120px] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <h4 className="text-[#0a1a52] font-black text-sm tracking-wider uppercase">
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

      {/* =============================== */}
      {/* SECTION 5: STATS BANNER WITH COUNTING ANIMATION */}
      {/* =============================== */}
      <section ref={statsSectionRef} className="px-6 md:px-16 lg:px-24 mb-10">
        <div className="max-w-7xl mx-auto bg-[#0a1a52] rounded-3xl p-10 grid grid-cols-2 md:grid-cols-5 gap-6 border border-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const count = getCount(stat.key);
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center border-r border-white/10 last:border-r-0 px-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-[#d79b20] mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <h5 className="text-3xl md:text-4xl font-bold text-[#d79b20] transition-all duration-300">
                  {count}
                  <span className="text-lg ml-0.5">{stat.suffix}</span>
                </h5>
                <p className="text-white/80 text-xs md:text-sm font-medium mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                {/* Progress bar */}
                <div className="w-full max-w-[80px] h-0.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-[#d79b20] rounded-full transition-all duration-1000"
                    style={{
                      width: isStatsVisible
                        ? `${(count / stat.target) * 100}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 6: INDUSTRY SECTOR GRID WITH ANIMATION */}
      {/* =============================== */}
      <section
        ref={industriesSectionRef}
        className="w-full bg-[#0a1a52] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Global Industrial Ecosystem
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            INDUSTRIES WE <span className="text-[#d79b20]">POWER</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Delivering certified industrial components to mission-critical
            sectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
          {industriesData.map((card, index) => {
            const Icon = card.icon || FaIndustry;
            return (
              <div
                key={card.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a1a52]/60 shadow-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#d79b20]/40 ${
                  isIndustriesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d79b20] shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#d79b20]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d79b20]">
                      Industry Sector
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 7: STRATEGIC PARTNERSHIPS */}
      {/* =============================== */}
      <section className="w-full text-[#0a1a52] py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Trusted Supply Network
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#0a1a52] uppercase leading-[1.15]">
            STRATEGIC <span className="text-[#d79b20]">PARTNERSHIPS</span>
          </h1>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-[#0a1a52] backdrop-blur-sm p-10 relative rounded-lg overflow-hidden border border-white/10">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#d79b20]/50"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#d79b20]/50"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#d79b20]/50"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#d79b20]/50"></div>

          <div className="w-full relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]">
              {companylogos.map((logo, index) => (
                <div
                  key={`group1-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 8: SERVICES ACCORDION */}
      {/* =============================== */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
                Our Services
              </span>
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0a1a52]">
              Engineering <span className="text-[#d79b20]">Excellence</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-500 leading-relaxed">
              Precision manufacturing backed by technical expertise, rigorous
              inspection, and complete supply-chain transparency.
            </p>
          </div>

          <div className="flex h-[600px] bg-[#0a1a52] rounded-2xl overflow-hidden">
            {servicesData.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative cursor-pointer transition-all duration-700 ease-in-out border-r border-white/10 last:border-r-0 overflow-hidden ${
                    isActive
                      ? "flex-[5] bg-white/5"
                      : "flex-[1.2] bg-transparent hover:bg-white/5"
                  }`}
                >
                  <div className="absolute top-7 left-7 text-[#d79b20] font-bold tracking-widest z-20">
                    {tab.id}
                  </div>
                  <div className="absolute top-7 right-7 text-white/30 text-2xl font-light">
                    +
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col justify-center px-14 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10 pointer-events-none"
                    }`}
                  >
                    <div className="w-12 h-12 border-l-4 border-t-4 border-[#d79b20] mb-8"></div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white whitespace-pre-line leading-tight">
                      {tab.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#d79b20] to-transparent my-8"></div>
                    <p className="max-w-md text-slate-300 leading-8 text-lg">
                      {tab.desc}
                    </p>
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-between py-10 transition-all duration-500 ${
                      !isActive
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div></div>
                    <div
                      className="uppercase font-bold tracking-[0.3em] text-white/60 text-sm"
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

      {/* =============================== */}
      {/* SECTION 9: GLOBAL FOOTPRINT */}
      {/* =============================== */}
      <section className="w-full bg-[#0a1a52] text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
                Supply Chain Excellence
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              GLOBAL FOOTPRINT <br />
              <span className="text-[#d79b20]">& DOMESTIC REACH</span>
            </h1>

            <p className="mt-6 text-slate-300 leading-8">
              Jindutt Metal & Alloy Pvt. Ltd. operates a sophisticated
              industrial supply chain, serving as a critical material partner
              for refineries, petrochemical plants, and power stations across
              50+ countries and every major industrial hub in India.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-4xl font-bold text-[#d79b20]">50+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  Export Countries
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#d79b20]">100+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  Domestic Hubs
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#d79b20]">500+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  Guaranteed Response
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 h-[500px] p-[2px] bg-[#d79b20]/40 rounded-2xl overflow-hidden"
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

      {/* =============================== */}
      {/* SECTION 10: DOMESTIC SUPPLY CITIES */}
      {/* =============================== */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              National Infrastructure Support
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#0a1a52] uppercase leading-[1.15]">
            STRATEGIC <span className="text-[#d79b20]">DOMESTIC SUPPLY</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0a1a52] to-[#d79b20] rounded-full"></div>

          <p className="text-[#0a1a52]/70 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Jindutt Metal & Alloy Pvt. Ltd. serves as a critical material
            partner for India's premier industrial hubs, delivering
            high-integrity alloys for zero-failure performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {state.map((item, index) => (
            <button
              key={index}
              className="py-3 px-6 rounded-full border border-[#d79b20]/30 bg-white text-[#0a1a52] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#d79b20] hover:to-[#c08a1a] hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-[#d79b20]/20 hover:-translate-y-1"
            >
              <span className="text-[#d79b20] text-xs group-hover:text-white">
                ◆
              </span>
              {item.name}
            </button>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 11: INTERNATIONAL EXPORT NETWORK */}
      {/* =============================== */}
      <section className="w-full bg-[#0a1a52] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Global Trade Authority
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            INTERNATIONAL <span className="text-[#d79b20]">EXPORT NETWORK</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#d79b20] to-white/30 rounded-full"></div>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            As a premier ISO Certified manufacturer, Jindutt Metal & Alloy Pvt.
            Ltd. maintains a high-velocity export corridor, delivering
            precision-engineered piping solutions to over 50 countries
            worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {countries.map((country) => (
            <button
              key={country.name}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d79b20] hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d79b20] to-[#0a1a52] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
              <div className="relative z-10 flex flex-col items-start">
                <span className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
                  {country.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-[#d79b20]">
                  Export Market
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 12: TESTIMONIALS */}
      {/* =============================== */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
              Market Trust
            </span>
            <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a1a52] uppercase">
            INDUSTRIAL <span className="text-[#d79b20]">IMPACT</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0a1a52] to-[#d79b20] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 rounded-2xl shadow-sm p-8 pt-16 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#d79b20]/30"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:left-6 group-hover:translate-x-0">
                <div className="w-14 h-14 bg-[#d79b20] rounded-xl flex items-center justify-center shadow-lg shadow-[#d79b20]/20">
                  <FaQuoteRight className="w-6 h-6 text-white" />
                </div>
              </div>

              <p className="text-slate-600 italic leading-8 text-base transition-colors duration-500 group-hover:text-[#0a1a52]">
                "
                {item.text ||
                  "Jindutt Metal & Alloy Pvt. Ltd. consistently delivers certified piping components with complete documentation and traceability. Their responsiveness and commitment to quality have made them a dependable sourcing partner."}
                "
              </p>

              <div className="w-full h-px bg-slate-200 my-8 transition-colors duration-500 group-hover:bg-[#d79b20]/30"></div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d79b20] group-hover:border-[#d79b20]">
                  <span className="text-[#d79b20] text-xl font-bold transition-colors duration-500 group-hover:text-white">
                    {item.initials || "JM"}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#0a1a52] uppercase transition-colors duration-500 group-hover:text-[#d79b20]">
                    {item.name}
                  </h3>
                  <p className="text-[#d79b20] uppercase tracking-[0.15em] text-xs font-semibold mt-1">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CSS keyframe configuration */}
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
