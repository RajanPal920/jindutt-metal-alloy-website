import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const StickySidebar = ({ product }) => {
  const contact = product?.contact || {};

  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_55px_-25px_rgba(2,6,23,0.35)]">
        <div className="rounded-2xl bg-slate-900 p-5 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Need a Quote?
          </p>
          <h3 className="mt-3 text-2xl font-bold text-white">
            Contact our sales team
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Request pricing, availability, and technical support for this
            product.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <a
            href={`https://wa.me/${contact.whatsapp || ""}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700 transition hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            <span className="font-medium">WhatsApp Inquiry</span>
          </a>

          <a
            href={`tel:${contact.phone || ""}`}
            className="flex items-center gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sky-700 transition hover:-translate-y-0.5"
          >
            <Phone size={18} />
            <span className="font-medium">Call Now</span>
          </a>

          <a
            href={`mailto:${contact.email || ""}`}
            className="flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-orange-700 transition hover:-translate-y-0.5"
          >
            <Mail size={18} />
            <span className="font-medium">Email Us</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default StickySidebar;
