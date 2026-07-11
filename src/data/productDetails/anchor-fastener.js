import productImage from "../../assets/images/productImage/anchor-fastener.webp";
import countries from "../countries";
import state from "../state";
import industriesData from "../industriesData";
import testimonials from "../testimonials";
import dimensions from "../dimensions";
import certificates from "../certificates";
import materials from "../materials";

// ===============================
// ANCHOR FASTENER TYPES DATA
// ===============================

const anchorFastenerTypes = [
  {
    id: 1,
    slug: "wedge-anchors",
    image: productImage,
    title: "Wedge Anchors",
    shortDescription:
      "Heavy-duty Wedge Anchors designed for secure fastening into concrete and masonry, ideal for structural steel, machinery, and industrial installations.",

    fullDescription:
      "Our premium quality Wedge Anchors are engineered for superior performance in concrete and masonry applications. These heavy-duty anchors feature a precision-machined wedge mechanism that expands against the base material for maximum holding strength. Manufactured to international standards, our Wedge Anchors provide reliable, vibration-resistant fastening solutions for structural steel, heavy machinery, and industrial equipment installations. Available in a wide range of materials and sizes to suit your specific requirements.",

    // ===============================
    // TECHNICAL OVERVIEW
    // ===============================

    technicalOverview: {
      title: "Wedge Anchors: Technical Overview",
      description:
        "Wedge anchors are mechanical fasteners designed for heavy-duty applications in concrete and masonry. They feature a precision-machined wedge mechanism that expands against the base material for maximum holding strength. The unique design ensures vibration-resistant performance and reliable load-bearing capacity.",
      keyFeatures: [
        "Heavy-duty construction for maximum strength",
        "Vibration-resistant design for long-term reliability",
        "Precision threading for easy installation",
        "Corrosion-resistant options available",
        "High load capacity for demanding applications",
        "Suitable for both indoor and outdoor use",
      ],
    },

    // ===============================
    // STANDARD AUSTENITIC GRADES
    // ===============================

    standardGrades: [
      {
        grade: "SS 304/304L",
        uns: "S30400/S30403",
        description:
          "The most widely used '18/8' stainless steel. Grade 304L features lower carbon to prevent sensitization during welding. It is the industry standard for food processing, kitchen equipment, and architectural paneling.",
        applications: [
          "Food processing equipment",
          "Kitchen equipment",
          "Architectural paneling",
          "Chemical containers",
          "General construction",
        ],
      },
      {
        grade: "SS 316/316L",
        uns: "S31600/S31603",
        description:
          "Enhanced with Molybdenum, these coils offer superior resistance to chlorides and marine environments. They are the primary choice for pharmaceutical equipment, chemical tankers, and coastal infrastructure.",
        applications: [
          "Pharmaceutical equipment",
          "Chemical tankers",
          "Coastal infrastructure",
          "Marine environments",
          "Medical devices",
        ],
      },
    ],

    // ===============================
    // HIGH-TEMPERATURE GRADES
    // ===============================

    highTemperatureGrades: [
      {
        grade: "SS 310S",
        uns: "S31008",
        description:
          "High-nickel and high-chromium alloy designed for oxidation resistance. Specifically used for continuous service up to 1100°C (2012°F) in furnace parts and heat treatment equipment.",
        applications: [
          "Furnace parts",
          "Heat treatment equipment",
          "High-temperature processing",
          "Thermal processing equipment",
        ],
      },
      {
        grade: "SS 321",
        uns: "S32100",
        description:
          "Titanium-stabilized to prevent intergranular corrosion. Ideal for high-temperature applications in the range of 427°C to 815°C, such as aircraft exhaust stacks and manifold systems.",
        applications: [
          "Aircraft exhaust stacks",
          "Manifold systems",
          "Heat exchangers",
          "High-temperature applications",
        ],
      },
    ],

    // ===============================
    // SPECIALIZED CORROSION GRADES
    // ===============================

    specializedGrades: [
      {
        grade: "SS 904L",
        uns: "N08904",
        description:
          "A non-stabilized high-alloy austenitic steel with copper additions. Offers exceptional resistance to strong reducing acids and is widely used in pulp and paper industries and sulfuric acid plants.",
        applications: [
          "Pulp and paper industries",
          "Sulfuric acid plants",
          "Chemical processing",
          "Seawater applications",
        ],
      },
      {
        grade: "17-4 PH",
        uns: "S17400",
        description:
          "A chromium-copper precipitation-hardening martensitic stainless steel. Provides an outstanding combination of high strength, hardness, and moderate corrosion resistance, essential for aerospace components and pump shafts.",
        applications: [
          "Aerospace components",
          "Pump shafts",
          "Valve parts",
          "High-strength applications",
        ],
      },
    ],

    // ===============================
    // MANUFACTURING STANDARDS
    // ===============================

    manufacturingStandards: {
      title: "Manufacturing and Quality Standards",
      standards: [
        "ASTM F593 - Standard Specification for Stainless Steel Bolts",
        "ASTM A193 - Standard Specification for Alloy-Steel Bolting Materials",
        "ASME SA193 - Similar to ASTM A193 for pressure vessel applications",
        "DIN 931 - Hexagon Head Bolts with Metric Thread",
        "DIN 933 - Hexagon Head Bolts with Full Thread",
        "ISO 4014 - Hexagon Head Bolts with Metric Thread",
        "ISO 4017 - Hexagon Head Screws with Metric Thread",
        "BS 3692 - British Standard for Hexagon Bolts and Screws",
      ],
      qualityAssurance: [
        "ISO 9001:2015 Certified",
        "Third Party Inspection Available",
        "Material Test Certificates (MTC)",
        "EN 10204 3.1 / 3.2 Certificates",
        "PMI Test Reports (Positive Material Identification)",
        "Destructive and Non-Destructive Testing",
        "Chemical Analysis Reports",
        "Mechanical Properties Testing",
      ],
    },

    // ===============================
    // SPECIFICATIONS
    // ===============================

    specifications: {
      standard: "ASTM F593 / ASTM A193 / DIN 931 / ISO 4014",
      sizeRange: "M6 – M36",
      threadTypes: "Metric, UNC, UNF, BSW",
      lengths: "20mm – 200mm (Custom lengths available)",
      surfaceFinish:
        "Plain, Zinc Plated, Hot Dip Galvanized, Black Oxide, PTFE Coated, Dacromet",
      formHardness: "Soft to Spring Hard",
      testCertificate: "MTC EN 10204 3.1 / 3.2 Available",
      materialGrades:
        "SS 304/304L, SS 316/316L, Carbon Steel 4.6/8.8, High Tensile Steel",
    },

    // ===============================
    // STOCK AVAILABILITY
    // ===============================

    stockAvailability: {
      hotRolled: [
        "SS 304/304L Wedge Anchors",
        "SS 316/316L Wedge Anchors",
        "Carbon Steel Grade 4.6 Wedge Anchors",
        "Carbon Steel Grade 8.8 Wedge Anchors",
        "High Tensile Steel Wedge Anchors",
      ],
      coldRolled: [
        "SS 304/316 Cold Rolled Wedge Anchors",
        "Precision Threaded Wedge Anchors",
        "Specialty Finish Wedge Anchors",
        "High Precision Wedge Anchors",
      ],
      slitStrip: [
        "Standard Sizes M6-M36",
        "Custom Lengths Available",
        "Special Thread Configurations",
        "Non-Standard Diameters",
      ],
    },

    // ===============================
    // EQUIVALENT GRADES
    // ===============================

    equivalentGrades: [
      {
        grade: "SS 304 / 304L",
        uns: "S30400 / S30403",
        werkstoffNr: "1.4301 / 1.4307",
        standard: "X5CrNi18-10 / SUS 304L",
      },
      {
        grade: "SS 316 / 316L",
        uns: "S31600 / S31603",
        werkstoffNr: "1.4401 / 1.4404",
        standard: "X5CrNiMo17-12-2 / SUS 316L",
      },
      {
        grade: "SS 310S",
        uns: "S31008",
        werkstoffNr: "1.4845",
        standard: "X8CrNi25-21 / SUS 310S",
      },
      {
        grade: "SS 321",
        uns: "S32100",
        werkstoffNr: "1.4541",
        standard: "X6CrNiTi18-10 / SUS 321",
      },
      {
        grade: "SS 904L",
        uns: "N08904",
        werkstoffNr: "1.4539",
        standard: "X1NiCrMoCu25-20-5",
      },
      {
        grade: "17-4 PH",
        uns: "S17400",
        werkstoffNr: "1.4542",
        standard: "X5CrNiCuNb16-4",
      },
      {
        grade: "253 MA",
        uns: "S30815",
        werkstoffNr: "1.4835",
        standard: "X9CrNiSiNCe21-11-2",
      },
    ],

    // ===============================
    // CHEMICAL COMPOSITION
    // ===============================

    chemicalComposition: [
      {
        grade: "SS 304",
        c: "0.08 max",
        mn: "2.0 max",
        si: "0.75 max",
        cr: "18-20",
        ni: "8-11",
        mo: "—",
        other: "—",
      },
      {
        grade: "SS 304L",
        c: "0.035 max",
        mn: "2.0 max",
        si: "0.75 max",
        cr: "18-20",
        ni: "8-11",
        mo: "—",
        other: "—",
      },
      {
        grade: "SS 316L",
        c: "0.035 max",
        mn: "2.0 max",
        si: "1.0 max",
        cr: "16-18",
        ni: "10-14",
        mo: "2.0-3.0",
        other: "—",
      },
      {
        grade: "SS 310S",
        c: "0.08 max",
        mn: "2.0 max",
        si: "1.5 max",
        cr: "24-26",
        ni: "19-22",
        mo: "0.75 max",
        other: "—",
      },
      {
        grade: "SS 321",
        c: "0.08 max",
        mn: "2.0 max",
        si: "1.0 max",
        cr: "17-19",
        ni: "9-12",
        mo: "—",
        other: "Ti: 5(C+N)-0.70",
      },
      {
        grade: "SS 904L",
        c: "0.02 max",
        mn: "2.0 max",
        si: "1.0 max",
        cr: "19-23",
        ni: "23-28",
        mo: "4.0-5.0",
        other: "Cu: 1.0-2.0",
      },
      {
        grade: "17-4 PH",
        c: "0.07 max",
        mn: "1.0 max",
        si: "1.0 max",
        cr: "15-17.5",
        ni: "3-5",
        mo: "—",
        other: "Cu: 3-5, Nb: 0.15-0.45",
      },
      {
        grade: "253 MA",
        c: "0.05-0.1",
        mn: "0.8 max",
        si: "1.4-2.0",
        cr: "20-22",
        ni: "10-12",
        mo: "—",
        other: "N: 0.14-0.2, Ce: 0.03-0.08",
      },
    ],

    // ===============================
    // MECHANICAL & PHYSICAL PROPERTIES
    // ===============================

    mechanicalProperties: [
      {
        grade: "SS 304 / 316L",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "35% - 40%",
        hardness: "180-190 HB",
      },
      {
        grade: "SS 310S",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "200 HB",
      },
      {
        grade: "SS 904L",
        tensile: "485 MPa",
        yield: "275 MPa",
        elongation: "20%",
        hardness: "180 HB",
      },
      {
        grade: "17-4 PH",
        tensile: "930 MPa (min)",
        yield: "725 MPa (min)",
        elongation: "16%",
        hardness: "320 HB",
      },
      {
        grade: "253 MA",
        tensile: "600 MPa",
        yield: "310 MPa",
        elongation: "40%",
        hardness: "220 HB",
      },
      {
        grade: "Carbon Steel 8.8",
        tensile: "800 MPa",
        yield: "640 MPa",
        elongation: "12%",
        hardness: "280 HB",
      },
    ],

    // ===============================
    // THICKNESS AVAILABILITY
    // ===============================

    thicknessAvailability: {
      grades: [
        "304",
        "304L",
        "308",
        "309",
        "310S",
        "316",
        "316L",
        "317L",
        "321",
        "904L",
      ],
      thicknesses: [
        { mm: "0.4", available: true },
        { mm: "0.5", available: true },
        { mm: "0.8", available: true },
        { mm: "1.0", available: true },
        { mm: "1.2", available: true },
        { mm: "1.6", available: true },
        { mm: "2.0", available: true },
        { mm: "3.0", available: true },
        { mm: "4.0", available: true },
        { mm: "5.0", available: true },
        { mm: "6.0", available: true },
        { mm: "8.0", available: true },
        { mm: "10.0", available: true },
        { mm: "12.0", available: true },
        { mm: "16.0", available: true },
        { mm: "20.0 / 25.0", available: true },
      ],
    },

    // ===============================
    // WEIGHT CHARTS
    // ===============================

    weightCharts: {
      coldRolled: [
        { size: "4000 x 2000 x 2.0", weightKg: "136.0" },
        { size: "4000 x 2000 x 3.0", weightKg: "204.0" },
        { size: "2500 x 1250 x 4.0", weightKg: "106.0" },
        { size: "3000 x 1500 x 4.0", weightKg: "153.0" },
        { size: "4000 x 2000 x 4.0", weightKg: "272.0" },
        { size: "2500 x 1250 x 5.0", weightKg: "133.0" },
        { size: "3000 x 1500 x 5.0", weightKg: "191.0" },
        { size: "4000 x 2000 x 5.0", weightKg: "340.0" },
        { size: "2500 x 1250 x 6.0", weightKg: "159.0" },
        { size: "3000 x 1500 x 6.0", weightKg: "230.0" },
        { size: "4000 x 2000 x 6.0", weightKg: "408.0" },
        { size: "4000 x 2000 x 8.0", weightKg: "544.0" },
        { size: "4000 x 2000 x 10.0", weightKg: "680.0" },
        { size: "4000 x 2000 x 12.0", weightKg: "816.0" },
      ],
      oneDFinish: [
        { size: "2000 x 1000 x 3.0", weightKg: "51.0" },
        { size: "2500 x 1250 x 3.0", weightKg: "79.7" },
        { size: "3000 x 1500 x 3.0", weightKg: "115.0" },
        { size: "2000 x 1000 x 4.0", weightKg: "68.0" },
        { size: "2500 x 1250 x 4.0", weightKg: "106.0" },
        { size: "3000 x 1500 x 4.0", weightKg: "153.0" },
        { size: "2000 x 1000 x 5.0", weightKg: "85.0" },
        { size: "2500 x 1250 x 5.0", weightKg: "133.0" },
        { size: "3000 x 1500 x 5.0", weightKg: "191.0" },
        { size: "4000 x 2000 x 5.0", weightKg: "340.0" },
        { size: "2000 x 1000 x 6.0", weightKg: "102.0" },
        { size: "2500 x 1250 x 6.0", weightKg: "159.0" },
        { size: "3000 x 1500 x 6.0", weightKg: "230.0" },
        { size: "4000 x 2000 x 6.0", weightKg: "408.0" },
        { size: "2500 x 1250 x 8.0", weightKg: "213.0" },
        { size: "3000 x 1500 x 8.0", weightKg: "306.0" },
        { size: "4000 x 2000 x 8.0", weightKg: "544.0" },
        { size: "2500 x 1250 x 10.0", weightKg: "266.0" },
        { size: "3000 x 1500 x 10.0", weightKg: "383.0" },
        { size: "4000 x 2000 x 10.0", weightKg: "680.0" },
        { size: "2500 x 1250 x 12.0", weightKg: "319.0" },
        { size: "3000 x 1500 x 12.0", weightKg: "459.0" },
        { size: "4000 x 2000 x 12.0", weightKg: "816.0" },
      ],
    },

    // ===============================
    // GAUGE CHARTS
    // ===============================

    gaugeCharts: {
      standard: [
        { gauge: "8", inches: ".17187", mm: "4.365" },
        { gauge: "10", inches: ".14062", mm: "3.571" },
        { gauge: "12", inches: ".10937", mm: "2.778" },
        { gauge: "14", inches: ".07812", mm: "1.984" },
        { gauge: "16", inches: ".0625", mm: "1.587" },
        { gauge: "18", inches: ".050", mm: "1.270" },
        { gauge: "20", inches: ".0375", mm: ".9525" },
        { gauge: "22", inches: ".03125", mm: ".7937" },
        { gauge: "24", inches: ".025", mm: ".635" },
        { gauge: "26", inches: ".01875", mm: ".4762" },
        { gauge: "28", inches: ".01562", mm: ".3963" },
        { gauge: "30", inches: ".0125", mm: ".3175" },
      ],
    },

    // ===============================
    // THICKNESS TOLERANCE
    // ===============================

    thicknessTolerance: [
      {
        thickness: "0.017 – 0.030 (0.43 – 0.76)",
        widthUpTo36: "0.0015 (0.038)",
        widthUpTo48: "0.002 (0.051)",
      },
      {
        thickness: "0.031 – 0.041 (0.79 – 1.04)",
        widthUpTo36: "0.002 (0.051)",
        widthUpTo48: "0.003 (0.076)",
      },
      {
        thickness: "0.042 – 0.059 (1.1 – 1.5)",
        widthUpTo36: "0.003 (0.076)",
        widthUpTo48: "0.004 (0.10)",
      },
      {
        thickness: "0.060 – 0.073 (1.5 – 1.9)",
        widthUpTo36: "0.003 (0.076)",
        widthUpTo48: "0.0045 (0.11)",
      },
      {
        thickness: "0.085 – 0.099 (2.2 – 2.5)",
        widthUpTo36: "0.004 (0.10)",
        widthUpTo48: "0.006 (0.15)",
      },
      {
        thickness: "0.116 – 0.131 (2.9 – 3.3)",
        widthUpTo36: "0.005 (0.13)",
        widthUpTo48: "0.0075 (0.19)",
      },
      {
        thickness: "0.147 – 0.187 (3.7 – 4.7)",
        widthUpTo36: "0.007 (0.18)",
        widthUpTo48: "0.0105 (0.2)",
      },
    ],

    // ===============================
    // SPECIALIZED PRODUCTS
    // ===============================

    specializedProducts: [
      "SS 304 / 304L General Purpose Industrial Wedge Anchors",
      "SS 316 / 316L Marine & Chemical Grade Wedge Anchors",
      "SS 310S High-Temperature Heat Resistant Wedge Anchors",
      "SS 17-4 PH Precipitation Hardened Wedge Anchors",
      "SS 904L / 317L Severe Corrosion Resistant Wedge Anchors",
      "Carbon Steel Heavy Duty Wedge Anchors",
      "High Tensile Grade 8.8 / 10.9 Wedge Anchors",
      "Hot Dip Galvanized Wedge Anchors",
      "Zinc Plated Wedge Anchors",
      "PTFE Coated Wedge Anchors",
      "Stainless Steel Wedge Anchor Manufacturer & Stockist in Mumbai, India",
      "Precision Threaded Wedge Anchors",
      "Heavy Duty Structural Wedge Anchors",
      "Custom Length Wedge Anchors",
      "Special Thread Configuration Wedge Anchors",
    ],

    // ===============================
    // RELATED SEARCHES
    // ===============================

    relatedSearches: [
      "Wedge Anchor Size Chart",
      "Wedge Anchor Installation Guide",
      "Wedge Anchor Load Capacity",
      "Wedge Anchor Price List",
      "Wedge Anchor Manufacturer in Mumbai",
      "Wedge Anchor Supplier in India",
      "Stainless Steel Wedge Anchor",
      "Carbon Steel Wedge Anchor",
      "Wedge Anchor for Concrete",
      "Wedge Anchor ASTM F593",
      "Wedge Anchor DIN 931",
      "Heavy Duty Wedge Anchor",
      "Wedge Anchor Bolt",
      "Wedge Anchor Fastener",
      "Industrial Wedge Anchor",
      "Wedge Anchor Mechanical Properties",
      "Wedge Anchor Chemical Composition",
      "Wedge Anchor Equivalent Grades",
      "Wedge Anchor Weight Chart",
      "Wedge Anchor Thickness Tolerance",
    ],

    // ===============================
    // FEATURES
    // ===============================

    features: [
      "High holding strength in concrete",
      "Vibration-resistant design",
      "Precision threaded for easy installation",
      "Available in multiple materials",
      "Corrosion-resistant options",
      "Suitable for heavy loads",
      "Quick and easy installation",
      "Reliable performance in all weather conditions",
      "Excellent load-bearing capacity",
      "Durable and long-lasting",
    ],

    benefits: [
      "Superior load capacity",
      "Quick installation saves time",
      "Long service life",
      "Minimal maintenance required",
      "Cost-effective fastening solution",
      "Versatile application range",
      "Reliable performance",
      "Available in multiple finishes",
    ],

    // ===============================
    // SPECIFICATIONS (Array format for backward compatibility)
    // ===============================

    specificationsArray: [
      "ASTM F593",
      "ASTM A193",
      "DIN 931",
      "DIN 933",
      "ISO 4014",
      "BS 3692",
    ],

    sizes: ["M6", "M8", "M10", "M12", "M16", "M20", "M24", "M30", "M36"],

    materialGrades: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel Grade 4.6",
      "Carbon Steel Grade 8.8",
      "High Tensile Steel",
      "Alloy Steel",
    ],

    finishes: [
      "Plain",
      "Zinc Plated",
      "Hot Dip Galvanized",
      "Black Oxide",
      "PTFE Coated",
      "Dacromet Coated",
    ],

    applications: [
      "Structural steel connections",
      "Heavy machinery installation",
      "Industrial equipment mounting",
      "Construction projects",
      "Bridge construction",
      "Building infrastructure",
      "Concrete structures",
      "Fencing and railing systems",
    ],

    industries: industriesData,

    installationDetails: {
      drillSize: "Slightly larger than anchor diameter",
      holeDepth: "Greater than anchor length + 10mm",
      minBaseMaterialThickness: "2 x anchor diameter",
      edgeDistance: "Minimum 5 x anchor diameter",
      spacing: "Minimum 10 x anchor diameter",
    },

    faqs: [
      {
        question: "What sizes of Wedge Anchors are available?",
        answer:
          "We supply Wedge Anchors in sizes from M6 to M36. Custom sizes can also be manufactured upon request.",
      },
      {
        question:
          "Which material grades are recommended for outdoor applications?",
        answer:
          "For outdoor applications, we recommend Stainless Steel 316 or Hot Dip Galvanized Carbon Steel for superior corrosion resistance.",
      },
      {
        question: "What is the minimum edge distance for Wedge Anchors?",
        answer:
          "The recommended minimum edge distance is 5 times the anchor diameter to ensure maximum holding strength.",
      },
      {
        question: "What is the load capacity of Wedge Anchors?",
        answer:
          "Load capacity varies based on size, grade, and concrete strength. Please consult our technical team for specific load ratings.",
      },
      {
        question: "Do you provide installation guidance?",
        answer:
          "Yes, we provide comprehensive installation guidelines and technical support for all our Wedge Anchors.",
      },
    ],

    countries: countries,
    cities: state,
  },

  // ... REPEAT FOR OTHER TYPES (sleeve-anchors, drop-in-anchors, etc.)
  // You can copy the above structure for other types
];

