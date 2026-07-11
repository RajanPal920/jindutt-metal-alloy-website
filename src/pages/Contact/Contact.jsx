import React from "react";
import heroBg from "../../assets/images/industries/main-banner.webp";
import {
  Building2,
  Factory,
  Globe2,
  Lock,
  Phone,
  Mail,
  Clock3,
  Send,
  MapPin,
  Navigation,
  Diamond,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo/jindutt-logo.png"

const Contact = () => {
  const leftVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const rightVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      {/* HERO SECTION */}

      <section
        className="relative w-full min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051139]/95 via-[#082C8C]/80 to-[#051139]/90 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[70vh]">
          {/* TEXT AREA */}
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
              <p className="text-sky-300 uppercase tracking-[0.2em] text-xs font-bold">
                Secure Infrastructure Pipeline
              </p>
            </div>

            <h1 className="flex flex-col gap-1 font-black tracking-tight text-white">
              <span className="text-4xl md:text-5xl leading-none">
                INITIATE GLOBAL
              </span>

              <span className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent text-4xl md:text-5xl font-medium leading-none">
                TECHNICAL CONSULTATION
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Connect directly with our corporate logistics nodes, international
              sales divisions, and heavy-scale manufacturing yards.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section
        className="w-full py-24 bg-slate-50 relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14,165,233,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14,165,233,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        {/* Fading edges for the grid background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-sky-500 text-sm font-bold">
              Operational Routing Nodes
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black uppercase text-[#0B1E69] tracking-tight">
              Corporate Directory
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative max-w-[350px] w-full min-h-[430px] mx-auto overflow-hidden rounded-2xl bg-[#0B1E69] p-8 text-white shadow-xl hover:shadow-2xl hover:shadow-sky-900/20 transition-all duration-300 flex flex-col border border-white/5"
            >
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-sky-400 to-cyan-300 transform origin-left scale-x-100 transition-transform duration-500"></div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-sky-500/20 group-hover:border-sky-500/30 transition-all duration-300 shadow-inner">
                <Building2 className="h-8 w-8 text-sky-400" />
              </div>

              <h3 className="mt-8 text-2xl font-black uppercase leading-tight tracking-wide group-hover:text-sky-300 transition-colors">
                Head Office &
                <br />
                Correspondence
              </h3>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Jindutt Metal & Alloy Pvt. Ltd.
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>

              <div className="mt-6 flex-1">
                <p className="text-[15px] leading-relaxed text-slate-300">
                  Office No. 5, Plot No. 39/41,
                  <br />
                  [Office Address Line 1 - PLEASE UPDATE]
                  <br />
                  [Office Address Line 2 - PLEASE UPDATE]
                  <br />
                  [Office Address Line 3 - PLEASE UPDATE]
                  <br />
                  [City - PIN - PLEASE UPDATE]
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative max-w-[350px] w-full min-h-[430px] mx-auto overflow-hidden rounded-2xl bg-[#0B1E69] p-8 text-white shadow-xl hover:shadow-2xl hover:shadow-sky-900/20 transition-all duration-300 flex flex-col border border-sky-500/20"
            >
              {/* Highlight Top Accent for the center card */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-yellow-400 to-amber-500 transform origin-left scale-x-100 transition-transform duration-500"></div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/30 transition-all duration-300 shadow-inner">
                <Factory className="h-8 w-8 text-yellow-400" />
              </div>

              <h3 className="mt-8 text-2xl font-black uppercase leading-tight tracking-wide group-hover:text-yellow-400 transition-colors">
                Manufacturing &
                <br />
                Logistics
              </h3>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Heavy Industry Stockyards
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>

              <div className="mt-6 flex-1">
                <p className="text-[15px] leading-relaxed text-slate-300">
                  Unit No. 1661, Kalamboli Steel Market Yard, Kalamboli, Panvel,
                  <br />
                  Navi [City, State - PIN - PLEASE UPDATE]
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative max-w-[350px] w-full min-h-[430px] mx-auto overflow-hidden rounded-2xl bg-[#0B1E69] p-8 text-white shadow-xl hover:shadow-2xl hover:shadow-sky-900/20 transition-all duration-300 flex flex-col border border-white/5"
            >
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-sky-400 to-cyan-300 transform origin-left scale-x-100 transition-transform duration-500"></div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-sky-500/20 group-hover:border-sky-500/30 transition-all duration-300 shadow-inner">
                <Globe2 className="h-8 w-8 text-sky-400" />
              </div>

              <h3 className="mt-8 text-2xl font-black uppercase leading-tight tracking-wide group-hover:text-sky-300 transition-colors">
                Central
                <br />
                Communications
              </h3>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Real-Time Routing Channels
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>

              <div className="mt-6 flex-1 flex flex-col gap-4 text-[15px] leading-relaxed text-slate-300">
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex flex-col hover:text-white transition-colors"
                >
                  <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-1">
                    Mobile Network
                  </span>
                  <span className="group-hover/link:text-green-400 transition-colors">
                    +91 90306 41798
                  </span>
                </a>

                <a
                  href="tel:+912200000000"
                  className="group/link flex flex-col hover:text-white transition-colors"
                >
                  <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-1">
                    Domestic Line
                  </span>
                  <span>+91 22 4688 1798</span>
                </a>

                <a
                  href="mailto:info@jinduttmetalalloy.com"
                  className="group/link flex flex-col hover:text-white transition-colors break-all"
                >
                  <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-1">
                    Secure Email
                  </span>
                  <span>info@jinduttmetalalloy.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="w-full bg-white border-t border-slate-100">
        {/* Removed min-h-[800px] to allow the container to shrink to its content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] shadow-2xl">
          {/* LEFT SIDE - FORM */}
          {/* Reduced padding from p-10 md:p-16 to p-8 md:p-12 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col justify-center"
          >
            {/* Slightly reduced text size to fit better in the compact space */}
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#0B1E69] tracking-tight">
              Transmit Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 block mt-1">
                Inquiry
              </span>
            </h2>

            {/* Alert Strip - Reduced top margin and padding */}
            <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50/50 p-4 md:p-5 relative overflow-hidden flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-sky-100">
                <Lock className="h-4 w-4 text-sky-500" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1E69] uppercase tracking-wider text-sm">
                  Inquiry Routing Gateway
                </h3>
                <p className="text-slate-500 text-[11px] font-medium uppercase mt-0.5">
                  Secure Industrial Grade Communication Framework
                </p>
              </div>
            </div>

            {/* FORM - Reduced gap-y from 6 to 4, and mt from 10 to 6 */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-6">
              <div className="space-y-1.5">
                <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                  Representative Name
                </label>
                {/* Reduced input height from h-14 to h-12 */}
                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                  Phone Matrix Contact
                </label>
                <input
                  type="text"
                  placeholder="+91 00000 00000"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                  Corporate Email Address
                </label>
                <input
                  type="email"
                  placeholder="company@domain.com"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                  Component Specification
                </label>
                <input
                  type="text"
                  placeholder="e.g. ASTM A312 TP304"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5 mt-1">
                <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                  Detailed Requirements
                </label>
                {/* Reduced rows from 5 to 3 */}
                <textarea
                  rows="3"
                  placeholder="Specify dimensions, quantities, and operational environment..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800 outline-none transition-all resize-none placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                />
              </div>
            </div>

            {/* Reduced mt from 8 to 6, and py from 4 to 3.5 */}
            <button className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#0B1E69] to-blue-700 py-3.5 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.99]">
              Execute Data Transmission
              <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* RIGHT SIDE - INFO */}
          {/* Reduced padding from p-10 md:p-16 to p-8 md:p-12 */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0B1E69] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center"
          >
            {/* Tech Pattern Background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right,#fff 1px,transparent 1px),
                  linear-gradient(to bottom,#fff 1px,transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Reduced bottom margin from mb-10 to mb-6 */}
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight mb-6">
                Global Sales
                <br />
                <span className="text-sky-400">Desk</span>
              </h2>

              {/* Contact Card - Reduced padding from p-8 to p-6 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <span className="inline-block rounded-md border border-sky-400/30 bg-sky-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-300">
                  INT_SALES_NODE
                </span>

                <h3 className="mt-3 text-xl font-bold tracking-wide">
                  MR. RAMESH PATEL
                </h3>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider font-medium">
                  Head of Operations
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:+91 00000 00000"
                    className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group/link bg-white/5 p-2.5 rounded-xl border border-white/5 hover:bg-white/10"
                  >
                    <div className="bg-sky-500/20 p-2 rounded-lg text-sky-400 group-hover/link:bg-sky-500 group-hover/link:text-white transition-colors">
                      <Phone size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      +91 98206 41798
                    </span>
                  </a>

                  <a
                    href="mailto:info@jinduttmetalalloy.com"
                    className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group/link bg-white/5 p-2.5 rounded-xl border border-white/5 hover:bg-white/10"
                  >
                    <div className="bg-sky-500/20 p-2 rounded-lg text-sky-400 group-hover/link:bg-sky-500 group-hover/link:text-white transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      info@jinduttmetalalloy.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Timing Card - Reduced padding from p-8 to p-6 and top margin to mt-4 */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl group hover:border-white/20 transition-colors">
                <span className="inline-block rounded-md border border-amber-400/30 bg-amber-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  SYS_AVAILABILITY
                </span>

                <h3 className="mt-3 text-lg font-bold uppercase tracking-wide">
                  Operational Timeline
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-lg text-amber-400 mt-0.5">
                      <Clock3 size={16} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold tracking-wide">
                        Mon - Sat
                      </p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        9:00 AM - 7:00 PM (IST)
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-400 uppercase tracking-wider">
                    <span>Sunday</span>
                    <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px]">
                      System Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>

              <span className="uppercase tracking-[0.35em] text-xs font-semibold text-[#082C8C]">
                Geospatial Distribution Core
              </span>
            </div>

            <h2 className="mt-8 text-4xl md:text-5xl font-black uppercase text-[#1D2A44]">
              Factory Coordinates Mapping
            </h2>
          </div>

          {/* Map */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-16"
          >
            {/* Company Logo Card */}
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-4 rounded-xl bg-white px-5 py-3 shadow-2xl border border-slate-200 z-20">
              {/* <img
                src={logo}
                alt="Jindutt Metal & Alloy Pvt. Ltd."
                className="h-12 w-20 object-contain rounded-full"
              /> */}

               <div>
                 <h3 className="text-sm font-extrabold text-[#082C8C] uppercase">
                  Jindutt Metal & Alloy Pvt. Ltd. EXPORT
                </h3> 

                 <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  VERIFIED SUPPLY NODE
                </p> 
              </div> 
            </div>
            {/* Decorative Corners */}
            <div className="absolute -top-5 -left-5 w-8 h-8 border-l-4 border-t-4 border-sky-500 z-20"></div>

            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-r-4 border-b-4 border-sky-500 z-20"></div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.367940963654!2d72.8255938750855!3d18.959351082221364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1505ae6453%3A0x7e1cf95923fa3d61!2sBhavesh%20Steel!5e0!3m2!1sen!2sin!4v1783173881123!5m2!1sen!2sin"
                width="100%"
                height="620"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Address Card */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-2xl bg-[#082C8C] p-8 shadow-xl text-white"
          >
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-sky-400" size={32} />

              <div>
                <h3 className="text-2xl font-bold uppercase">Head Office</h3>

                <p className="mt-4 leading-8 text-slate-200">
                  Office No. 5, Plot No. 39/41,
                  <br />
                  [Office Address Line 1 - PLEASE UPDATE]
                  <br />
                  [Office Address Line 2 - PLEASE UPDATE]
                  <br />
                  [Office Address Line 3 - PLEASE UPDATE]
                  <br />
                  [City - PIN - PLEASE UPDATE]
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=[JINDUTT-ADDRESS-PLACEHOLDER]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      <section className=" w-full h-16 bg-black flex items-center justify-center">
        <h6 className="flex items-center gap-3 font-mono text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
            <Diamond size={14} className="text-blue-950 fill-blue-950" />
          </span>
          Operational Warehouse Target: Unit No. 1661, Kalamboli Steel Market
          Yard, Kalamboli, Panvel, Navi [City, State - PIN - PLEASE UPDATE]
        </h6>
      </section>
    </>
  );
};

export default Contact;
