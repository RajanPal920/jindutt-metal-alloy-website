// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
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
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo/jindutt-logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specification: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mailto Link Handler - Opens default email client
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the email subject
      const subject = `Inquiry from ${formData.name} - Jindutt Metal & Alloy`;

      // Format the email body with all details
      const body =
        `%0A%0A` +
        `---------- INQUIRY DETAILS ----------%0A%0A` +
        `Name: ${formData.name}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Email: ${formData.email}%0A` +
        `Component Specification: ${formData.specification || "N/A"}%0A%0A` +
        `---------- REQUIREMENTS ----------%0A%0A` +
        `${formData.message}%0A%0A` +
        `---------- %0A` +
        `This inquiry was sent from the Jindutt Metal & Alloy Website Contact Form`;

      // Create mailto link
      const mailtoLink = `mailto:info@jinduttmetalalloy.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        specification: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =============================== */}
      {/* HERO SECTION - Premium */}
      {/* =============================== */}
      <section
        className="relative w-full min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a52]/90 via-[#0a1a52]/70 to-[#0a1a52]/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[70vh]">
          <div className="max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                Secure Infrastructure Pipeline
              </span>
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
            </div>

            <h1 className="flex flex-col gap-2 font-black tracking-tight text-white">
              <span className="text-4xl md:text-5xl lg:text-6xl leading-none">
                INITIATE GLOBAL
              </span>
              <span className="text-[#d79b20] text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
                TECHNICAL CONSULTATION
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed">
              Connect directly with our corporate logistics nodes, international
              sales divisions, and heavy-scale manufacturing yards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#d79b20]" />
                <span>ISO Certified</span>
              </div>
              <div className="w-px h-6 bg-slate-600/50"></div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#d79b20]" />
                <span>Global Reach</span>
              </div>
              <div className="w-px h-6 bg-slate-600/50"></div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Clock3 className="w-4 h-4 text-[#d79b20]" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* DIRECTORY SECTION - Premium */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
                Operational Routing Nodes
              </span>
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#0a1a52] tracking-tight">
              Corporate Directory
            </h2>
            <div className="w-16 h-1 bg-[#d79b20] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20]/40 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d79b20] to-[#0a1a52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d79b20]/10 group-hover:bg-[#d79b20] transition-all duration-300">
                <Building2 className="h-7 w-7 text-[#d79b20] group-hover:text-white transition-all" />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0a1a52] uppercase leading-tight group-hover:text-[#d79b20] transition-colors">
                Head Office &
                <br />
                Correspondence
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Jindutt Metal & Alloy Pvt. Ltd.
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#d79b20]/30 to-transparent"></div>

              <div className="mt-4 flex-1">
                <p className="text-sm leading-relaxed text-slate-500">
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
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20]/40 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d79b20] to-[#0a1a52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d79b20]/10 group-hover:bg-[#d79b20] transition-all duration-300">
                <Factory className="h-7 w-7 text-[#d79b20] group-hover:text-white transition-all" />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0a1a52] uppercase leading-tight group-hover:text-[#d79b20] transition-colors">
                Manufacturing &
                <br />
                Logistics
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Heavy Industry Stockyards
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#d79b20]/30 to-transparent"></div>

              <div className="mt-4 flex-1">
                <p className="text-sm leading-relaxed text-slate-500">
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
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20]/40 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d79b20] to-[#0a1a52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d79b20]/10 group-hover:bg-[#d79b20] transition-all duration-300">
                <Globe2 className="h-7 w-7 text-[#d79b20] group-hover:text-white transition-all" />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0a1a52] uppercase leading-tight group-hover:text-[#d79b20] transition-colors">
                Central
                <br />
                Communications
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Real-Time Routing Channels
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#d79b20]/30 to-transparent"></div>

              <div className="mt-4 flex-1 space-y-3">
                <a
                  href="https://wa.me/919967078222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col hover:text-[#d79b20] transition-colors group/link"
                >
                  <span className="text-xs text-[#d79b20] font-semibold uppercase tracking-wider">
                    Mobile Network
                  </span>
                  <span className="text-sm text-slate-600 group-hover/link:text-[#d79b20] transition-colors">
                    +91 90306 41798
                  </span>
                </a>

                <a
                  href="tel:+912200000000"
                  className="flex flex-col hover:text-[#d79b20] transition-colors group/link"
                >
                  <span className="text-xs text-[#d79b20] font-semibold uppercase tracking-wider">
                    Domestic Line
                  </span>
                  <span className="text-sm text-slate-600 group-hover/link:text-[#d79b20] transition-colors">
                    +91 22 4688 1798
                  </span>
                </a>

                <a
                  href="mailto:info@jinduttmetalalloy.com"
                  className="flex flex-col hover:text-[#d79b20] transition-colors group/link"
                >
                  <span className="text-xs text-[#d79b20] font-semibold uppercase tracking-wider">
                    Secure Email
                  </span>
                  <span className="text-sm text-slate-600 group-hover/link:text-[#d79b20] transition-colors break-all">
                    info@jinduttmetalalloy.com
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* FORM & INFO SECTION - Premium */}
      {/* =============================== */}
      <section className="w-full bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] shadow-2xl">
          {/* LEFT SIDE - FORM */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
                Inquiry Form
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-[#0a1a52] tracking-tight">
              Transmit Technical
              <span className="text-[#d79b20] block mt-1">Inquiry</span>
            </h2>

            {/* Submit Status Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700 text-sm font-medium flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Inquiry prepared! Please check your email client to send the
                message.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-red-700 text-sm font-medium flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                Failed to open email client. Please contact us directly at
                info@jinduttmetalalloy.com
              </div>
            )}

            {/* Info note about email client */}
            <div className="mt-4 rounded-xl bg-blue-50 border border-blue-200 p-3 text-blue-700 text-xs font-medium flex items-center gap-2">
              <span className="text-lg">📧</span>
              This will open your default email client with pre-filled
              information
            </div>

            <div className="mt-4 rounded-xl border border-[#d79b20]/20 bg-[#d79b20]/5 p-4 md:p-5 relative overflow-hidden flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[#d79b20]/20">
                <Lock className="h-4 w-4 text-[#d79b20]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1a52] uppercase tracking-wider text-sm">
                  Inquiry Routing Gateway
                </h3>
                <p className="text-slate-500 text-[11px] font-medium uppercase mt-0.5">
                  Secure Industrial Grade Communication Framework
                </p>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Representative Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#d79b20] focus:bg-white focus:ring-2 focus:ring-[#d79b20]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Phone Matrix Contact *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#d79b20] focus:bg-white focus:ring-2 focus:ring-[#d79b20]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="company@domain.com"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#d79b20] focus:bg-white focus:ring-2 focus:ring-[#d79b20]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Component Specification
                  </label>
                  <input
                    type="text"
                    name="specification"
                    value={formData.specification}
                    onChange={handleChange}
                    placeholder="e.g. ASTM A312 TP304"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#d79b20] focus:bg-white focus:ring-2 focus:ring-[#d79b20]/20"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5 mt-1">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Detailed Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Specify dimensions, quantities, and operational environment..."
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800 outline-none transition-all resize-none placeholder:text-slate-400 focus:border-[#d79b20] focus:bg-white focus:ring-2 focus:ring-[#d79b20]/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0a1a52] hover:bg-[#122a6e] py-3.5 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#0a1a52]/20 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Preparing Email...
                  </>
                ) : (
                  <>
                    Execute Data Transmission
                    <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - INFO */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0a1a52] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center"
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right,#fff 1px,transparent 1px),
                  linear-gradient(to bottom,#fff 1px,transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-[#d79b20]"></span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
                  Global Sales Desk
                </span>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white">
                Global Sales
                <br />
                <span className="text-[#d79b20]">Desk</span>
              </h2>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d79b20]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <span className="inline-block rounded-md border border-[#d79b20]/30 bg-[#d79b20]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d79b20]">
                  INT_SALES_NODE
                </span>

                <h3 className="mt-3 text-xl font-bold tracking-wide text-white">
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
                    <div className="bg-[#d79b20]/20 p-2 rounded-lg text-[#d79b20] group-hover/link:bg-[#d79b20] group-hover/link:text-white transition-colors">
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
                    <div className="bg-[#d79b20]/20 p-2 rounded-lg text-[#d79b20] group-hover/link:bg-[#d79b20] group-hover/link:text-white transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      info@jinduttmetalalloy.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl group hover:border-white/20 transition-colors">
                <span className="inline-block rounded-md border border-amber-400/30 bg-amber-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  SYS_AVAILABILITY
                </span>

                <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">
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

      {/* =============================== */}
      {/* MAP SECTION - Premium */}
      {/* =============================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
                Geospatial Distribution Core
              </span>
              <span className="w-10 h-0.5 bg-[#d79b20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0a1a52]">
              Factory Coordinates Mapping
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12"
          >
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-4 rounded-xl bg-white px-5 py-3 shadow-2xl border border-slate-200 z-20">
              <img
                src={logo}
                alt="Jindutt Metal & Alloy Pvt. Ltd."
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-sm font-extrabold text-[#0a1a52] uppercase">
                  Jindutt Metal & Alloy Pvt. Ltd.
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  VERIFIED SUPPLY NODE
                </p>
              </div>
            </div>

            <div className="absolute -top-5 -left-5 w-8 h-8 border-l-4 border-t-4 border-[#d79b20] z-20"></div>
            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-r-4 border-b-4 border-[#d79b20] z-20"></div>

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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl bg-[#0a1a52] p-8 shadow-xl text-white"
          >
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[#d79b20]" size={32} />
              <div>
                <h3 className="text-2xl font-bold uppercase text-white">
                  Head Office
                </h3>
                <p className="mt-3 leading-7 text-slate-300 text-sm">
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
              className="inline-flex items-center gap-3 rounded-full bg-[#d79b20] hover:bg-[#c08a1a] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d79b20]/25"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      {/* =============================== */}
      {/* WAREHOUSE FOOTER - Premium */}
      {/* =============================== */}
      <section className="w-full py-4 bg-[#0a1a52] flex items-center justify-center border-t border-[#d79b20]/20">
        <h6 className="flex items-center gap-3 text-white text-sm md:text-base font-medium px-4 text-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d79b20] flex-shrink-0">
            <Diamond size={16} className="text-[#0a1a52] fill-[#0a1a52]" />
          </span>
          Operational Warehouse Target: Unit No. 1661, Kalamboli Steel Market
          Yard, Kalamboli, Panvel, Navi [City, State - PIN - PLEASE UPDATE]
        </h6>
      </section>
    </>
  );
};

export default Contact;
