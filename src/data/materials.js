import coilImg from "../assets/images/productImage/coil.webp";
import plateImg from "../assets/images/productImage/plates.webp";
import tubeImg from "../assets/images/productImage/tubes.webp";
import pipeImg from "../assets/images/productImage/pipes.webp";
import roundBarImg from "../assets/images/productImage/rod.webp";
import sheetImg from "../assets/images/productImage/sheets.webp";
import wireImg from "../assets/images/productImage/wires.webp";
import flangeImg from "../assets/images/productImage/Flanges.webp";
import valveImg from "../assets/images/productImage/valves.webp";
import ringImg from "../assets/images/productImage/rings.webp";
import circleImg from "../assets/images/productImage/circles.webp";
import stripImg from "../assets/images/productImage/strips.webp";

const buildItems = (image, items) => items.map((item) => ({ ...item, image }));

const materials = [
  {
    name: "Stainless Steel",
    slug: "stainless-steel",
    image: coilImg,
    description:
      "Corrosion-resistant austenitic, ferritic, and martensitic grades for general industrial, food, and architectural use.",
    overview:
      "A versatile range of stainless grades suited to food processing, architecture, and general engineering.",
    highlight: [
      "Excellent corrosion resistance",
      "Clean finishing",
      "High weldability",
    ],
    items: buildItems(coilImg, [
      {
        title: "304 / 304L Stainless Steel",
        slug: "304-304l-stainless-steel",
        shortDescription:
          "General-purpose stainless steel for structural and sanitary applications.",
        description:
          "Used widely for piping, tanks, and architectural trim where corrosion resistance and clean appearance matter.",
        properties: [
          "Good formability",
          "Superior corrosion resistance",
          "Easy fabrication",
        ],
        applications: [
          "Food processing",
          "Architectural trim",
          "General fabrication",
        ],
      },
      {
        title: "316 / 316L Stainless Steel",
        slug: "316-316l-stainless-steel",
        shortDescription:
          "Enhanced molybdenum-bearing grade for marine and chemical environments.",
        description:
          "Preferred for marine components, pharmaceutical equipment, and chloride-exposed environments.",
        properties: [
          "Improved chloride resistance",
          "Excellent hygiene",
          "High durability",
        ],
        applications: [
          "Marine hardware",
          "Pharma systems",
          "Chemical processing",
        ],
      },
    ]),
  },
  {
    name: "Duplex Steel",
    slug: "duplex-steel",
    image: plateImg,
    description:
      "High-strength duplex and super duplex grades combining austenitic and ferritic properties for demanding environments.",
    overview:
      "Balanced strength and corrosion resistance for offshore and process industry use.",
    highlight: [
      "Double strength of austenitic grades",
      "Excellent pitting resistance",
      "Good fatigue performance",
    ],
    items: buildItems(plateImg, [
      {
        title: "2205 Duplex Stainless",
        slug: "2205-duplex-stainless",
        shortDescription:
          "A workhorse alloy for pressure vessels and offshore piping.",
        description:
          "Combines high strength with strong resistance to chloride stress corrosion cracking.",
        properties: [
          "High mechanical strength",
          "Excellent chloride resistance",
          "Good weldability",
        ],
        applications: [
          "Offshore piping",
          "Heat exchangers",
          "Pressure vessels",
        ],
      },
      {
        title: "2507 Super Duplex",
        slug: "2507-super-duplex",
        shortDescription:
          "Premium grade for highly corrosive service and severe conditions.",
        description:
          "Selected for aggressive seawater and chemical service where long-term reliability is critical.",
        properties: [
          "Excellent pitting resistance",
          "High toughness",
          "Superior strength",
        ],
        applications: ["Desalination", "Marine platforms", "Chemical plants"],
      },
    ]),
  },
  {
    name: "Nickel Alloy",
    slug: "nickel-alloy",
    image: tubeImg,
    description:
      "High-performance nickel-based alloys for extreme temperature and corrosive service.",
    overview:
      "Engineered for thermal stability and resistance to harsh reducing and oxidizing chemistries.",
    highlight: [
      "High temperature strength",
      "Excellent chemical resistance",
      "Stable under thermal cycling",
    ],
    items: buildItems(tubeImg, [
      {
        title: "Nickel 200 / 201",
        slug: "nickel-200-201",
        shortDescription:
          "Commercially pure nickel grades for corrosion resistance and electrical use.",
        description:
          "Used in caustic and alkaline service where purity and reliability matter.",
        properties: [
          "High ductility",
          "Excellent thermal conductivity",
          "Good corrosion resistance",
        ],
        applications: [
          "Electrochemical use",
          "Alkali service",
          "Specialty piping",
        ],
      },
      {
        title: "Nickel Alloy 600",
        slug: "nickel-alloy-600",
        shortDescription:
          "High-strength nickel alloy for heating and chemical processing systems.",
        description:
          "Suitable for elevated temperatures, furnace components, and aggressive chemical environments.",
        properties: [
          "Heat resistance",
          "Oxidation resistance",
          "Good creep strength",
        ],
        applications: ["Furnace parts", "Heat exchangers", "Reactor internals"],
      },
    ]),
  },
  {
    name: "Copper Nickel",
    slug: "copper-nickel",
    image: pipeImg,
    description:
      "Copper-nickel alloys prized for seawater corrosion resistance in marine and offshore applications.",
    overview:
      "Preferred for marine service where saltwater resistance and ease of fabrication matter.",
    highlight: [
      "Seawater compatibility",
      "Low marine growth",
      "Good thermal transfer",
    ],
    items: buildItems(pipeImg, [
      {
        title: "CuNi 90/10",
        slug: "cuni-90-10",
        shortDescription:
          "Balanced alloy for marine piping and heat exchange systems.",
        description:
          "Common in seawater service, condensers, and offshore cooling systems.",
        properties: [
          "Excellent biofouling resistance",
          "Good ductility",
          "Reliable corrosion behavior",
        ],
        applications: ["Marine piping", "Heat exchangers", "Cooling systems"],
      },
      {
        title: "CuNi 70/30",
        slug: "cuni-70-30",
        shortDescription:
          "Higher nickel content alloy for harsher seawater service.",
        description:
          "Used in demanding marine and desalination equipment where durability is essential.",
        properties: [
          "Strong seawater resistance",
          "Good mechanical stability",
          "Excellent service life",
        ],
        applications: ["Desalination", "Ship systems", "Offshore platforms"],
      },
    ]),
  },
  {
    name: "Hastelloy",
    slug: "hastelloy",
    image: roundBarImg,
    description:
      "Nickel-molybdenum-chromium alloys engineered for severe chemical processing environments.",
    overview:
      "Built for aggressive chemical processes where conventional alloys fail.",
    highlight: [
      "Superior chloride resistance",
      "Excellent resistance to oxidizers",
      "Long service life",
    ],
    items: buildItems(roundBarImg, [
      {
        title: "Hastelloy C-276",
        slug: "hastelloy-c-276",
        shortDescription:
          "Versatile alloy suited for process equipment and scrubbers.",
        description:
          "Widely used for acidic and chloride-rich service where resistance is critical.",
        properties: [
          "Outstanding corrosion resistance",
          "Good fabricability",
          "High reliability",
        ],
        applications: [
          "Chemical processing",
          "Pollution control",
          "Pulp and paper",
        ],
      },
      {
        title: "Hastelloy B-3",
        slug: "hastelloy-b-3",
        shortDescription: "Specialized grade for reducing acid environments.",
        description:
          "Selected for hydrochloric acid and related reducing service conditions.",
        properties: [
          "Excellent reducing acid resistance",
          "Thermal stability",
          "Durable performance",
        ],
        applications: ["Acid plants", "Reactors", "Heat transfer equipment"],
      },
    ]),
  },
  {
    name: "Incoloy",
    slug: "incoloy",
    image: sheetImg,
    description:
      "Iron-nickel-chromium alloys offering strong resistance to oxidation and carburization at high temperatures.",
    overview:
      "A dependable choice for high-temperature service and thermal processing equipment.",
    highlight: [
      "Oxidation resistance",
      "Carburization resistance",
      "Thermal stability",
    ],
    items: buildItems(sheetImg, [
      {
        title: "Incoloy 800",
        slug: "incoloy-800",
        shortDescription:
          "High-temperature alloy for heat transfer and process components.",
        description:
          "Engineered for reliability in furnace and petrochemical environments.",
        properties: [
          "Good creep strength",
          "High oxidation resistance",
          "Stable in service",
        ],
        applications: ["Petrochemical", "Power plants", "Furnace components"],
      },
      {
        title: "Incoloy 825",
        slug: "incoloy-825",
        shortDescription:
          "Alloy for harsh acidic and chloride-containing environments.",
        description:
          "A strong option for chemical processing and sour service where corrosion is severe.",
        properties: [
          "Excellent pitting resistance",
          "Good weldability",
          "High toughness",
        ],
        applications: ["Chemical plants", "Pollution control", "Oil & gas"],
      },
    ]),
  },
  {
    name: "Inconel",
    slug: "inconel",
    image: wireImg,
    description:
      "Nickel-chromium superalloys built for extreme heat, pressure, and corrosive service in aerospace and energy.",
    overview:
      "Ideal for turbine, exhaust, and high-stress industrial applications.",
    highlight: [
      "Exceptional heat resistance",
      "Excellent creep strength",
      "Reliable under pressure",
    ],
    items: buildItems(wireImg, [
      {
        title: "Inconel 600",
        slug: "inconel-600",
        shortDescription:
          "Classic superalloy for oxidation and corrosion resistance at elevated temperatures.",
        description:
          "Used in furnace parts, chemical processing, and aerospace hardware.",
        properties: [
          "High temperature stability",
          "Good oxidation resistance",
          "Strong mechanical integrity",
        ],
        applications: ["Aerospace", "Heating systems", "Process equipment"],
      },
      {
        title: "Inconel 625",
        slug: "inconel-625",
        shortDescription:
          "High-strength alloy for severe environments and marine use.",
        description:
          "Preferred for exhaust systems, marine components, and high-performance engineering.",
        properties: [
          "Outstanding fatigue strength",
          "Excellent chloride resistance",
          "Good weldability",
        ],
        applications: [
          "Marine engineering",
          "Exhaust systems",
          "Critical hardware",
        ],
      },
    ]),
  },
  {
    name: "Monel",
    slug: "monel",
    image: flangeImg,
    description:
      "Nickel-copper alloys with excellent resistance to seawater and hydrofluoric acid environments.",
    overview:
      "A dependable nickel-copper solution for marine and acid handling applications.",
    highlight: [
      "Excellent seawater resistance",
      "Good ductility",
      "Strong acid resistance",
    ],
    items: buildItems(flangeImg, [
      {
        title: "Monel 400",
        slug: "monel-400",
        shortDescription:
          "General-purpose nickel-copper alloy for marine and chemical work.",
        description:
          "Known for strong resistance to flowing seawater and many corrosive media.",
        properties: [
          "Good mechanical strength",
          "Excellent corrosion behavior",
          "Good weldability",
        ],
        applications: [
          "Marine fasteners",
          "Pump components",
          "Chemical handling",
        ],
      },
      {
        title: "Monel K-500",
        slug: "monel-k-500",
        shortDescription:
          "Precipitation-hardened grade for higher strength and wear resistance.",
        description:
          "Common in shafts, pump parts, and equipment exposed to marine and chemical environments.",
        properties: [
          "High strength",
          "Good corrosion resistance",
          "Excellent wear tolerance",
        ],
        applications: ["Pump shafts", "Propeller components", "Valves"],
      },
    ]),
  },
  {
    name: "Titanium",
    slug: "titanium",
    image: valveImg,
    description:
      "Lightweight, high-strength titanium grades with outstanding corrosion resistance for aerospace and marine use.",
    overview:
      "Strong, lightweight, and highly corrosion resistant for critical performance needs.",
    highlight: [
      "High strength-to-weight ratio",
      "Excellent corrosion resistance",
      "Biocompatible",
    ],
    items: buildItems(valveImg, [
      {
        title: "Grade 2 Titanium",
        slug: "grade-2-titanium",
        shortDescription:
          "Commercially pure titanium for corrosion-sensitive applications.",
        description:
          "Selected for marine, chemical, and heat-exchanger duty where corrosion resistance matters.",
        properties: [
          "Excellent ductility",
          "Very good corrosion resistance",
          "Lightweight",
        ],
        applications: [
          "Marine equipment",
          "Heat exchangers",
          "Chemical vessels",
        ],
      },
      {
        title: "Grade 5 Titanium",
        slug: "grade-5-titanium",
        shortDescription:
          "High-strength titanium alloy for aerospace and performance engineering.",
        description:
          "Widely used in structural aerospace and advanced industrial assemblies.",
        properties: [
          "High specific strength",
          "Excellent fatigue resistance",
          "Low density",
        ],
        applications: [
          "Aerospace components",
          "High-performance structures",
          "Medical systems",
        ],
      },
    ]),
  },
  {
    name: "Sanicro",
    slug: "sanicro",
    image: ringImg,
    description:
      "Specialty austenitic stainless steels engineered for demanding sulfuric and phosphoric acid service.",
    overview:
      "A premium stainless option for demanding acid service and process equipment.",
    highlight: [
      "Excellent acid resistance",
      "High process reliability",
      "Strong weldability",
    ],
    items: buildItems(ringImg, [
      {
        title: "Sanicro 28",
        slug: "sanicro-28",
        shortDescription:
          "High-alloy stainless grade for severe chemical and acid service.",
        description:
          "Typically specified in sulfuric and phosphoric acid environments where durability is essential.",
        properties: [
          "Superior acid resistance",
          "Excellent mechanical integrity",
          "Good process reliability",
        ],
        applications: ["Acid plants", "Chemical systems", "Process piping"],
      },
      {
        title: "Sanicro 31",
        slug: "sanicro-31",
        shortDescription:
          "Advanced stainless grade designed for aggressive process conditions.",
        description:
          "Provides strong performance in demanding corrosive environments with high uptime expectations.",
        properties: [
          "Excellent corrosion resistance",
          "High thermal stability",
          "Reliable fabrication",
        ],
        applications: [
          "Process equipment",
          "Chemical reactors",
          "Critical piping",
        ],
      },
    ]),
  },
  {
    name: "Special Materials",
    slug: "special-materials",
    image: circleImg,
    description:
      "Custom and specialty alloy grades sourced for unique project specifications and critical applications.",
    overview:
      "Tailored solutions for niche industrial and engineering challenges.",
    highlight: [
      "Custom sourcing",
      "Application-specific grades",
      "Project engineering support",
    ],
    items: buildItems(circleImg, [
      {
        title: "Custom Alloy Solutions",
        slug: "custom-alloy-solutions",
        shortDescription:
          "Special alloy sourcing for unique specifications and critical applications.",
        description:
          "We support engineering teams with tailored alloy selection when standard grades are not enough.",
        properties: [
          "Application-focused selection",
          "Expert guidance",
          "Project-specific sourcing",
        ],
        applications: [
          "Custom fabrication",
          "Specialized plants",
          "Prototype development",
        ],
      },
      {
        title: "High-Performance Specials",
        slug: "high-performance-specials",
        shortDescription:
          "Specialty materials for extreme service conditions and advanced equipment.",
        description:
          "Selected for high-demand industrial and energy environments where performance is non-negotiable.",
        properties: [
          "Customized specifications",
          "Long-term reliability",
          "Engineering support",
        ],
        applications: [
          "Energy systems",
          "Research projects",
          "Critical infrastructure",
        ],
      },
    ]),
  },
  {
    name: "Other Materials",
    slug: "other-materials",
    image: stripImg,
    description:
      "Additional carbon steel, alloy steel, and engineering material grades available on request.",
    overview:
      "Supporting broader industrial requirements with carbon and engineering steel options.",
    highlight: [
      "Wide grade availability",
      "Cost-effective options",
      "Fast sourcing",
    ],
    items: buildItems(stripImg, [
      {
        title: "Carbon Steel Grades",
        slug: "carbon-steel-grades",
        shortDescription:
          "Reliable structural and engineering carbon steel options.",
        description:
          "Suitable for standard industrial fabrication, construction, and utility use.",
        properties: [
          "Cost effective",
          "Excellent availability",
          "Easy fabrication",
        ],
        applications: [
          "Construction",
          "General fabrication",
          "Industrial structures",
        ],
      },
      {
        title: "Alloy Steel Grades",
        slug: "alloy-steel-grades",
        shortDescription:
          "Enhanced steel grades for higher mechanical performance and wear resistance.",
        description:
          "Chosen for demanding structural and mechanical applications where added strength matters.",
        properties: [
          "Higher strength",
          "Wear resistance",
          "Good machinability",
        ],
        applications: [
          "Machinery",
          "Heavy equipment",
          "Engineering components",
        ],
      },
    ]),
  },
];

export default materials;
