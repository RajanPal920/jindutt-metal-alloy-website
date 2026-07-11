import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = product?.faqs || [];

  if (!faqs.length) return null;

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-600">
          <HelpCircle className="text-white" size={30} />
        </div>

        <p className="mt-5 uppercase tracking-[0.35em] text-sky-300 font-semibold text-sm">
          SUPPORT CENTER
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-slate-300 leading-8">
          Find answers to the most common questions regarding our products,
          material grades, manufacturing standards, testing, documentation,
          delivery and worldwide export services.
        </p>
      </div>

      {/* FAQ */}
      <div className="p-8 lg:p-10 space-y-5">
        {faqs.map((faq, index) => {
          const open = activeIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                open
                  ? "border-sky-500 shadow-lg"
                  : "border-slate-200 hover:border-sky-300"
              }`}
            >
              <button
                onClick={() => setActiveIndex(open ? null : index)}
                className="flex w-full items-center justify-between px-6 py-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
                      open ? "bg-sky-600 text-white" : "bg-sky-100 text-sky-600"
                    }`}
                  >
                    <HelpCircle size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180 text-sky-600" : "text-slate-500"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-6 py-6 pl-22">
                    <p className="leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
