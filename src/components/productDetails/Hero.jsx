import { Phone, MessageCircle, Download } from "lucide-react";

const Hero = ({ product }) => {
  const contact = product?.contact || {};

  return (
    <section className="relative">
      <div className="relative h-[620px] overflow-hidden rounded-b-[2.5rem] border-b border-slate-200/70 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.55)]">
        <img
          src={product.bannerImage || product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.78)_45%,rgba(2,6,23,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_35%)]" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 text-white lg:px-8">
            <div className="inline-flex w-max items-center rounded-full border border-sky-400/30 bg-sky-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-sky-200 backdrop-blur-sm">
              Industrial Solutions
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
              Home / Products / {product.title}
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {product.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-200">
              {product.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp || ""}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={`tel:${contact.phone || ""}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone size={18} />
                Call Now
              </a>

              {product.pdfCatalogue && (
                <a
                  href={product.pdfCatalogue}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
                >
                  <Download size={18} />
                  Catalogue
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
