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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {materials.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl border-2 border-sky-500 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <h2
                  className="
                    text-xl
                    font-bold
                    text-blue-900
                    leading-7
                    mb-4
                  "
                >
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-6 flex-grow">
                  {item.shortDescription}
                </p>

                {/* Button */}
                <Link
                  to={`/products/${category}/${item.slug}`}
                  state={{ material: item }}
                  className="
                    mt-8
                    w-full
                    text-center
                    bg-blue-900
                    hover:bg-sky-600
                    text-white
                    font-semibold
                    uppercase
                    tracking-wide
                    py-3
                    rounded-lg
                    transition-all
                    duration-300
                  "
                >
                  View Details
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
