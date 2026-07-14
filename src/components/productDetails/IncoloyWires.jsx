// src/components/productDetails/IncoloyWires.jsx
import React from "react";
import { Link } from "react-router-dom";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";
import wiresImage from "../../assets/images/productImage/wires.webp";

const IncoloyWires = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-56 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-5 sm:px-8 lg:px-10">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Incoloy Wires Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)
            </h1>
            <p className="text-lg text-blue-200 mt-2">
              Premium Incoloy Wires for High-Temperature, Corrosion-Resistant &
              Welding Applications
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Incoloy Alloy Wires: Technical Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Incoloy wires are nickel-iron-chromium superalloys engineered to
            provide a high-performance, cost-effective solution for environments
            requiring both high-temperature strength and resistance to various
            forms of corrosion. These alloys act as a bridge between standard
            stainless steels and high-nickel superalloys, offering excellent
            oxidation resistance and structural stability. By balancing nickel
            and iron content, Incoloy wires maintain their mechanical properties
            under prolonged thermal stress and aggressive chemical exposure.
          </p>
        </div>

        {/* 800 Series */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Incoloy 800, 800H, and 800HT Wires
          </h2>
          <p className="text-gray-600 mb-4">
            The 800 Series is the industry standard for high-temperature
            applications requiring creep and rupture strength.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Incoloy 800 (UNS N08800)
              </h3>
              <p className="text-gray-600 mt-2">
                The base grade used for general heat-resistant applications. It
                offers excellent resistance to oxidation and carburization at
                temperatures up to 1100°F (593°C).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Incoloy 800H / 800HT (UNS N08810 / N08811)
              </h3>
              <p className="text-gray-600 mt-2">
                These versions have strictly controlled carbon, aluminum, and
                titanium contents. Combined with a high-temperature solution
                anneal, these wires offer significantly higher creep-rupture
                properties for service above 1100°F.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Key Applications
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Industrial furnace heating elements
              </span>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Heat-treating baskets
              </span>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Petrochemical process piping reinforcement
              </span>
            </div>
          </div>
        </div>

        {/* Incoloy DS and Alloy 330 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Incoloy DS and Alloy 330 Wires
          </h2>
          <p className="text-gray-600 mb-4">
            Incoloy DS (and its close relative Alloy 330) are specialized for
            the heat-treating industry. With an increased silicon content, these
            wires offer superior resistance to "green rot" and internal
            oxidation in carburizing and nitriding atmospheres.
          </p>
          <p className="text-gray-600">
            <strong>Thermal Stability:</strong> They maintain excellent
            ductility even after long-term service at high temperatures, making
            them ideal for components subject to repeated thermal cycling.
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Key Applications
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Furnace muffles
              </span>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Radiant tubes
              </span>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Specialized wire mesh for high-heat conveyer belts
              </span>
            </div>
          </div>
        </div>

        {/* Incoloy 825 and 925 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Incoloy 825 and 925 Wires (Corrosion Resistant)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Incoloy 825 (UNS N08825)
              </h3>
              <p className="text-gray-600 mt-2">
                A titanium-stabilized alloy with added molybdenum and copper. It
                provides exceptional resistance to many corrosive environments,
                particularly sulfuric and phosphoric acids. It is virtually
                immune to chloride-ion stress corrosion cracking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Incoloy 925 (UNS N09925)
              </h3>
              <p className="text-gray-600 mt-2">
                An age-hardenable version of Alloy 825. It provides the same
                superior corrosion resistance but with much higher mechanical
                strength and hardness through precipitation hardening.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Key Applications
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Oil and gas downhole components
              </span>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                Acid production equipment
              </span>
              <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                High-strength marine fasteners
              </span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Specification of Incoloy Wire (800, 800H/HT, 825, 925)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Dimensions & Standards
              </h4>
              <p className="text-gray-800">
                ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Diameter Range
              </h4>
              <p className="text-gray-800">
                0.0004" to 0.040" (10 microns to 1.0 mm)
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                International Specifications
              </h4>
              <p className="text-gray-800">
                QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Length & Density
              </h4>
              <p className="text-gray-800">
                Cut: 0.125" to 72" | Density: 8.89 g/cm³
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Surface Finish
              </h4>
              <p className="text-gray-800">
                Polished Bright, Smooth, Enamel, PTFE, Ceramic
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Test Certificate
              </h4>
              <p className="text-gray-800">
                Yes (MTC EN 10204 3.1 / 3.2 Available)
              </p>
            </div>
          </div>
        </div>

        {/* Stock Availability */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Stock Availability of Incoloy Wire
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Welding Wire
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy® Alloy Welding Wires</li>
                <li>• Inconel Welding Wire Stock</li>
                <li>• Incoloy Alloy Welding Wires</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">Filler Wire</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy® Filler Wires</li>
                <li>• Inconel Filler Wires</li>
                <li>• Incoloy Alloy Filler Wires</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">Wire Bobbin</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy® Alloy Wire Bobbin</li>
                <li>• Inconel Wire Bobbin Stock</li>
                <li>• Incoloy Alloy Wire Bobbin</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">Wire Rope</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy Alloy Wire Rope</li>
                <li>• Inconel® Alloy Wire Rope</li>
                <li>• Inconel Wire Rope Industrial</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">Coil Wire</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy® Alloy Coil Wire</li>
                <li>• Inconel Coil Wire Stock</li>
                <li>• Incoloy Alloy Coil Wire</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">Spool Wire</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy Alloy Spool Wire</li>
                <li>• Inconel Spool Wire Stock</li>
                <li>• Inconel® Alloy Spool Wire</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Equivalent Grades */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Equivalent Grades: Incoloy Alloy Wires
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    GRADE
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    UNS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    WERKSTOFF NR.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Common Trade Name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 800
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">N08800</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.4876</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    DS 330 / NA 15
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 800H/HT
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    N08810 / N08811
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    1.4958 / 1.4859
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Alloy 800H / 800HT
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 825
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">N08825</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2.4858</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Alloy 825 / NA 16
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 925
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">N09925</td>
                  <td className="px-4 py-3 text-sm text-gray-700">—</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Alloy 925 / NCF 925
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Chemical Composition */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Chemical Composition of Incoloy Wires
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ni
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cr
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fe
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    C
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Al
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ti
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Other
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">800</td>
                  <td className="px-4 py-3 text-sm text-gray-700">30-35</td>
                  <td className="px-4 py-3 text-sm text-gray-700">19-23</td>
                  <td className="px-4 py-3 text-sm text-gray-700">39.5 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.10 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.15-0.6</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.15-0.6</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Cu: 0.75 max
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">800H/HT</td>
                  <td className="px-4 py-3 text-sm text-gray-700">30-35</td>
                  <td className="px-4 py-3 text-sm text-gray-700">19-23</td>
                  <td className="px-4 py-3 text-sm text-gray-700">39.5 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.05-0.10</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.15-0.6</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.15-0.6</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Cu: 0.75 max
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">825</td>
                  <td className="px-4 py-3 text-sm text-gray-700">38-46</td>
                  <td className="px-4 py-3 text-sm text-gray-700">19.5-23.5</td>
                  <td className="px-4 py-3 text-sm text-gray-700">22 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.05 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.02 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.6-1.2</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Cu: 1.5-3.0
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">925</td>
                  <td className="px-4 py-3 text-sm text-gray-700">42-46</td>
                  <td className="px-4 py-3 text-sm text-gray-700">19-22</td>
                  <td className="px-4 py-3 text-sm text-gray-700">28.5</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.01 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.1-0.5</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.9-2.4</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Mo: 2.5-3.5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mechanical Properties */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Mechanical & Physical Properties
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Density
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tensile Strength
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Yield Strength
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Elongation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    800 / 800H / 825
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    7.94 g/cm³
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">520 MPa</td>
                  <td className="px-4 py-3 text-sm text-gray-700">205 MPa</td>
                  <td className="px-4 py-3 text-sm text-gray-700">30%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">925</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    8.05 g/cm³
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">1210 MPa</td>
                  <td className="px-4 py-3 text-sm text-gray-700">810 MPa</td>
                  <td className="px-4 py-3 text-sm text-gray-700">24%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Diameter Tolerance */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Diameter Tolerance: Incoloy Alloy Wires
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specified Diameter in. (mm)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tolerance Over (+)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tolerance Under (-)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.5000 (12.70)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.002 (0.05)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.002 (0.05)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Under 0.5000 to 0.3125
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0015 (0.04)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0015 (0.04)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Under 0.3125 to 0.0440
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.001 (0.03)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.001 (0.03)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Under 0.0440 to 0.0330
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0008 (0.02)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0008 (0.02)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Under 0.0240 to 0.0120
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0004 (0.010)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0004 (0.010)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Under 0.0120 to 0.0080
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0003 (0.008)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0003 (0.008)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Under 0.0048 to 0.0030
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0001 (0.003)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.0001 (0.003)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Specialized Products */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Specialized in Incoloy Alloy Wires & Filler Metals
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm text-gray-700">
                Incoloy 800 / 800H / 800HT High-Temperature Wires
              </span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm text-gray-700">
                Incoloy 825 (UNS N08825) Corrosion Resistant Wires
              </span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm text-gray-700">
                Incoloy 925 Age-Hardenable High-Strength Wires
              </span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm text-gray-700">
                Precision TIG & MIG Incoloy Welding Wires
              </span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm text-gray-700">
                Incoloy Alloy Filler Wires & Welding Filler Rods
              </span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm text-gray-700">
                Incoloy Fine Wires for Heating Elements & Sensors
              </span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/materials/incoloy"
          className="inline-flex items-center gap-2 text-sky-600 hover:text-slate-900 font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Incoloy
        </Link>
      </div>
    </section>
  );
};

export default IncoloyWires;
