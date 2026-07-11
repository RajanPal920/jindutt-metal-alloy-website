import { Phone, MessageCircle, Download, ArrowRight } from "lucide-react";

const Hero = ({ product }) => {
  const contact = product?.contact || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-sky-500 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-sky-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300 border border-sky-500/30">
              Premium Industrial Product
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {product.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
              {product.description}
            </p>

            {/* Quick Info */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
                ASTM / ASME Standards
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
                ISO Certified
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
                Worldwide Export
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href={`https://wa.me/${contact.whatsapp || ""}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700"
              >
                <MessageCircle size={20} />
                Request Quote
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${contact.phone || ""}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur hover:bg-green-500 transition"
              >
                <Phone size={20} />
                Call Now
              </a>

              {product.pdfCatalogue && (
                <a
                  href={product.pdfCatalogue}
                  className="inline-flex items-center gap-3 rounded-full border border-sky-500 px-7 py-4 font-semibold text-sky-300 hover:bg-sky-600 hover:text-white transition"
                >
                  <Download size={20} />
                  Download Catalogue
                </a>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto max-h-[520px] object-contain transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-8 py-5 shadow-2xl">
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl font-bold text-sky-600">25+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>

                <div className="w-px bg-slate-200"></div>

                <div>
                  <p className="text-3xl font-bold text-sky-600">50+</p>
                  <p className="text-sm text-slate-500">Export Countries</p>
                </div>

                <div className="w-px bg-slate-200"></div>

                <div>
                  <p className="text-3xl font-bold text-sky-600">ISO</p>
                  <p className="text-sm text-slate-500">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
