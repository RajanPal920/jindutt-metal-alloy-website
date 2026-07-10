import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, ShieldCheck } from "lucide-react";
import certificates from "../../data/certificates";

const CertificateDetails = () => {
  const { slug } = useParams();

  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    return (
      <div className="p-10 text-center text-red-500">Certificate not found</div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#071B72] via-[#0A43B8] to-[#0B77D8] py-24">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur">
              <ShieldCheck size={18} className="text-sky-300" />
              <span className="text-xs uppercase tracking-[0.3em] text-sky-200">
                Verified Certificate
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="mt-8 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight">
              {certificate.name}
            </h1>

            <p className="mt-6 text-base md:text-lg leading-8 text-slate-200">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>

      {/* PDF SECTION */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 px-6 md:px-8 py-6">
            <div>
              <h2 className="text-2xl font-bold text-[#082C8C]">
                Certificate Preview
              </h2>
              <p className="mt-1 text-slate-500 text-sm md:text-base">
                View or download the official document
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition"
              >
                <ExternalLink size={18} />
                Open
              </a>

              <a
                href={certificate.pdf}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600 transition"
              >
                <Download size={18} />
                Download
              </a>
            </div>
          </div>

          {/* PDF VIEWER */}
          <div className="bg-slate-100">
            <iframe
              src={`${certificate.pdf}#toolbar=1`}
              className="w-full h-[650px] md:h-[900px]"
              title={certificate.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateDetails;
