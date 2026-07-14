// src/components/productDetails/IncoloyFlanges.jsx
import React from "react";
import { Link } from "react-router-dom";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";
import flangesImage from "../../assets/images/productImage/Flanges.webp";

const IncoloyFlanges = () => {
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
              Incoloy 800/800H/800HT/825 Flanges
            </h1>
            <p className="text-lg text-blue-200 mt-2">
              Premium Incoloy Flanges for High-Temperature, Corrosive &
              Petrochemical Applications
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Incoloy 800/800H/800HT/825 Flanges
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Incoloy 800/800H/800HT/825 Flanges are high-performance
            nickel-iron-chromium alloy components offering excellent
            high-temperature properties and corrosion resistance. Available in
            all customized sizes and shapes according to customer needs, these
            flanges are widely used in heat exchangers, carburizing equipment,
            nuclear-steam generators, processing pipes, and heat-element
            sheathing.
          </p>
        </div>

        {/* Material Features */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Material Features
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Incoloy 800 & 800HT
              </h3>
              <p className="text-gray-600 mt-2">
                Incoloy 800/800HT Flanges have excellent features like tough
                design, durability, and high tensile strength. They are made of
                nickel-iron-chromium content and ensure the best
                high-temperature properties due to the aluminum and titanium
                contents. Superior resistance to oxidation is offered due to the
                mixture of nickel and chromium.
              </p>
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Good corrosion resistance in acidic environments
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Resistance to carburization and oxidation
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    High-temperature strength
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Creep-rupture strength
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Incoloy 825
              </h3>
              <p className="text-gray-600 mt-2">
                Incoloy 825 is an iron-chromium-nickel alloy with titanium,
                copper, and molybdenum components. It has improved resistance to
                aqueous corrosion compared to 800 alloys. This alloy is used for
                pollution-control equipment, pickling equipment, acid
                production, oil and gas piping, and nuclear fuel reprocessing.
              </p>
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Extremely resistant to phosphoric and sulfuric acids
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Outstanding resistance to oxidizing and reducing acids
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Resistance to localized attack (crevice and pitting)
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    Good mechanical properties at elevated temperatures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flange Types */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Incoloy 800/800H/800HT/825 Flanges Other Types
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Slip On Flanges
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Incoloy 800 SORF Flanges</li>
                <li>• UNS N08800 / N08810 Slip On Flanges</li>
                <li>• DIN 1.4859 SORF Flanges</li>
                <li>• ASME SB 564 Alloy 825 Slip-on Raised Face Flanges</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Weld Neck Flanges
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ASME SB564 Incoloy 800H WNRF Flanges</li>
                <li>• ASTM B564 Incoloy 825 Weld Neck Flanges</li>
                <li>• DIN 1.4876 Weld Neck Flanges</li>
                <li>• UNS N08825 Weld Neck Raised Face Flanges</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Blind Flanges
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ASTM B564 Incoloy 800HT Blind Flanges</li>
                <li>• UNS N08825 / DIN 2.4858 Blind Flanges</li>
                <li>• ASME SB564 Alloy 800H BLRF Flanges</li>
                <li>• Alloy 800 Blind Raised Face Flanges Supplier</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Threaded Flanges
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• DIN 1.4958 Threaded Flanges</li>
                <li>• UNS N08800 Screwed Flanges</li>
                <li>• ASME SB 564 Alloy 800HT Threaded Flanges</li>
                <li>• ASTM B564 Incoloy 825 Threaded Flanges</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Socket Weld Flanges
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ASTM B564 800 Incoloy Socket Weld Flanges</li>
                <li>• Incoloy UNS N08811/ N08825 Socket Weld Flanges</li>
                <li>• Alloy DIN 1.4876 Socket Weld Flanges</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-2">
                Ring Type Joint Flange
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• UNS N08810 Ring Type Joint Flange</li>
                <li>• ANSI B16.5 Incoloy 800 RTJ Flanges</li>
                <li>• ASTM B564 Incoloy 800HT Ring Type Joint Flanges</li>
                <li>• ASME SB564 Alloy 825 Ring Type Joint Flanges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Specification of Incoloy 800/800H/800HT/825 Flanges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Specification
              </h4>
              <p className="text-gray-800">ASTM B564 / ASME SB564</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Dimension Standard
              </h4>
              <p className="text-gray-800">
                ANSI/ASME B16.5, B 16.47 Series A & B, B16.48, BS4504, BS 10,
                EN-1092, DIN, etc.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Size
              </h4>
              <p className="text-gray-800">1/2" (15 NB) to 48" (1200NB)</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Class / Pressure
              </h4>
              <p className="text-gray-800">
                150#, 300#, 600#, 900#, 1500#, 2500#, PN6 to PN64
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Flange Face Type
              </h4>
              <p className="text-gray-800">
                Flat Face (FF), Raised Face (RF), Ring Type Joint (RTJ)
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Standards
              </h4>
              <p className="text-gray-800">
                ANSI Flanges, ASME Flanges, BS Flanges, DIN Flanges, EN Flanges,
                etc.
              </p>
            </div>
          </div>
        </div>

        {/* Equivalent Grades */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Incoloy 800/800H/800HT/825 Flanges Equivalent Grades
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STANDARD
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    WERKSTOFF NR.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    UNS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    GOST
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    AFNOR
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    JIS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EN
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 800
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.4876</td>
                  <td className="px-4 py-3 text-sm text-gray-700">N08800</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ÐÐ˜670</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Z8NC32-21</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NCF 800</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NA 15</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    X10NiCrAlTi32-20
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 800H
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    1.4958 / 1.4876
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">N08810</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ÐÐ˜670</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Z8NC33-21</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NCF 800H</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NA 15(H)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    X5NiCrAlTi31-20
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 800HT
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    1.4859 / 1.4876
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">N08811</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ÐÐ˜670</td>
                  <td className="px-4 py-3 text-sm text-gray-700">-</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NCF 800HT</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NA 15(HT)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    X8NiCrAlTi32-21
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Incoloy 825
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">2.4858</td>
                  <td className="px-4 py-3 text-sm text-gray-700">N08825</td>
                  <td className="px-4 py-3 text-sm text-gray-700">åè¢©703</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    NFE30C20DUM
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">NCF 825</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NA 16</td>
                  <td className="px-4 py-3 text-sm text-gray-700">NiCr21Mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Chemical Composition */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Chemical Composition of Incoloy 800/800H/800HT/825 Flanges
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    C
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mn
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Si
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fe
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ni
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cr
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Al
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ti
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">800</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.10 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.50 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.00 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.015 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.75 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">39.50 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    30.00 – 35.00
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    19.00 – 23.00
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.15 – 0.60
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.15 – 0.60
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">800H</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.05 – 0.10
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.50 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.00 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.015 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.75 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">39.50 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    30.00 – 35.00
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    19.00 – 23.00
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.15 – 0.60
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.15 – 0.60
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">800HT</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.06 – 0.10
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.50 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.00 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.015 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.75 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">39.50 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    30.00 – 35.00
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    19.00 – 23.00
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.15 – 0.60
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    0.15 – 0.60
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Alloy 825</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.05 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.0 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.03 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1.5 – 3.0</td>
                  <td className="px-4 py-3 text-sm text-gray-700">22.0 min</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    38.0 – 46.0
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    19.5 – 23.5
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.2 max</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.6 – 1.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mechanical Properties */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Mechanical Properties of Incoloy 800/800H/800HT/825 Flanges
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Element
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Density
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Melting Point
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tensile Strength
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Yield Strength (0.2%Offset)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Elongation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Alloy 800 / 800H / 800HT
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    7.94 g/cm³
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    1385 °C (2525 °F)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Psi – 75,000, MPa – 520
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Psi – 30,000, MPa – 205
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">30%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Alloy 825</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    8.14 g/cm³
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    1400 °C (2550 °F)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Psi – 80,000, MPa – 550
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Psi – 32,000, MPa – 220
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Industries */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Application Industries
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Petrochemical Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Oil and Gas Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Chemical Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Power Plant Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Energy Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Pharmaceuticals Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Pulp & Paper Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Food Processing Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Aerospace Industry
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              Refining Industry
            </span>
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

export default IncoloyFlanges;
