import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductComponent } from "../../components/productDetails";
// Remove the productDetails import since you deleted the folder
// import productDetails from "../../data/productDetails";

export default function ProductDetails() {
  const { category, slug } = useParams();

  // ===============================
  // CHECK FOR CUSTOM PRODUCT COMPONENTS
  // ===============================
  const ProductComponent = getProductComponent(slug);
  if (ProductComponent) {
    return <ProductComponent />;
  }

  // ===============================
  // HANDLE ANCHOR FASTENER CATEGORY (if needed)
  // ===============================
  // Since you have AnchorFastener component, it should handle this via getProductComponent
  // But if you need specific handling for anchor-fastener main page, add it here

  // ===============================
  // PRODUCT NOT FOUND
  // ===============================
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600">The product "{slug}" does not exist.</p>
        <Link
          to="/products"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
