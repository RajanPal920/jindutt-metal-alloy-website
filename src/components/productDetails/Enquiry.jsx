import React from "react";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const Enquiry = ({ product }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#082C8C] via-[#0B5ED7] to-[#0EA5E9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sky-200 font-semibold">
              Need More Information?
            </p>

            <h2 className="mt-4 text-5xl font-black text-white leading-tight">
              Get the Best Quote for
              <br />
              {product.title}
            </h2>

            <p className="mt-8 text-blue-100 leading-8 text-lg">
              Jindutt Metal & Alloy Pvt. Ltd. is one of the leading manufacturers, suppliers and
              exporters of premium quality industrial products. Contact our
              technical sales team for pricing, availability, customized sizes,
              export inquiries and technical support.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-bold text-slate-900">
              Contact Our Sales Team
            </h3>

            <p className="mt-3 text-slate-600">
              We usually respond within 30 minutes during business hours.
            </p>

            <div className="mt-10 space-y-5">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${product.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-green-600" size={28} />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-slate-500 text-sm">
                      Chat instantly with us
                    </p>
                  </div>
                </div>

                <ArrowRight />
              </a>

              {/* Call */}
              <a
                href={`tel:${product.contact.phone}`}
                className="flex items-center justify-between p-5 rounded-xl bg-sky-50 border border-sky-200 hover:bg-sky-100 transition"
              >
                <div className="flex items-center gap-4">
                  <Phone className="text-sky-700" size={28} />

                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-slate-500 text-sm">
                      Speak directly with our team
                    </p>
                  </div>
                </div>

                <ArrowRight />
              </a>

              {/* Email */}
              <a
                href={`mailto:${product.contact.email}`}
                className="flex items-center justify-between p-5 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition"
              >
                <div className="flex items-center gap-4">
                  <Mail className="text-orange-600" size={28} />

                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-slate-500 text-sm">
                      Send your product inquiry
                    </p>
                  </div>
                </div>

                <ArrowRight />
              </a>
            </div>

            {/* Quote Button */}

            <button className="w-full mt-10 bg-[#082C8C] hover:bg-[#061F63] text-white py-4 rounded-xl font-semibold transition">
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
