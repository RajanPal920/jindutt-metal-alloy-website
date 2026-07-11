import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";

import Materials from "../pages/Materials/Materials";
import MaterialCategory from "../pages/Materials/MaterialCategory";
import MaterialDetail from "../pages/Materials/MaterialDetail";


import Certificates from "../pages/Certificates/Certificates";
import CertificateDetails from "../pages/Certificates/CertificateDetails";

import ProductMaterials from "../pages/Products/ProductMaterials";
import ProductDetails from "../pages/Products/ProductDetails";
import ProductCategories from "../components/productDetails/ProductCategories";
import DimensionViewer from "../pages/Dimensions/DimensionViewer";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      <Route path="/products" element={<ProductCategories />} />

      {/* Product Category Page */}
      <Route path="/products/:category" element={<ProductMaterials />} />

      {/* Individual Product Details */}
      <Route path="/products/:category/:slug" element={<ProductDetails />} />

      {/* Materials */}
      <Route path="/materials" element={<Materials />} />
      <Route path="/materials/:slug" element={<MaterialCategory />} />
      <Route path="/materials/:slug/:itemSlug" element={<MaterialDetail />} />

      {/* Dimensions */}
    

      <Route path="/dimensions/:slug" element={<DimensionViewer />} />

      {/* Certificates */}
      <Route path="/certificates" element={<Certificates />} />

      <Route path="/certificates/:slug" element={<CertificateDetails />} />

      {/* Gallery */}
      <Route path="/gallery" element={<Gallery />} />

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
