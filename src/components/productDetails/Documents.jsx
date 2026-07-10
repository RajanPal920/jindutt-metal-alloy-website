import React from "react";
import { FileText, Download } from "lucide-react";

const Documents = ({ product }) => {
  const documents = Array.isArray(product?.documents) ? product.documents : [];
  const normalizedDocuments = documents.map((doc) => {
    if (typeof doc === "string") {
      return { title: doc, file: "" };
    }

    return {
      title: doc?.title || "Document",
      file: doc?.file || "",
    };
  });

  if (!normalizedDocuments.length) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold">
            Product Resources
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Documents & Downloads
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>

          <p className="max-w-2xl mx-auto mt-5 text-slate-600 leading-7">
            Download product catalogues, technical datasheets and material test
            certificates for detailed product information.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {normalizedDocuments.map((doc, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-600 transition">
                <FileText
                  size={32}
                  className="text-sky-700 group-hover:text-white transition"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">{doc.title}</h3>

              <p className="mt-4 text-slate-600 leading-7">
                Download the latest {String(doc.title).toLowerCase()} for
                complete technical specifications and product information.
              </p>

              {doc.file ? (
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-3 rounded-lg hover:bg-sky-700 transition"
                >
                  <Download size={18} />
                  Download
                </a>
              ) : (
                <button
                  disabled
                  className="mt-8 inline-flex items-center gap-2 bg-slate-300 text-slate-600 px-5 py-3 rounded-lg cursor-not-allowed"
                >
                  <Download size={18} />
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