// ===============================
// MAIN ANCHOR FASTENER DATA
// ===============================

const anchorFastener = {
  // ===============================
  // BASIC INFO
  // ===============================

  slug: "anchor-fastener",

  title: "Anchor Fastener",

  category: "Industrial Fasteners",

  image: productImage,

  bannerImage: productImage,

  // ===============================
  // SEO
  // ===============================

  seoTitle:
    "Industrial Stainless Steel Anchor Fastener Manufacturer, Supplier & Exporter",

  seoDescription:
    "Jindutt Metal & Alloy Pvt. Ltd. is one of India's leading manufacturers and exporters of Stainless Steel, Carbon Steel and Alloy Steel Anchor Fasteners.",

  // ===============================
  // DESCRIPTION
  // ===============================

  description:
    "Jindutt Metal & Alloy Pvt. Ltd. manufactures premium quality Industrial Anchor Fasteners for heavy-duty structural, industrial and construction applications. Our Anchor Fasteners are manufactured according to international standards to provide superior holding strength, corrosion resistance and long service life. We supply Stainless Steel, Carbon Steel and Alloy Steel Anchor Fasteners worldwide with complete quality assurance.",

  // ===============================
  // PRODUCT FEATURES
  // ===============================

  features: [
    "Excellent Corrosion Resistance",
    "High Tensile Strength",
    "Heavy Duty Construction",
    "Precision Threading",
    "Long Service Life",
    "Rust Resistant",
    "Easy Installation",
    "Excellent Load Bearing Capacity",
    "Dimensionally Accurate",
    "Third Party Inspection Available",
  ],

  // ===============================
  // BENEFITS
  // ===============================

  benefits: [
    "Easy Installation",
    "High Holding Power",
    "Low Maintenance",
    "Long Operational Life",
    "Cost Effective",
    "Suitable for Heavy Load Applications",
  ],

  // ===============================
  // TYPES
  // ===============================

  types: [
    "Mechanical Anchor Fastener",
    "Sleeve Anchor",
    "Wedge Anchor",
    "Drop In Anchor",
    "Chemical Anchor",
    "Expansion Anchor",
    "Shield Anchor",
    "Concrete Anchor",
    "Through Bolt Anchor",
    "Stud Anchor",
  ],

  // ===============================
  // MATERIAL GRADES
  // ===============================

  grades: [
    "SS 304",
    "SS 304L",
    "SS 316",
    "SS 316L",
    "Carbon Steel",
    "High Tensile Steel",
    "Alloy Steel",
    "Duplex Steel",
    "Super Duplex Steel",
    "Inconel",
    "Monel",
  ],

  // ===============================
  // STANDARDS
  // ===============================

  specifications: [
    "ASTM F593",
    "ASTM A193",
    "DIN 931",
    "DIN 933",
    "ISO 4014",
    "ISO 4017",
    "BS",
    "IS",
  ],

  // ===============================
  // SIZE
  // ===============================

  sizes: ["M6", "M8", "M10", "M12", "M16", "M20", "M24", "M30", "M36"],

  // ===============================
  // FINISH
  // ===============================

  finishes: [
    "Plain",
    "Zinc Plated",
    "Hot Dip Galvanized",
    "Black Oxide",
    "PTFE Coated",
  ],

  // ===============================
  // APPLICATIONS
  // ===============================

  applications: [
    "Construction Industry",
    "Oil & Gas",
    "Power Plants",
    "Petrochemical Plants",
    "Marine Industry",
    "Steel Plants",
    "Infrastructure Projects",
    "Bridges",
    "Railways",
    "Industrial Machinery",
    "Chemical Plants",
    "Food Processing",
  ],

  // ===============================
  // INDUSTRIES
  // ===============================

  industries: [
    "Construction",
    "Oil & Gas",
    "Power Generation",
    "Chemical Industry",
    "Marine",
    "Infrastructure",
    "Mining",
    "Steel Industry",
    "Cement Plants",
  ],

  // ===============================
  // EXPORT COUNTRIES
  // ===============================

  countries: [
    "India",
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Kuwait",
    "USA",
    "Canada",
    "Germany",
    "France",
    "Australia",
    "Singapore",
    "South Africa",
  ],

  // ===============================
  // MAJOR CITIES
  // ===============================

  cities: [
    "Mumbai",
    "Delhi",
    "Pune",
    "Ahmedabad",
    "Chennai",
    "Hyderabad",
    "Bangalore",
    "Dubai",
    "Doha",
    "Riyadh",
    "Abu Dhabi",
  ],

  // ===============================
  // DOCUMENTS
  // ===============================

  documents: [
    "Material Test Certificate",
    "Third Party Inspection",
    "EN 10204 3.1 Certificate",
    "Mill Test Certificate",
    "PMI Test Report",
    "Product Catalogue",
  ],

  // ===============================
  // FAQ
  // ===============================

  faqs: [
    {
      question: "Which grades of Anchor Fasteners do you supply?",
      answer:
        "We supply Anchor Fasteners in Stainless Steel, Carbon Steel, Alloy Steel, Duplex Steel and many other grades.",
    },
    {
      question: "Do you manufacture custom sizes?",
      answer:
        "Yes. We manufacture Anchor Fasteners according to customer drawings and specifications.",
    },
    {
      question: "Do you export worldwide?",
      answer:
        "Yes, Jindutt Metal & Alloy Pvt. Ltd. exports Industrial Anchor Fasteners to more than 50 countries worldwide.",
    },
  ],

  // ===============================
  // CONTACT
  // ===============================

  contact: {
    whatsapp: "910000000000",
    phone: "+91 00000 00000",
    email: "sales@jinduttmetalalloy.com",
  },

  // ===============================
  // RELATED PRODUCTS
  // ===============================

  relatedProducts: [
    "fasteners",
    "forged-fittings",
    "flanges",
    "pipes",
    "buttweld-fittings",
  ],

  // ===============================
  // ANCHOR FASTENER TYPES
  // ===============================

  typesData: anchorFastenerTypes,
};

// ===============================
// HELPER FUNCTIONS
// ===============================

export const getAllAnchorFastenerTypes = () => {
  return anchorFastenerTypes;
};

export const getAnchorFastenerTypeBySlug = (slug) => {
  return anchorFastenerTypes.find((item) => item.slug === slug) || null;
};

export const getAnchorFastenerList = () => {
  return anchorFastenerTypes.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    image: item.image,
    shortDescription: item.shortDescription,
  }));
};

export const getMechanicalPropertiesForType = (slug) => {
  const fastener = getAnchorFastenerTypeBySlug(slug);
  return fastener ? fastener.mechanicalProperties : [];
};

// ===============================
// DEFAULT EXPORT
// ===============================

export default anchorFastener;
