import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Jindutt Metal & Alloy Pvt. Ltd.
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Premium metals and industrial solutions for demanding applications.
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              We supply high-performance stainless, duplex, nickel, and specialty alloys for critical industrial, marine, and energy projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919967078222"
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-500 hover:text-sky-300"
            >
              Call Us
            </a>
            <a
              href="mailto:info@jinduttmetalalloy.com"
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-500 hover:text-sky-300"
            >
              Email Inquiry
            </a>
            <a
              href="https://wa.me/919967078222"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-600/40 bg-emerald-600/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-600/20"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-t border-slate-800 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><NavLink to="/" className="transition hover:text-white">Home</NavLink></li>
              <li><NavLink to="/about" className="transition hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/materials" className="transition hover:text-white">Materials</NavLink></li>
              <li><NavLink to="/contact" className="transition hover:text-white">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Products
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><NavLink to="/products/coils" className="transition hover:text-white">Coils</NavLink></li>
              <li><NavLink to="/products/pipes" className="transition hover:text-white">Pipes</NavLink></li>
              <li><NavLink to="/products/plates" className="transition hover:text-white">Plates</NavLink></li>
              <li><NavLink to="/products/rod-bars" className="transition hover:text-white">Round Bars</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>+91 9967078222</li>
              <li>info@jinduttmetalalloy.com</li>
              <li>Ahmedabad, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Certifications
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>ISO 9001:2015</li>
              <li>ISO 14001:2015</li>
              <li>ISO 45001:2018</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jindutt Metal & Alloy Pvt. Ltd. All rights reserved.</p>
          <p>Engineered for performance. Trusted for reliability.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
