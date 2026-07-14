// src/components/common/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#091a3f] text-slate-400 border-t border-slate-800/50 relative overflow-hidden font-sans">
      {/* Premium Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d79b20] to-transparent opacity-40" />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        {/* TOP SECTION */}
        <div className="border-b border-slate-800/60 pb-12">
          <div className="max-w-3xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#d79b20]/10 px-4 py-1.5 border border-[#d79b20]/30 rounded-full mb-5">
              <span className="w-2 h-2 bg-[#d79b20] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d79b20]">
                Industry Leader
              </span>
            </div>

            {/* Corporate Name */}
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d79b20]">
              Jindutt Metal & Alloy Pvt. Ltd.
            </p>

            {/* Heading */}
            <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Premium metals and <br />
              <span className="text-[#d79b20]">industrial solutions.</span>
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xl">
              We supply high-performance stainless, duplex, nickel, and
              specialty alloys for critical industrial, marine, and energy
              projects worldwide.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919967078222"
                className="group inline-flex items-center justify-between gap-3 border border-slate-700/50 bg-slate-800/30 hover:bg-[#d79b20]/10 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-[#1d61c0] hover:text-white rounded-lg min-w-[160px]"
              >
                <span>Call Us</span>
                <FaPhone className="w-4 h-4 text-[#1872bc] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:info@jinduttmetalalloy.com"
                className="group inline-flex items-center justify-between gap-3 border border-slate-700/50 bg-slate-800/30 hover:bg-[#d79b20]/10 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-[#d79b20] hover:text-white rounded-lg min-w-[160px]"
              >
                <span>Email Inquiry</span>
                <FaEnvelope className="w-4 h-4 text-[#d79b20] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/919967078222"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-3 border border-emerald-700/30 bg-emerald-900/10 hover:bg-emerald-900/30 px-5 py-3 text-sm font-medium text-emerald-300 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-200 rounded-lg min-w-[160px]"
              >
                <span>WhatsApp</span>
                <FaWhatsapp className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="grid gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Company */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d79b20]">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Materials", to: "/materials" },
                { label: "Contact", to: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group text-sm"
                  >
                    <FaArrowRight className="w-3 h-3 text-[#d79b20] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d79b20]">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Coils", to: "/products/coils" },
                { label: "Pipes", to: "/products/pipes" },
                { label: "Plates", to: "/products/plates" },
                { label: "Round Bars", to: "/products/round-bars" },
                { label: "Flanges", to: "/products/flanges" },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group text-sm"
                  >
                    <FaArrowRight className="w-3 h-3 text-[#d79b20] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d79b20]">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 text-[#d79b20] mt-0.5 shrink-0" />
                <span>Ahmedabad, India</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <FaPhone className="w-4 h-4 text-[#d79b20] mt-0.5 shrink-0" />
                <span>+91 9967078222</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <FaEnvelope className="w-4 h-4 text-[#d79b20] mt-0.5 shrink-0" />
                <span className="break-all">info@jinduttmetalalloy.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications & Social */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d79b20]">
              Certifications
            </h4>
            <ul className="mt-5 space-y-2">
              {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map(
                (cert, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <FaCheckCircle className="w-4 h-4 text-[#d79b20] shrink-0" />
                    {cert}
                  </li>
                ),
              )}
            </ul>

            {/* Social */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d79b20]">
                Follow Us
              </h4>
              <div className="flex gap-2 mt-3">
                {[
                  { icon: FaLinkedinIn, label: "LinkedIn" ,style:"bg-blue-5000" },
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaSquareFacebook, label: "Facebook" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center text-slate-400 transition-all duration-300  hover:bg-[#102983] hover:text-[#8399e7] hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800/60 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jindutt Metal & Alloy Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="text-slate-400">Engineered for performance</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Trusted for reliability</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#d79b20]/40 to-transparent" />
    </footer>
  );
};

export default Footer;
