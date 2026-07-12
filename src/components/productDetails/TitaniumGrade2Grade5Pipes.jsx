import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Sample image imports (replace with your actual image paths)
import productImage from "../../assets/images/productImage/pipes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";
import roundImage from "../../assets/images/stock/round.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const TitaniumGrade2Grade5Pipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Titanium Pipes – Grade 2 & Grade 5 Supplier",
    subtitle:
      "Premium Quality ASTM B861 / ASME SB861 Titanium Grade 2 & Grade 5 Pipes – Exceptional Strength-to-Weight Ratio & Superior Corrosion Resistance",

    technicalOverview: {
      title: "Titanium Pipes – Grade 2 & Grade 5: Technical Overview",
      description:
        "Titanium pipes are the premier choice for engineering projects that demand an exceptional strength-to-weight ratio combined with extraordinary corrosion resistance. Titanium is roughly 45% lighter than steel yet maintains comparable strength, making it indispensable in aerospace, marine, and high-performance industrial sectors. These pipes are non-magnetic and possess a low thermal expansion coefficient, allowing them to remain structurally stable under fluctuating temperatures. The primary secret to Titanium's durability is the instantaneous formation of a stable, protective titanium oxide (TiO₂) film when exposed to oxygen. This passive layer is incredibly resilient, self-healing, and provides a nearly impenetrable barrier against seawater, chlorine, and various aggressive acids.",
    },

    keyFeatures: [
      "Exceptional strength-to-weight ratio (45% lighter than steel)",
      "Outstanding corrosion resistance in seawater and aggressive environments",
      "Self-healing protective titanium oxide film",
      "Non-magnetic with low thermal expansion coefficient",
      "Excellent fatigue resistance and toughness",
      "Maintains structural integrity at fluctuating temperatures",
      "Compliant with ASTM B861, B862, B338 standards",
      "Available in seamless, welded, ERW, and EFW forms",
    ],

    applications: [
      "Aerospace hydraulic systems",
      "Marine and subsea equipment",
      "Desalination plants",
      "Chemical reactors and heat exchangers",
      "Oil and gas industry",
      "High-performance automotive exhaust systems",
      "Medical and pharmaceutical equipment",
      "Power generation plants",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes (Gr 2 & 5)",
        image: seamlessImage,
        items: [
          "ASTM B861 Titanium Seamless",
          "ASME SB861 Gr 2 / Gr 5 Seamless",
          "UNS R50400 / N56400 Seamless",
          "Ti Alloy Grade 2 / 5 Piping",
          "Titanium Thin Wall Seamless",
        ],
      },
      welded: {
        title: "Welded Pipes (Gr 2 & 5)",
        image: weldedImage,
        items: [
          "ASTM B862 Titanium Welded",
          "ASME SB862 / SB865 Welded",
          "Ti Alloy UNS R50400 Welded",
          "Grade 2 / 5 Ti Welded Piping",
          "Ti Alloy Thin Wall Welded",
        ],
      },
      erw: {
        title: "ERW Pipes (Gr 2 & 5)",
        image: erwImage,
        items: [
          "ASTM B338 Grade 2 / 5 ERW",
          "Titanium 3.7035 / 3.7165 ERW",
          "UNS R50400 / N56400 ERW Pipe",
          "Ti Alloy Gr 2 / Gr 5 ERW Pipe",
          "Grade 2 / 5 Titanium ERW Pipe",
        ],
      },
      efw: {
        title: "EFW Pipes (Gr 2 & 5)",
        image: efwImage,
        items: [
          "ASTM B861 Gr 2 / Gr 5 EFW",
          "Titanium 3.7035 / 3.7165 EFW",
          "UNS R50400 / N56400 EFW Pipe",
          "Titanium Electric Fusion Welded",
          "Ti Alloy Gr 2 / Gr 5 EFW Stock",
        ],
      },
      round: {
        title: "Round Pipes (Gr 2 & 5)",
        image: roundImage,
        items: [
          "ASTM B338 / B861 Round Pipes",
          "ASME SB338 Gr 2 / Gr 5 Round",
          "Titanium 3.7035 / 3.7165 Round",
          "Ti Alloy Gr 2 / Gr 5 Round Pipe",
          "Electropolish Round Titanium",
        ],
      },
      hollow: {
        title: "Hollow Pipes (Gr 2 & 5)",
        image: hollowImage,
        items: [
          "ASME SB861 Titanium Hollow",
          "Ti Alloy Gr 2 / Gr 5 Hollow Pipe",
          "UNS R50400 / N56400 Hollow Pipe",
          "Titanium Round Hollow Stock",
          "Custom Titanium Hollow Section",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "Titanium Gr. 2",
        werkstoff: "3.7035",
        uns: "R50400",
      },
      {
        standard: "Titanium Gr. 5",
        werkstoff: "3.7165",
        uns: "N56400",
      },
    ],

    chemicalComposition: [
      {
        grade: "Ti Grade 2",
        ti: "99.2 min",
        c: "0.1 max",
        fe: "0.3 max",
        h: "0.015 max",
        n: "0.03 max",
        o: "0.25 max",
        al: "–",
        v: "–",
      },
      {
        grade: "Ti Grade 5",
        ti: "90 min",
        c: "–",
        fe: "0.25 max",
        h: "–",
        n: "–",
        o: "0.2 max",
        al: "6 min",
        v: "4 min",
      },
    ],

    mechanicalProperties: [
      {
        grade: "Titanium Gr. 2",
        density: "4.5 g/cm³",
        meltingPoint: "1665 °C (3030 °F)",
        tensileStrength: "Psi – 49900, MPa – 344",
        yieldStrength: "Psi – 39900, MPa – 275",
        elongation: "20 %",
      },
      {
        grade: "Titanium Gr. 5",
        density: "4.43 g/cm³",
        meltingPoint: "1632 °C (2970 °F)",
        tensileStrength: "Psi – 138000, MPa – 950",
        yieldStrength: "Psi – 128000, MPa – 880",
        elongation: "14 %",
      },
    ],

    specifications: {
      standards:
        "ASTM B861, B862, B338, B517, B167 / ASME SB861, SB862, SB338, SB517, SB167",
      seamlessSize: '1/2" NB - 16" NB (Available in Gr 2 & Gr 5)',
      weldedSize: '1/2" NB - 24" NB (Welded) | 6" NB - 24" NB (EFW)',
      odRange: "6.00 mm OD up to 914.4 mm OD (Ex-stock)",
      scheduleRange: "SCH 5, SCH10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      manufacturing:
        "Seamless, Welded, ERW, Fabricated, CDW, 100% X-Ray Welded",
      deliveryCondition:
        "Annealed, Pickled, Bright Annealed, Polished, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, NDT, UT Testing",
    },

    weightChart: [
      {
        nps: "1/2″",
        od: "0.840",
        odmm: "21",
        wall: "0.109",
        wallmm: "2.769",
        sched: "40 STD",
        weight: "1.268",
        lbft: "0.851",
      },
      {
        nps: "1/2″",
        od: "0.840",
        odmm: "21",
        wall: "0.147",
        wallmm: "3.734",
        sched: "80 STD",
        weight: "1.621",
        lbft: "1.088",
      },
      {
        nps: "3/4″",
        od: "1.050",
        odmm: "27",
        wall: "0.113",
        wallmm: "2.870",
        sched: "40 STD",
        weight: "1.684",
        lbft: "1.131",
      },
      {
        nps: "3/4″",
        od: "1.050",
        odmm: "27",
        wall: "0.154",
        wallmm: "3.912",
        sched: "80 STD",
        weight: "2.195",
        lbft: "1.474",
      },
      {
        nps: "1″",
        od: "1.315",
        odmm: "33",
        wall: "0.133",
        wallmm: "3.378",
        sched: "40 STD",
        weight: "2.501",
        lbft: "1.679",
      },
      {
        nps: "1″",
        od: "1.315",
        odmm: "33",
        wall: "0.179",
        wallmm: "4.547",
        sched: "80 STD",
        weight: "3.325",
        lbft: "2.172",
      },
      {
        nps: "1 1/4″",
        od: "1.660",
        odmm: "42",
        wall: "0.140",
        wallmm: "3.556",
        sched: "40 STD",
        weight: "3.385",
        lbft: "2.273",
      },
      {
        nps: "1 1/4″",
        od: "1.660",
        odmm: "42",
        wall: "0.191",
        wallmm: "4.851",
        sched: "80 STD",
        weight: "4.464",
        lbft: "2.997",
      },
      {
        nps: "1 1/2″",
        od: "1.900",
        odmm: "48",
        wall: "0.145",
        wallmm: "3.683",
        sched: "40 STD",
        weight: "4.048",
        lbft: "2.718",
      },
      {
        nps: "1 1/2″",
        od: "1.900",
        odmm: "48",
        wall: "0.200",
        wallmm: "5.080",
        sched: "80 STD",
        weight: "5.409",
        lbft: "3.361",
      },
      {
        nps: "2″",
        od: "2.375",
        odmm: "60",
        wall: "0.154",
        wallmm: "3.912",
        sched: "40 STD",
        weight: "5.441",
        lbft: "3.653",
      },
      {
        nps: "2″",
        od: "2.375",
        odmm: "60",
        wall: "0.218",
        wallmm: "5.537",
        sched: "80 STD",
        weight: "7.480",
        lbft: "5.022",
      },
      {
        nps: "2 1/2″",
        od: "2.875",
        odmm: "73",
        wall: "0.203",
        wallmm: "5.516",
        sched: "40 STD",
        weight: "8.629",
        lbft: "5.793",
      },
      {
        nps: "2 1/2″",
        od: "2.875",
        odmm: "73",
        wall: "0.276",
        wallmm: "7.010",
        sched: "80 STD",
        weight: "11.411",
        lbft: "7.661",
      },
      {
        nps: "3″",
        od: "3.500",
        odmm: "89",
        wall: "0.216",
        wallmm: "5.486",
        sched: "40 STD",
        weight: "11.284",
        lbft: "7.576",
      },
      {
        nps: "3″",
        od: "3.500",
        odmm: "89",
        wall: "0.300",
        wallmm: "7.620",
        sched: "80 STD",
        weight: "15.272",
        lbft: "10.253",
      },
      {
        nps: "4″",
        od: "4.500",
        odmm: "114",
        wall: "0.237",
        wallmm: "6.020",
        sched: "40 STD",
        weight: "16.073",
        lbft: "10.790",
      },
      {
        nps: "4″",
        od: "4.500",
        odmm: "114",
        wall: "0.337",
        wallmm: "8.560",
        sched: "80 XHY",
        weight: "22.318",
        lbft: "14.983",
      },
      {
        nps: "6″",
        od: "6.625",
        odmm: "168",
        wall: "0.280",
        wallmm: "7.112",
        sched: "40 STD",
        weight: "58.263",
        lbft: "18.974",
      },
      {
        nps: "8″",
        od: "8.625",
        odmm: "219",
        wall: "0.322",
        wallmm: "8.179",
        sched: "40",
        weight: "42.352",
        lbft: "28.554",
      },
      {
        nps: "10″",
        od: "10.750",
        odmm: "273",
        wall: "0.365",
        wallmm: "9.271",
        sched: "40 STD",
        weight: "63.301",
        lbft: "40.483",
      },
      {
        nps: "12″",
        od: "12.750",
        odmm: "324",
        wall: "0.375",
        wallmm: "9.525",
        sched: "40",
        weight: "73.824",
        lbft: "49.562",
      },
      {
        nps: "14″",
        od: "14.000",
        odmm: "356",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "81.281",
        lbft: "54.568",
      },
      {
        nps: "16″",
        od: "16.000",
        odmm: "406",
        wall: "0.375",
        wallmm: "9.525",
        sched: "30 STD",
        weight: "93.213",
        lbft: "62.578",
      },
    ],

    supplyRange: [
      {
        product: "Titanium Grade 2 / Grade 5 Seamless Round Pipe",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Titanium Grade 2 Seamless Custom Pipe",
        wallThk: "0.05 to 30",
        od: "12.7*12.7 to 300*300",
      },
      {
        product: "Titanium Grade 5 Seamless Custom Pipe",
        wallThk: "0.05 to 30",
        od: "15.7*15.7 to 300*300",
      },
      {
        product: "Titanium Grade 2 Seamless Custom (Rect)",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Titanium Grade 5 Seamless Custom (Rect)",
        wallThk: "0.05 to 30",
        od: "10*50 to 100*500",
      },
      {
        product: "Titanium Grade 2 / Grade 5 Colour Coated Pipe",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Titanium Grade 2 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product: "Titanium Grade 5 Seamless Ornamental Tubes",
        wallThk: "0.05 to 5.0",
        od: "15.7 to 76.5",
      },
      {
        product: "Titanium Grade 2 Electropolished Pipes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Titanium Grade 5 Electropolished Pipes",
        wallThk: "0.05 to 30",
        od: "15.7 to 550",
      },
    ],

    priceRange: [
      {
        diameterA: "1/8",
        diameterB: "6",
        od: "10.03",
        weight: "0.027",
        wall: "1.28",
        price: "10300 – 400",
        pricekg: "300 – 400",
      },
      {
        diameterA: "1/4",
        diameterB: "8",
        od: "13.7",
        weight: "0.049",
        wall: "1.65",
        price: "110 – 200",
        pricekg: "200 – 300",
      },
      {
        diameterA: "3/8",
        diameterB: "10",
        od: "17.2",
        weight: "0.063",
        wall: "1.65",
        price: "169 – 250",
        pricekg: "250 – 320",
      },
      {
        diameterA: "1/2",
        diameterB: "15",
        od: "21.3",
        weight: "1.02",
        wall: "2.11",
        price: "234.8 – 289",
        pricekg: "220 – 320.5",
      },
      {
        diameterA: "3/4",
        diameterB: "20",
        od: "26.7",
        weight: "1.3",
        wall: "2.11",
        price: "300 – 350",
        pricekg: "220 – 300",
      },
      {
        diameterA: "1",
        diameterB: "25",
        od: "33.4",
        weight: "2.13",
        wall: "2.77",
        price: "459.9 – 600",
        pricekg: "200 – 400",
      },
      {
        diameterA: "1 1/4",
        diameterB: "32",
        od: "24.2",
        weight: "2.73",
        wall: "2.77",
        price: "527.9 – 600",
        pricekg: "200 – 250",
      },
      {
        diameterA: "1 1/2",
        diameterB: "40",
        od: "48.3",
        weight: "3.16",
        wall: "2.77",
        price: "611 – 750",
        pricekg: "205 – 300",
      },
      {
        diameterA: "2",
        diameterB: "50",
        od: "60.03",
        weight: "3.99",
        wall: "2.77",
        price: "797.75 – 810",
        pricekg: "205 – 300",
      },
      {
        diameterA: "2 1/2",
        diameterB: "65",
        od: "73",
        weight: "5.34",
        wall: "3.05",
        price: "1200.5 – 1300",
        pricekg: "205 – 300",
      },
      {
        diameterA: "3",
        diameterB: "80",
        od: "88.9",
        weight: "6.56",
        wall: "3.05",
        price: "1376 – 1566",
        pricekg: "205 – 300",
      },
      {
        diameterA: "4",
        diameterB: "100",
        od: "114.3",
        weight: "8.5",
        wall: "3.05",
        price: "1855 – 2000",
        pricekg: "220 – 300",
      },
    ],

    specializedProducts: [
      "Titanium Welded & ERW Pipes Exporter",
      "Titanium Alloy Grade 2 / Grade 5 Seamless Pipes",
      "ASME SB861 Titanium Cold Drawn Pipes",
      "ASTM B861 Grade 2 / Grade 5 Pipes at Best Price",
      "INOX 3.7035 / 3.7165 Titanium Pipe Exporter",
      "Titanium Alloy Thick Wall Pipes Stockist",
      "Grade 2 / Grade 5 Welded Nicel Alloy Pipe",
      "Titanium Grade 2 / Grade 5 Schedule 80 Pipes",
      "Suppliers of Titanium ERW / EFW Pipes",
      "Titanium Grade 2 / Grade 5 Customized Pipes",
      "Titanium Alloy Pipes Manufacturer in India",
      "Titanium Grade 2 / Grade 5 Hollow Pipes",
      "Ti Alloy Gr. 2 / Gr. 5 Industrial Pipes",
      "Titanium Pipe Cut To Size & Custom Shapes",
      "Gr 2 / Gr 5 Titanium Large Diameter Pipes",
      "Titanium Grade 2 / Grade 5 Welded Pipes",
      "Titanium Alloy Thin Wall Pipe Stockists",
      "ASTM B338 Titanium Grade 2 / 5 Seamless Pipes",
      "Ti Alloy Grade 2 / Grade 5 Pipes Stockist",
      "Titanium Alloy Pipes Supplier in Mumbai",
      "Grade 2 / Grade 5 Titanium Custom Pipes Dealer",
      "Ti Alloy Gr.2 / Gr.5 Pipes Supplier",
    ],

    relatedSearches: [
      "Titanium Pipe Sizes",
      "Titanium Pipe Price Per Kg In India",
      "Titanium Seamless Pipes Supplier In India",
      "Titanium Pipe Exporter",
      "Titanium Pipe Dimensions",
      "Ti Alloy Pipe Suppliers In Gujarat",
      "Titanium Pipe In Pune",
      "Titanium Pipe Weight Calculator",
      "16 Gauge Titanium Pipe",
      "Titanium Pipe Roughness",
      "Titanium Pipe Supplier In India",
      "Ti Alloy Titanium Pipe Price Per Kg",
      "Cost Of Titanium Pipe",
      "Titanium Erw Pipe Supplier",
      "Titanium Pipe Price",
      "Titanium Pipe Specifications Pdf",
      "Ti Alloy Pipe Specifications",
      "Titanium Alloy Pipe Supplier In Mumbai",
      "Titanium Pipe Price List Pdf",
      "Titanium Alloy Pipe Chemical Composition",
      "Titanium Alloy Erw Pipe Supplier",
      "Top 100 Titanium Pipe Dealers In Pune",
      "Titanium Alloy Seamless Pipe Stockist",
      "Titanium Welded Pipe Supplier",
      "Titanium Efw Pipe Supplier",
      "Astm B861 Titanium Alloy Seamless Pipe",
      "Titanium Pipe Pressure Rating",
      "Titanium Pipe Weight Per Meter",
      "Titanium Threaded Pipe",
      "Titanium Pipes Manufacturer In Mumbai",
      "Authenticate Titanium Seamless Pipes Exporter",
      "Titanium Welded Pipe Exporter",
      "Titanium Seamless Pipe Supplier",
      "Titanium Pipe Per Kg",
      "Titanium Pipe Price In India",
      "Price Of Titanium Pipe",
      "Titanium Pipe Price List",
      "Titanium Alloy Pipe Price List",
      "Titanium Pipe Price 20 Feet",
      "3 Inch Titanium Pipe Manufacturers",
      "Titanium Alloy Seamless Pipe Exporter In India",
      "Titanium Alloy Pipe Weight Chart",
      "Titanium Pipe Price List In India",
      "Buy Titanium Pipe Welded",
      "Titanium Pipe Weight Chart",
      "Titanium Pipe Manufacturers In India",
      "Titanium Pipe Catalogue",
      "Asme SB861 Titanium Pipe",
      "Titanium Grade 2 Welded Pipe Supplier",
      "ASTM B861 Grade 2 Seamless Pipe",
      "Titanium Grade 2 Pipe Weight Per Meter",
      "Gr 2 Titanium Alloy Pipe Sizes",
      "Price Of Titanium Pipe Grade 2",
      "Titanium Grade 2 Round Pipe Supplier",
      "3 Inch Grade 2 Titanium Pipe Manufacturers",
      "Titanium Grade 2 Pipe Chemical Composition",
      "Titanium 3.7035 Custom Pipe Suppliers In Gujarat",
      "Titanium Gr. 2 Pipe Weight Chart",
      "Cost Of Grade 2 Titanium Pipe",
      "Ti Alloy Gr 2 Pipe Price List",
      "ASTM B861 Grade 2 Pipe",
      "Grade 2 Alloy Threaded Pipe",
      "Grade 2 Seamless Pipe Stockist",
      "ASTM B861 Titanium Gr 2 Seamless Pipe",
      "Alloy Grade 2 Pipe Price List In India",
      "Titanium Grade 2 Pipe Pressure Rating",
      "Titanium Pipe Grade 2 Price List",
      "Titanium Grade 2 EFW Pipe Supplier",
      "Buy Titanium Pipe Grade 2 Welded Schedule 40",
      "Titanium Grade 2 Exhaust Pipes Supplier In India",
      "Ti Alloy Gr 2 Round Pipe Supplier",
      "Titanium Grade 2 Pipe Schedule",
      "Titanium Grade 2 Custom Pipe",
      "ASME SB338 Grade 2 Alloy Pipe",
      "Titanium Grade 2 Pipe Weight Calculator",
      "Titanium Alloy Gr 2 Welded Pipe Exporter",
      "UNS R50400 Pipe",
      "Titanium Alloy Grade 2 Seamless Pipe Exporter",
      "Titanium Grade 5 Pipe Pressure Rating",
      "Price Of Titanium Pipe Grade 5",
      "Titanium Grade 5 Pipe Dimensions",
      "Titanium 3.7165 Custom Pipe Suppliers In Gujarat",
      "Titanium Gr. 5 Pipe Weight Chart",
      "Titanium Grade 5 Welded Pipe Supplier",
      "Titanium Grade 5 EFW Pipe Supplier",
      "Ti Alloy Gr 5 Pipes Manufacturer In Mumbai",
      "Titanium Grade 5 Seamless Pipes Exporter",
      "ASTM B861 Titanium Gr 5 Seamless Pipe",
      "Grade 5 Alloy Threaded Pipe",
      "Titanium Grade 5 Pipe Exporter",
      "Titanium Gr 5 EFW Pipe Supplier",
      "Titanium Grade 5 Exhaust Pipes Supplier In India",
      "Titanium Alloy Grade 5 Seamless Pipe Supplier",
      "Alloy Grade 5 Pipe Price List In India",
      "16 Gauge Grade 5 Alloy Pipe",
      "Gr. 5 Titanium Pipe Specifications Pdf",
      "Buy Titanium Pipe Grade 5 Welded Schedule 40",
      "Titanium Pipe Grade 5 Price",
      "Titanium Grade 5 EFW large diameter pipes",
      "Gr 5 Titanium Alloy Pipe Sizes",
      "Titanium Grade 5 Pipe Schedule",
      "Titanium Grade 5 Pipe Weight Per Meter",
      "Titanium Pipe Price 50 Feet",
      "Titanium Grade 5 Pipe Supplier In India",
      "Grade 5 Seamless Pipe Stockist",
      "Titanium Grade 5 Round Pipe Supplier",
      "ASTM B861 Alloy Grade 5 Pipes",
      "Titanium Grade 5 Pipe Catalogue",
      "Titanium Alloy Gr 5 Welded Pipe Exporter",
      "Cost Of Grade 5 Titanium Pipe",
      "Titanium Grade 5 Pipe Price In India",
      "UNS N56400 Pipe",
      "Titanium Gr 5 Pipe Roughness",
      "Alloy Gr 5 Pipe Price Per Kg In India",
      "Ti Alloy Gr 5 Round Pipe Supplier",
    ],

    // ===============================
    // OUR PRODUCTS - With proper routes
    // ===============================
    ourProducts: [
      { name: "Coils", slug: "coils" },
      { name: "Pipes", slug: "pipes" },
      { name: "Flutes", slug: "flutes" },
      { name: "Round Bars", slug: "round-bars" },
      { name: "Sheets", slug: "sheets" },
      { name: "Tubes", slug: "tubes" },
      { name: "Wires", slug: "wires" },
      { name: "Industrial Flanges", slug: "industrial-flanges" },
      { name: "Buttweld Fittings", slug: "buttweld-fittings" },
      { name: "Angle & Channels", slug: "angle-channels" },
      { name: "Forged Fittings", slug: "forged-fittings" },
      { name: "Industrial Fasteners", slug: "industrial-fasteners" },
      { name: "Industrial Valves", slug: "industrial-valves" },
      { name: "Flats & Pairs", slug: "flats-pairs" },
      { name: "Industrial Rings", slug: "industrial-rings" },
      { name: "Industrial Circles", slug: "industrial-circles" },
      { name: "Industrial Strips", slug: "industrial-strips" },
    ],

    // ===============================
    // SHOP BY MATERIAL - With proper routes
    // ===============================
    shopByMaterial: [
      { name: "Copper Nickel", slug: "copper-nickel" },
      { name: "Duplex Steel", slug: "duplex-steel" },
      { name: "Hastelloy", slug: "hastelloy" },
      { name: "Incoloy", slug: "incoloy" },
      { name: "Inconel", slug: "inconel" },
      { name: "Monel", slug: "monel" },
      { name: "Nickel Alloy", slug: "nickel-alloy" },
      { name: "Other Metals", slug: "other-metals" },
      { name: "Samico", slug: "samico" },
      { name: "Special Metals", slug: "special-metals" },
      { name: "Stainless Steel", slug: "stainless-steel" },
      { name: "Titanium", slug: "titanium" },
    ],

    countries: countries,
    cities: state,
  };

  // ===============================
  // HELPER COMPONENTS
  // ===============================

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold text-[#0a1a52] mb-6">{children}</h2>
  );

  const Table = ({ headers, rows }) => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const ChipList = ({ items }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200"
        >
          {item}
        </span>
      ))}
    </div>
  );

  // ===============================
  // MAIN COMPONENT
  // ===============================

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* =============================== */}
      {/* HERO BANNER */}
      {/* =============================== */}
      <div
        className="relative h-56 sm:h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a52]/80"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {productData.title}
            </h1>
            <p className="text-lg text-gray-200 mt-2 max-w-4xl">
              {productData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* =============================== */}
      {/* MAIN CONTENT - LAYOUT WITH SIDEBAR */}
      {/* =============================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* =============================== */}
          {/* LEFT COLUMN - PRODUCT DETAILS */}
          {/* =============================== */}
          <div className="lg:col-span-8">
            {/* Product Image */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/3">
                <img
                  src={productImage}
                  alt={productData.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-[#0a1a52] mb-4">
                  {productData.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {productData.technicalOverview.description}
                </p>
              </div>
            </div>

            {/* Technical Overview */}
            <section className="mb-8">
              <SectionTitle>{productData.technicalOverview.title}</SectionTitle>
              <p className="text-gray-700 leading-relaxed">
                {productData.technicalOverview.description}
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-8">
              <SectionTitle>Key Features & Benefits</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {productData.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                  >
                    <span className="text-[#d79b20] text-lg">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Applications</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {productData.applications.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                  >
                    <span className="text-[#d79b20] text-lg">▸</span>
                    <span className="text-gray-700 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>
                Specification of Titanium Grade 2 / Grade 5 Pipes
              </SectionTitle>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <ul className="space-y-2">
                  {Object.entries(productData.specifications).map(
                    ([key, value]) => (
                      <li
                        key={key}
                        className="text-gray-700 flex items-start gap-2 text-sm"
                      >
                        <span className="text-[#d79b20] mt-1">▸</span>
                        <span>
                          <span className="font-semibold capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>{" "}
                          {value}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            {/* Stock Availability with Images */}
            <section className="mb-8">
              <SectionTitle>
                Stock Availability of Titanium Grade 2 / Grade 5 Pipes
              </SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(productData.stockAvailability).map(
                  ([key, stock]) => (
                    <div
                      key={key}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
                    >
                      <img
                        src={stock.image}
                        alt={stock.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-[#0a1a52] mb-2">
                          {stock.title}
                        </h3>
                        <ul className="space-y-1">
                          {stock.items.map((item, index) => (
                            <li
                              key={index}
                              className="text-xs text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-[#d79b20] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Equivalent Grades */}
            <section className="mb-8">
              <SectionTitle>
                Equivalent Grades Titanium Grade 2 / Grade 5 Pipes
              </SectionTitle>
              <Table
                headers={["Standard", "Werkstoff Nr.", "UNS"]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.werkstoff,
                  item.uns,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Titanium Grade 2 / Grade 5 Pipes
              </SectionTitle>
              <Table
                headers={["Grade", "Ti", "C", "Fe", "H", "N", "O", "Al", "V"]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.ti,
                  item.c,
                  item.fe,
                  item.h,
                  item.n,
                  item.o,
                  item.al,
                  item.v,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of Titanium Grade 2 / Grade 5 Piping
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Density",
                  "Melting Point",
                  "Tensile Strength",
                  "Yield Strength (0.2% Offset)",
                  "Elongation",
                ]}
                rows={productData.mechanicalProperties.map((item) => [
                  item.grade,
                  item.density,
                  item.meltingPoint,
                  item.tensileStrength,
                  item.yieldStrength,
                  item.elongation,
                ])}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Titanium Grade 2 & Grade 5 Seamless Pipe Weight Chart
              </SectionTitle>
              <Table
                headers={[
                  "NPS",
                  "OD (in)",
                  "OD (mm)",
                  "Wall (in)",
                  "Wall (mm)",
                  "Sched",
                  "Weight (kg/Mtr)",
                  "Weight (Lb/ft)",
                ]}
                rows={productData.weightChart.map((item) => [
                  item.nps,
                  item.od,
                  item.odmm,
                  item.wall,
                  item.wallmm,
                  item.sched,
                  item.weight,
                  item.lbft,
                ])}
              />
            </section>

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>
                Titanium Grade 2 / Grade 5 Pipe Supply Range
              </SectionTitle>
              <Table
                headers={[
                  "Product Description",
                  "Wall Thickness (mm)",
                  "Outside Diameter (mm)",
                ]}
                rows={productData.supplyRange.map((item) => [
                  item.product,
                  item.wallThk,
                  item.od,
                ])}
              />
            </section>

            {/* Price Range */}
            <section className="mb-8">
              <SectionTitle>
                Titanium Grade 2 / Grade 5 Pipe Price Range
              </SectionTitle>
              <Table
                headers={[
                  "Diameter (in)",
                  "Designation (A)",
                  "OD (mm)",
                  "Weight Kg/Mtr",
                  "Wall Thk (mm)",
                  "Price (INR/MTR)",
                  "Price (INR/KG)",
                ]}
                rows={productData.priceRange.map((item) => [
                  item.diameterA,
                  item.diameterB,
                  item.od,
                  item.weight,
                  item.wall,
                  item.price,
                  item.pricekg,
                ])}
              />
              <p className="text-xs text-gray-500 mt-2">
                *Note: Prices vary depending on specific grade and quantity.
                Contact sales for precise project-based quotes.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Titanium & Titanium Grade 2 / Grade 5 Pipes
              </SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {productData.specializedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 hover:shadow-md transition"
                  >
                    <span className="text-[#d79b20] text-sm">▸</span>
                    <span className="text-gray-700 text-xs">{product}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Searches */}
            <section className="mb-8">
              <SectionTitle>
                Searches Related to Titanium Alloy Pipes (Gr 2 & Gr 5)
              </SectionTitle>
              <ChipList items={productData.relatedSearches} />
            </section>
          </div>

          {/* =============================== */}
          {/* RIGHT COLUMN - SIDEBAR */}
          {/* =============================== */}
          <div className="lg:col-span-4 space-y-6">
            {/* Our Products */}
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
              <div className="border-b border-[#d79b20] bg-[#0a1a52] px-4 py-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  OUR PRODUCTS
                </h2>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {productData.ourProducts.map((product, index) => (
                  <Link
                    key={index}
                    to={`/products/${product.slug}`}
                    className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#0a1a52] hover:text-white"
                  >
                    <span className="text-[#d79b20] text-xs">◉</span>
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Shop By Material */}
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
              <div className="border-b border-[#d79b20] bg-[#0a1a52] px-4 py-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  SHOP BY MATERIAL
                </h2>
              </div>

              <div className="max-h-[300px] overflow-y-auto">
                {productData.shopByMaterial.map((material, index) => (
                  <Link
                    key={index}
                    to={`/materials/${material.slug}`}
                    className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#0a1a52] hover:text-white"
                  >
                    <span className="text-[#d79b20] text-xs">◉</span>
                    {material.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Get A Quote */}
            <div className="bg-[#0a1a52] rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get A Quote
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Email us for a quote or contact us for more information.
              </p>
              <a
                href={`mailto:${contact.email || "info@alloypipe.com"}`}
                className="inline-block bg-[#d79b20] hover:bg-[#c08a1a] text-white font-semibold px-6 py-2.5 rounded-lg transition text-sm"
              >
                Email Us Now
              </a>
            </div>
          </div>
        </div>

        {/* =============================== */}
        {/* COUNTRIES - Full Width Below */}
        {/* =============================== */}
        <section className="mt-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h2 className="text-2xl font-black uppercase leading-tight">
                <span className="text-[#0a1a52]">Countries We </span>
                <span className="text-[#d79b20]">Export Our Products To</span>
              </h2>
              <div className="mt-1 h-[2px] w-32 bg-[#d79b20]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {productData.countries.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d79b20] hover:bg-[#0a1a52] hover:shadow-md cursor-pointer"
                >
                  <span
                    className={`fi fi-${(country.code || country).toLowerCase()} rounded-sm shadow`}
                  ></span>
                  <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-white">
                    {country.name || country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =============================== */}
        {/* CITIES - Full Width Below */}
        {/* =============================== */}
        <section className="mt-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h2 className="text-2xl font-black uppercase leading-tight">
                <span className="text-[#0a1a52]">
                  We Supply Our Products In
                </span>{" "}
                <span className="text-[#d79b20]">The Following Cities</span>
              </h2>
              <div className="mt-1 h-[2px] w-32 bg-[#d79b20]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {productData.cities.map((city, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d79b20] hover:bg-[#0a1a52] hover:shadow-md cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-white">
                    {city.name || city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TitaniumGrade2Grade5Pipes;
