import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import products from "../../data/products";

const ProductCategories = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Browse Product Categories
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Explore our complete range of Stainless Steel, Nickel Alloy,
            Titanium, Duplex Steel, Carbon Steel and Special Alloy industrial
            products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  {product.name}
                </h2>

                <p className="mt-3 text-sm text-slate-600 leading-6">
                  {product.shortDescription}
                </p>

                <div className="mt-6 flex items-center justify-between text-red-700 font-semibold">
                  <span>View Products</span>

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
