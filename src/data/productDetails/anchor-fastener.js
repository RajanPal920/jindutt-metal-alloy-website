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

    features: [
      "High holding strength in concrete",
      "Vibration-resistant design",
      "Precision threaded for easy installation",
      "Available in multiple materials",
      "Corrosion-resistant options",
      "Suitable for heavy loads",
      "Quick and easy installation",
      "Reliable performance in all weather conditions",
    ],

    benefits: [
      "Superior load capacity",
      "Quick installation saves time",
      "Long service life",
      "Minimal maintenance required",
      "Cost-effective fastening solution",
      "Versatile application range",
    ],

    mechanicalProperties: [
      {
        grade: "SS 304",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "180 HB",
      },
      {
        grade: "SS 316",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "190 HB",
      },
      {
        grade: "Carbon Steel 4.6",
        tensile: "400 MPa",
        yield: "240 MPa",
        elongation: "22%",
        hardness: "140 HB",
      },
      {
        grade: "Carbon Steel 8.8",
        tensile: "800 MPa",
        yield: "640 MPa",
        elongation: "12%",
        hardness: "280 HB",
      },
    ],

    specifications: [
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
    ],

    countries: countries,
    cities: state,
  },

  {
    id: 2,
    slug: "sleeve-anchors",
    image: productImage,
    title: "Sleeve Anchors",
    shortDescription:
      "Premium Sleeve Anchors suitable for fastening into concrete, brick, and block, offering reliable performance for construction and engineering projects.",

    fullDescription:
      "Our premium Sleeve Anchors are versatile fastening solutions designed for reliable performance in concrete, brick, and block applications. Featuring a precision-designed sleeve that expands evenly for maximum holding strength, these anchors are ideal for a wide range of construction and engineering applications. Manufactured to international standards, our Sleeve Anchors provide consistent, dependable performance with easy installation.",

    features: [
      "Versatile applications in concrete, brick, and block",
      "Even expansion for secure holding",
      "Easy to install with standard tools",
      "Available in multiple materials",
      "Corrosion-resistant options",
      "Reliable performance in various substrates",
      "Suitable for both light and heavy-duty applications",
    ],

    benefits: [
      "Versatile fastening solution",
      "Quick and easy installation",
      "Consistent performance",
      "Long service life",
      "Cost-effective",
      "Suitable for various base materials",
    ],

    mechanicalProperties: [
      {
        grade: "SS 304",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "180 HB",
      },
      {
        grade: "SS 316",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "190 HB",
      },
      {
        grade: "Carbon Steel 4.6",
        tensile: "400 MPa",
        yield: "240 MPa",
        elongation: "22%",
        hardness: "140 HB",
      },
      {
        grade: "Carbon Steel 8.8",
        tensile: "800 MPa",
        yield: "640 MPa",
        elongation: "12%",
        hardness: "280 HB",
      },
    ],

    specifications: [
      "ASTM F593",
      "ASTM A193",
      "DIN 931",
      "DIN 933",
      "ISO 4014",
      "BS 3692",
    ],

    sizes: ["M6", "M8", "M10", "M12", "M16", "M20", "M24"],

    materialGrades: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel Grade 4.6",
      "Carbon Steel Grade 8.8",
      "Zinc Plated Carbon Steel",
    ],

    finishes: [
      "Plain",
      "Zinc Plated",
      "Hot Dip Galvanized",
      "Black Oxide",
      "Yellow Passivated",
    ],

    applications: [
      "Construction projects",
      "Building infrastructure",
      "Brick and block structures",
      "Concrete installations",
      "Masonry applications",
      "Light to heavy-duty mounting",
      "Fencing and railing",
      "Equipment installation",
    ],

    industries: industriesData,

    installationDetails: {
      drillSize: "Anchor diameter + 0.5mm",
      holeDepth: "Anchor length + 5mm",
      minBaseMaterialThickness: "1.5 x anchor diameter",
      edgeDistance: "Minimum 4 x anchor diameter",
      spacing: "Minimum 8 x anchor diameter",
    },

    faqs: [
      {
        question: "Can Sleeve Anchors be used in brick applications?",
        answer:
          "Yes, Sleeve Anchors are specifically designed for use in concrete, brick, and block applications.",
      },
      {
        question: "What is the recommended hole size for Sleeve Anchors?",
        answer:
          "The recommended drill size is the anchor diameter + 0.5mm for optimal performance.",
      },
      {
        question: "Are Sleeve Anchors suitable for outdoor use?",
        answer:
          "Yes, when specified with corrosion-resistant materials like Stainless Steel 316 or Hot Dip Galvanized finish.",
      },
    ],

    countries: countries,
    cities: state,
  },

  {
    id: 3,
    slug: "drop-in-anchors",
    image: productImage,
    title: "Drop-In Anchors",
    shortDescription:
      "High-strength Drop-In Anchors manufactured for flush mounting applications in concrete, providing secure internal threaded fastening.",

    fullDescription:
      "Our high-strength Drop-In Anchors are specifically designed for flush mounting applications in concrete. These anchors feature internal threading that provides secure fastening for bolts and threaded rods. The unique design allows for installation flush with the surface, making them ideal for applications where a flat surface is required. Manufactured to precise specifications, our Drop-In Anchors deliver reliable performance with excellent load-bearing capacity.",

    features: [
      "Flush mounting application",
      "Internal threaded design",
      "Suitable for concrete",
      "Hidden fixing solution",
      "High load capacity",
      "Available in multiple materials",
      "Quick and easy installation",
    ],

    benefits: [
      "Aesthetic flush finish",
      "Secure internal threading",
      "Excellent load capacity",
      "Maintains surface flatness",
      "Versatile applications",
      "Long service life",
    ],

    mechanicalProperties: [
      {
        grade: "SS 304",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "180 HB",
      },
      {
        grade: "SS 316",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "190 HB",
      },
      {
        grade: "Carbon Steel 8.8",
        tensile: "800 MPa",
        yield: "640 MPa",
        elongation: "12%",
        hardness: "280 HB",
      },
    ],

    specifications: ["ASTM F593", "ASTM A193", "DIN 931", "ISO 4014"],

    sizes: ["M6", "M8", "M10", "M12", "M16", "M20"],

    materialGrades: ["SS 304/304L", "SS 316/316L", "Carbon Steel Grade 8.8"],

    finishes: ["Plain", "Zinc Plated", "Hot Dip Galvanized", "Black Oxide"],

    applications: [
      "Flush mounting applications",
      "Concrete structures",
      "Floor installations",
      "Wall mounting",
      "Ceiling fixings",
      "Equipment anchoring",
      "Temporary and permanent fixings",
    ],

    industries: industriesData,

    installationDetails: {
      drillSize: "Anchor diameter + 0.5mm",
      holeDepth: "Anchor length + 10mm",
      settingTool: "Required for proper installation",
      minBaseMaterialThickness: "2 x anchor diameter",
    },

    faqs: [
      {
        question: "What makes Drop-In Anchors different from other anchors?",
        answer:
          "Drop-In Anchors are designed for flush mounting with internal threading, making them ideal for applications where surface flatness is required.",
      },
      {
        question: "Can Drop-In Anchors be removed?",
        answer:
          "Drop-In Anchors are permanent fixings and are not designed to be removed once installed.",
      },
    ],

    countries: countries,
    cities: state,
  },

  {
    id: 4,
    slug: "shield-anchors",
    image: productImage,
    title: "Shield Anchors",
    shortDescription:
      "Durable Shield Anchors engineered for medium to heavy-duty fixing applications in brickwork, stone, and concrete structures.",

    fullDescription:
      "Our durable Shield Anchors are engineered for reliable performance in medium to heavy-duty fixing applications. Designed for use in brickwork, stone, and concrete structures, these anchors feature a specialized shield design that expands to provide secure holding in various base materials. Manufactured to high standards, our Shield Anchors deliver consistent performance with excellent load-bearing capacity.",

    features: [
      "Designed for brickwork and stone",
      "Specialized shield design",
      "Reliable holding strength",
      "Suitable for various base materials",
      "Corrosion-resistant options",
      "Easy installation",
      "Cost-effective solution",
    ],

    benefits: [
      "Versatile application range",
      "Reliable performance in masonry",
      "Good load capacity",
      "Long service life",
      "Economic fastening solution",
    ],

    mechanicalProperties: [
      {
        grade: "SS 304",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "180 HB",
      },
      {
        grade: "SS 316",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "190 HB",
      },
      {
        grade: "Carbon Steel",
        tensile: "400 MPa",
        yield: "240 MPa",
        elongation: "22%",
        hardness: "140 HB",
      },
    ],

    specifications: ["ASTM F593", "DIN 931", "BS 3692"],

    sizes: ["M6", "M8", "M10", "M12", "M16", "M20"],

    materialGrades: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel",
      "Zinc Plated Steel",
    ],

    finishes: ["Plain", "Zinc Plated", "Hot Dip Galvanized"],

    applications: [
      "Brickwork fixings",
      "Stone structures",
      "Concrete applications",
      "Masonry installations",
      "Heavy-duty fixing",
      "Industrial applications",
    ],

    industries: industriesData,

    faqs: [
      {
        question: "Are Shield Anchors suitable for brickwork?",
        answer:
          "Yes, Shield Anchors are specifically designed for reliable performance in brickwork applications.",
      },
    ],

    countries: countries,
    cities: state,
  },

  {
    id: 5,
    slug: "chemical-injection-anchors",
    image: productImage,
    title: "Chemical Injection Anchors",
    shortDescription:
      "Chemical Injection Anchors provide superior load-bearing performance using high-strength resin systems for cracked and non-cracked concrete.",

    fullDescription:
      "Our Chemical Injection Anchors represent the latest technology in anchoring systems, utilizing high-strength resin systems for superior load-bearing performance in both cracked and non-cracked concrete. These anchors offer exceptional holding strength, making them ideal for critical applications where conventional mechanical anchors may not suffice. The chemical bonding process provides outstanding performance in various conditions including wet concrete, high temperatures, and seismic zones.",

    features: [
      "Superior load-bearing performance",
      "Suitable for cracked and non-cracked concrete",
      "Chemical bonding for maximum strength",
      "Works in wet concrete conditions",
      "Temperature-resistant",
      "Seismic zone approved",
      "Vibration-resistant",
      "Quick curing options available",
    ],

    benefits: [
      "Highest load capacity",
      "Works in difficult conditions",
      "No expansion stress on substrate",
      "Suitable for edge and close-spacing applications",
      "Long-term reliability",
      "Resistant to chemical attack",
    ],

    mechanicalProperties: [
      {
        grade: "Resin System",
        tensile: "Up to 120 MPa (bond strength)",
        yield: "N/A",
        elongation: "N/A",
        hardness: "N/A",
      },
    ],

    specifications: [
      "ETA Approved",
      "ICC-ES Approved",
      "DIN Standards",
      "ASTM Standards",
    ],

    sizes: ["M8", "M10", "M12", "M16", "M20", "M24", "M30"],

    materialGrades: [
      "Stainless Steel",
      "Carbon Steel",
      "Hot Dip Galvanized",
      "Zinc Plated",
    ],

    resinTypes: [
      "Epoxy-based",
      "Polyester-based",
      "Vinyl Ester",
      "Hybrid Systems",
    ],

    finishes: ["Plain", "Zinc Plated", "Hot Dip Galvanized"],

    applications: [
      "Critical infrastructure",
      "Seismic zones",
      "Nuclear facilities",
      "Chemical plants",
      "Bridges and tunnels",
      "High-rise buildings",
      "Heavy machinery installation",
      "Wind turbine foundations",
    ],

    industries: industriesData,

    installationDetails: {
      temperatureRange: "-10°C to 50°C",
      curingTime: "10 minutes to 48 hours (depending on system)",
      holeCleaning: "Required (brushing and blowing)",
      edgeDistance: "Minimum 3 x anchor diameter",
      spacing: "Minimum 5 x anchor diameter",
    },

    faqs: [
      {
        question: "What is the curing time for Chemical Injection Anchors?",
        answer:
          "Curing times range from 10 minutes to 48 hours depending on the resin system and ambient temperature conditions.",
      },
      {
        question: "Are Chemical Injection Anchors suitable for wet concrete?",
        answer:
          "Yes, special resin systems are available for installation in water-filled holes and wet concrete conditions.",
      },
      {
        question: "What is the maximum load capacity?",
        answer:
          "Load capacity varies based on anchor size, base material, and resin system. Please consult our technical team for specific requirements.",
      },
      {
        question: "Are Chemical Injection Anchors suitable for seismic zones?",
        answer:
          "Yes, our Chemical Injection Anchors are approved for use in seismic zones and meet international seismic standards.",
      },
    ],

    countries: countries,
    cities: state,
  },

  {
    id: 6,
    slug: "toggle-bolts",
    image: productImage,
    title: "Toggle Bolts",
    shortDescription:
      "Industrial Toggle Bolts designed for secure fixing into hollow walls, plasterboards, ceilings, and lightweight partition systems.",

    fullDescription:
      "Our industrial Toggle Bolts are specifically designed for secure fixing in hollow walls, plasterboards, ceilings, and lightweight partition systems. The unique toggle mechanism provides excellent load distribution and holding strength in hollow cavity applications. Manufactured to high standards, our Toggle Bolts offer reliable performance in a wide range of applications where conventional anchors cannot be used.",

    features: [
      "Designed for hollow walls",
      "Secure fixing in cavities",
      "Excellent load distribution",
      "Suitable for plasterboards",
      "Ideal for ceilings",
      "Easy installation",
      "Available in various sizes",
      "Corrosion-resistant options",
    ],

    benefits: [
      "Excellent holding in hollow cavities",
      "Versatile application range",
      "Easy to install with standard tools",
      "Cost-effective solution",
      "Long service life",
      "Suitable for lightweight partitions",
    ],

    mechanicalProperties: [
      {
        grade: "SS 304",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "180 HB",
      },
      {
        grade: "SS 316",
        tensile: "515 MPa",
        yield: "205 MPa",
        elongation: "40%",
        hardness: "190 HB",
      },
      {
        grade: "Carbon Steel",
        tensile: "400 MPa",
        yield: "240 MPa",
        elongation: "22%",
        hardness: "140 HB",
      },
    ],

    specifications: ["ASTM F593", "DIN Standards", "ISO Standards"],

    sizes: ["M4", "M5", "M6", "M8", "M10", "M12"],

    materialGrades: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel",
      "Zinc Plated Steel",
    ],

    finishes: ["Plain", "Zinc Plated", "Hot Dip Galvanized"],

    applications: [
      "Hollow wall fixings",
      "Plasterboard installations",
      "Ceiling applications",
      "Lightweight partitions",
      "Drywall construction",
      "Cavity wall installations",
      "Suspended ceilings",
      "Equipment mounting",
    ],

    industries: industriesData,

    installationDetails: {
      holeSize: "12-15mm depending on toggle size",
      minCavityDepth: "Required depth for toggle to open",
      loadCapacity: "Varies with toggle size and substrate",
    },

    faqs: [
      {
        question: "What is the maximum load capacity of Toggle Bolts?",
        answer:
          "Load capacity depends on the toggle size and the substrate material. Please consult our technical team for specific load ratings.",
      },
      {
        question: "Can Toggle Bolts be used in ceilings?",
        answer:
          "Yes, Toggle Bolts are excellent for ceiling applications and can support significant loads when properly installed.",
      },
    ],

    countries: countries,
    cities: state,
  },
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
