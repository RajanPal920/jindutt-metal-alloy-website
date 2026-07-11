import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import contact from "../../data/contact";

const StickySidebar = ({ product }) => {
  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-700 to-blue-900 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
            Need a Quote?
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight">
            Get {product?.title} Price
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-200">
            Contact our sales team for pricing, stock availability, technical
            support and the best quotation for{" "}
            <span className="font-semibold">{product?.title}</span>.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 p-6">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="rounded-full bg-green-100 p-3">
              <MessageCircle size={22} className="text-green-600" />
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">WhatsApp</p>
              <h4 className="font-semibold text-slate-800">
                {contact.whatsapp}
              </h4>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-4 rounded-xl border border-sky-200 bg-sky-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="rounded-full bg-sky-100 p-3">
              <Phone size={22} className="text-sky-600" />
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">Call Us</p>
              <h4 className="font-semibold text-slate-800">{contact.phone}</h4>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 rounded-xl border border-orange-200 bg-orange-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="rounded-full bg-orange-100 p-3">
              <Mail size={22} className="text-orange-600" />
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">Email</p>
              <h4 className="font-semibold text-slate-800 break-all">
                {contact.email}
              </h4>
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default StickySidebar;
