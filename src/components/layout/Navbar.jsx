import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";

import Header from "./Header";

import products from "../../data/products";
import materials from "../../data/materials";
import dimensions from "../../data/dimensions";
import certificates from "../../data/certificates";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [dropdown, setDropdown] = useState("");

  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
      isActive
        ? "bg-sky-500 text-white"
        : "text-slate-700 hover:bg-slate-100 hover:text-sky-600"
    }`;

  const renderDropdown = (title, path, data) => (
    <div
      className="relative group"
      onMouseEnter={() => setDropdown(title)}
      onMouseLeave={() => setDropdown("")}
    >
      {/* TRIGGER BUTTON */}
      <button
        className={`flex items-center gap-1.5 px-4 py-2.5 font-semibold text-sm tracking-wide transition-all duration-200 relative
        ${dropdown === title ? "text-sky-600" : "text-slate-700 hover:text-sky-600"}`}
      >
        {title}
        <HiChevronDown
          className={`text-base transition-transform duration-300 ${dropdown === title ? "rotate-180" : ""}`}
        />
        {/* Dynamic underline indicator track */}
        <span
          className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-300 transform origin-center
          ${dropdown === title ? "scale-x-100" : "scale-x-0"}`}
        />
      </button>

      {/* DROPDOWN CONTAINER PANEL - NO SCROLLING */}
      {dropdown === title && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
          {/* Widened container to support 3 columns naturally */}
          <div className="w-max min-w-[650px] rounded-2xl bg-white shadow-[0_15px_50px_-12px_rgba(15,23,42,0.2)] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Premium top accent color strip */}
            <div className="h-[3px] w-full bg-gradient-to-r from-sky-500 to-blue-600" />

            {/* Inner list wrapper: REMOVED max-h and overflow-y-auto */}
            <div className="p-5">
              {/* GRID: Increased to 3 columns so items spread wide instead of tall */}
              <div className="grid grid-cols-3 gap-x-5 gap-y-2">
                {data.map((item) => (
                  <NavLink
                    key={item.slug}
                    to={`/${path}/${item.slug}`}
                    className={({ isActive }) => `
                    group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-sky-50/80 text-sky-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                  >
                    <div className="flex items-center gap-3">
                      {/* Modern dynamic bullet indicator */}
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover/item:bg-sky-500 group-hover/item:scale-125 transition-all duration-200" />
                      <span className="tracking-wide whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>

                    {/* Micro-interaction Chevron */}
                    <svg
                      className="w-3.5 h-3.5 opacity-0 -translate-x-2 text-sky-600 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderMobileSection = (title, path, data) => {
    const isOpen = mobileDropdown === title;

    return (
      <div className="border-b border-slate-100">
        {/* Parent */}
        <button
          onClick={() => setMobileDropdown(isOpen ? "" : title)}
          className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-slate-700 hover:text-sky-600"
        >
          <span>{title}</span>

          <HiChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Children */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[800px] pb-3" : "max-h-0"
          }`}
        >
          <div className="ml-5 border-l-2 border-slate-200 pl-4 flex flex-col">
            {data.map((item) => (
              <NavLink
                key={item.slug}
                to={`/${path}/${item.slug}`}
                onClick={() => setMobileMenu(false)}
                className="py-2 text-sm text-slate-500 hover:text-sky-600"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm px-10">
      <div className="w-full h-20 flex items-center justify-between ">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link to="/">
            <Header />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About Us
          </NavLink>
          {renderDropdown("Products", "products", products)}
          {renderDropdown("Materials", "materials", materials)}
          {renderDropdown("Dimensions", "dimensions", dimensions)}
          {renderDropdown("Certificates", "certificates", certificates)}
          <NavLink to="/gallery" className={linkStyle}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="rounded-xl bg-sky-500 px-6 py-2.5 text-white font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-sky-200"
          >
            Talk To Us
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col px-6 py-5">
            <NavLink
              to="/"
              className={linkStyle}
              onClick={() => setMobileMenu(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={linkStyle}
              onClick={() => setMobileMenu(false)}
            >
              About
            </NavLink>

            {renderMobileSection("Products", "products", products)}

            {renderMobileSection("Materials", "materials", materials)}

            {renderMobileSection("Dimensions", "dimensions", dimensions)}

            {renderMobileSection("Certificates", "certificates", certificates)}
            <NavLink
              to="/gallery"
              className={linkStyle}
              onClick={() => setMobileMenu(false)}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={linkStyle}
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-5 rounded-xl bg-sky-500 py-3 text-center font-semibold text-white hover:bg-sky-600 transition"
            >
              Talk To Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
