import { useLocation, useParams } from "react-router-dom";
import productDetails from "../../data/productDetails";

import Hero from "../../components/productDetails/Hero";
import Description from "../../components/productDetails/Description";
import Grades from "../../components/productDetails/Grades";
import Specification from "../../components/productDetails/Specification";
import Features from "../../components/productDetails/Features";
import Countries from "../../components/productDetails/Countries";
import Documents from "../../components/productDetails/Documents";
import RelatedProducts from "../../components/products/RelatedProducts";
import FAQ from "../../components/productDetails/FAQ";
import Enquiry from "../../components/productDetails/Enquiry";
import Breadcrumb from "../../components/productDetails/Breadcrumb";
import StickySidebar from "../../components/productDetails/StickySidebar";
import ProductOverview from "../../components/productDetails/ProductOverview";

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

      {/* <Breadcrumb product={product} /> */}

      {/* Main Content */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-8">
            <ProductOverview product={product} />

            <Description product={product} />

            <Grades product={product} />

            <Specification product={product} />

            <Features product={product} />

            <Countries />

            <Documents product={product} />

            <FAQ product={product} />
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <StickySidebar product={product} />
          </div>
        </div>
      </section>

      {/* Full Width Related Products */}
      <RelatedProducts
        relatedProducts={product.relatedProducts}
        product={product}
      />

      {/* Full Width Enquiry */}
      <Enquiry product={product} />
    </div>
  );
}
