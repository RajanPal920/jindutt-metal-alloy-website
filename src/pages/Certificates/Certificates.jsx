import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Download, ExternalLink } from "lucide-react";
import certificates from "../../data/certificates";

const Certificates = () => {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sky-500 font-semibold text-sm">
            QUALITY ASSURANCE
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#082C8C] uppercase">
            Our Certifications
          </h1>

          <p className="mt-6 text-slate-600 leading-8">
            Jindutt Metal & Alloy Pvt. Ltd. is committed to maintaining the highest standards of
            quality, compliance and customer satisfaction. Browse and download
            our official certificates below.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* PDF Preview */}
              <div className="h-72 bg-slate-100">
                <iframe
                  src={`${certificate.pdf}#toolbar=0`}
                  title={certificate.name}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sky-600">
                  <ShieldCheck size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Verified Certificate
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-[#082C8C]">
                  {certificate.name}
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                  {certificate.description}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                  {/* View Certificate */}
                  <Link
                    to={certificate.route}
                    className="flex-1 rounded-xl bg-sky-500 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
                  >
                    View Details
                  </Link>

                  {/* Open PDF */}
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100"
                    title="Open PDF"
                  >
                    <ExternalLink size={20} />
                  </a>

                  {/* Download PDF */}
                  <a
                    href={certificate.pdf}
                    download={`${certificate.name}.pdf`}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100"
                    title="Download PDF"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
