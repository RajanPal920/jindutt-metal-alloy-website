import { useLocation, useParams } from "react-router-dom";
import productDetails from "../../data/productDetails";

import Hero from "../../components/productDetails/Hero";
import Description from "../../components/productDetails/Description";
import Grades from "../../components/productDetails/Grades";
import Specification from "../../components/productDetails/Specification";
import Features from "../../components/productDetails/Features";
import Application from "../../components/productDetails/Application";
import Countries from "../../components/productDetails/Countries";
import Documents from "../../components/productDetails/Documents";
import RelatedProducts from "../../components/products/RelatedProducts";
import FAQ from "../../components/productDetails/FAQ";
import Enquiry from "../../components/productDetails/Enquiry";
import Breadcrumb from "../../components/productDetails/Breadcrumb";
import ProductInfo from "../../components/productDetails/ProductInfo";
import StickySidebar from "../../components/productDetails/StickySidebar";

export default function ProductDetails() {
  const { category, slug } = useParams();
  const location = useLocation();

  const categoryProducts = productDetails[category];

  if (!categoryProducts) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Category Not Found</h1>
      </div>
    );
  }

  const categoryProduct = Array.isArray(categoryProducts)
    ? categoryProducts.find((item) => item.slug === slug)
    : categoryProducts;

  const fallbackProduct = Array.isArray(categoryProducts)
    ? categoryProducts.find((item) => item.slug === category)
    : null;

  const productFromRoute = categoryProduct || fallbackProduct;

  if (!productFromRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
      </div>
    );
  }

  const product = location.state?.material
    ? {
        ...productFromRoute,
        ...location.state.material,
        category: productFromRoute.category || category,
      }
    : productFromRoute;

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_48%,#ffffff_100%)]">
      <Hero product={product} />

      <Breadcrumb product={product} />

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-8">
            <ProductInfo product={product} />

            <Description product={product} />

            <Grades product={product} />

            <Specification product={product} />

            <Features product={product} />

            <Application product={product} />

            <Countries product={product} />

            <Documents product={product} />

            <FAQ product={product} />

            <RelatedProducts relatedProducts={product.relatedProducts} />
          </div>

          <div className="lg:col-span-4">
            <StickySidebar product={product} />
          </div>
        </div>
      </section>
    </div>
  );
}
