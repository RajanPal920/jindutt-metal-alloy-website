import { Phone, MessageCircle, Download } from "lucide-react";

const Hero = ({ product }) => {
  const contact = product?.contact || {};

  return (
    <section className="bg-slate-950 py-16 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
          Product Details
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {product.title}
        </h1>
        <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-8">
          {product.description}
        </p>
        <div className="mt-5 h-[3px] w-16 bg-amber-500" />

        <div className="mt-6 flex flex-wrap gap-3">
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
    </section>
  );
};

export default Hero;
