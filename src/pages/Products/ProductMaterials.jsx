import { useParams, Link } from "react-router-dom";
import productMaterials from "../../data/productMaterials";

import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const ProductMaterials = () => {
  const { category } = useParams();

  const materials = productMaterials[category] ?? [];

  if (!materials.length) {
    return (
      <h1 className="text-center py-20 text-2xl font-bold">
        Materials Not Found
      </h1>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerIndustrial})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70"></div>

        <div className="relative max-w-7xl mx-auto h-full flex items-center px-5 sm:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white">
            {category.replace(/-/g, " ")}
          </h1>
        </div>
      </div>

      {/* Cards */}
      {/* Materials */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {materials.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-700 backdrop-blur">
                  {category.replace(/-/g, " ")}
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="mb-8 text-[15px] leading-7 text-slate-600 line-clamp-3">
                  {item.shortDescription}
                </p>

                <Link
                  to={`/products/${category}/${item.slug}`}
                  state={{ material: item }}
                  className="inline-flex items-center gap-3 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-slate-900"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMaterials;
