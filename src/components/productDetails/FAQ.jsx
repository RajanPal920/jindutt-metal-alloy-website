import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = product?.faqs || [];

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold">
            Need Help?
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about our
            products, specifications, manufacturing standards and export
            services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-slate-50 transition"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-100">
                  <p className="text-slate-600 leading-8 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
