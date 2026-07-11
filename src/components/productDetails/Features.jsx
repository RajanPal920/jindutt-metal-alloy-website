import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Award,
  Sparkles,
  Factory,
  CheckCircle2,
} from "lucide-react";

const icons = [ShieldCheck, BadgeCheck, Award, Sparkles, Factory, CheckCircle2];

const featureDescriptions = {
  "Excellent Corrosion Resistance":
    "Designed to withstand corrosive industrial and marine environments.",

  "High Tensile Strength":
    "Engineered for demanding pressure and structural applications.",

  "Heavy Duty Construction":
    "Manufactured for long-lasting industrial performance.",

  "Precision Threading":
    "Ensures accurate fitting and hassle-free installation.",

  "Long Service Life":
    "Offers outstanding durability with minimal maintenance.",

  "Rust Resistant": "Provides reliable protection against oxidation and rust.",

  "Easy Installation": "Simple installation process that reduces downtime.",

  "Excellent Load Bearing Capacity":
    "Built to support heavy-duty industrial loads safely.",

  "Dimensionally Accurate":
    "Manufactured using precision machining for perfect dimensions.",

  "Third Party Inspection Available":
    "Quality verified with international inspection standards.",
};

const Features = ({ product }) => {
  const features = product?.features || [];

  if (!features.length) return null;

  return (
    <section className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 lg:p-12">
      {/* Heading */}

      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Product Advantages
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Why Choose This Product?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-slate-600 leading-8">
          Our products are manufactured using premium raw materials and
          international quality standards to ensure maximum durability,
          performance, and reliability across industrial applications.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={feature}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">
                <Icon
                  size={30}
                  className="text-sky-700 group-hover:text-white"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {featureDescriptions[feature] ||
                  "Manufactured according to international quality standards for reliable industrial performance."}
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-sky-600">
                <span>Quality Assured</span>

                <CheckCircle2 size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
