import flangesImg from "../assets/images/productImage/Flanges.webp";
import valvesImg from "../assets/images/productImage/valves.webp";
import coilsImg from "../assets/images/productImage/coil.webp";
import roundBarsImg from "../assets/images/productImage/rod.webp";
import wiresImg from "../assets/images/productImage/wires.webp";
import pattaPattiImg from "../assets/images/productImage/patta-patti.webp";
import stripsImg from "../assets/images/productImage/strips.webp";
import dairyPharmaValvesImg from "../assets/images/productImage/dairy-pharma-valves.webp";
import perforatedSheetImg from "../assets/images/productImage/perforated-sheet.webp";
import anchorFastenerImg from "../assets/images/productImage/anchor-fastener.webp";
import pipesImg from "../assets/images/productImage/steel-pipes.webp";
import sheetsImg from "../assets/images/productImage/sheets.webp";
import buttweldImg from "../assets/images/productImage/buttweld.webp";
import fastenersImg from "../assets/images/productImage/fastener.webp";
import ringsImg from "../assets/images/productImage/rings.webp";
import pharmaFittingsImg from "../assets/images/productImage/pharma-fittings.webp";
import hosePipeImg from "../assets/images/productImage/hose-pipe.webp";
import hardoxPlateImg from "../assets/images/productImage/hardox-plate.webp";
import platesImg from "../assets/images/productImage/plates.webp";
import tubesImg from "../assets/images/productImage/tubes.webp";
import forgedFittingsImg from "../assets/images/productImage/forged-fittings.webp";
import angleChannelsImg from "../assets/images/productImage/angle-channels.webp";
import circlesImg from "../assets/images/productImage/circles.webp";
import dairyFittingsImg from "../assets/images/productImage/dairy-fittings.webp";
import wireMeshImg from "../assets/images/productImage/wire-mesh.webp";

const products = [
  {
    id: 1,
    name: "Flanges",
    slug: "flanges",
    image: flangesImg,
    category: "Pipe Fittings",
    shortDescription:
      "Premium quality industrial flanges manufactured in Stainless Steel, Carbon Steel, Duplex and Alloy Steel.",
  },
  {
    id: 2,
    name: "Valves",
    slug: "valves",
    image: valvesImg,
    category: "Industrial Valves",
    shortDescription:
      "Reliable industrial valves designed for high pressure and critical flow control applications.",
  },
  {
    id: 3,
    name: "Coils",
    slug: "coils",
    image: coilsImg,
    category: "Flat Products",
    shortDescription:
      "High-quality stainless steel coils available in various thicknesses and finishes.",
  },
  {
    id: 4,
    name: "Rod & Round Bars",
    slug: "rod-bars",
    image: roundBarsImg,
    category: "Bars & Rods",
    shortDescription:
      "Precision engineered stainless steel and alloy round bars for industrial applications.",
  },
  {
    id: 5,
    name: "Wires",
    slug: "wires",
    image: wiresImg,
    category: "Wire Products",
    shortDescription:
      "Industrial wires suitable for fabrication, welding, and engineering industries.",
  },
  {
    id: 6,
    name: "Patta Patti",
    slug: "patta-patti",
    image: pattaPattiImg,
    category: "Flat Products",
    shortDescription:
      "Premium stainless steel patta patti available in multiple dimensions.",
  },
  {
    id: 7,
    name: "Strips",
    slug: "strips",
    image: stripsImg,
    category: "Flat Products",
    shortDescription:
      "Durable stainless steel strips for industrial and commercial use.",
  },
  {
    id: 8,
    name: "Dairy & Pharma Valves",
    slug: "dairy-pharma-valves",
    image: dairyPharmaValvesImg,
    category: "Sanitary Valves",
    shortDescription:
      "Specialized valves designed for dairy, food and pharmaceutical industries.",
  },
  {
    id: 9,
    name: "Perforated Sheet",
    slug: "perforated-sheet",
    image: perforatedSheetImg,
    category: "Sheets",
    shortDescription:
      "High precision perforated sheets manufactured in various hole patterns.",
  },
  {
    id: 10,
    name: "Anchor Fastener",
    slug: "anchor-fastener",
    image: anchorFastenerImg,
    category: "Fasteners",
    shortDescription:
      "Heavy-duty anchor fasteners for construction and industrial installations.",
  },
  {
    id: 11,
    name: "Pipes",
    slug: "pipes",
    image: pipesImg,
    category: "Pipes & Tubes",
    shortDescription:
      "Seamless and welded pipes available in multiple grades and standards.",
  },
  {
    id: 12,
    name: "Sheets",
    slug: "sheets",
    image: sheetsImg,
    category: "Flat Products",
    shortDescription:
      "High-performance stainless steel sheets for engineering industries.",
  },
  {
    id: 13,
    name: "Buttweld Fittings",
    slug: "buttweld-fittings",
    image: buttweldImg,
    category: "Pipe Fittings",
    shortDescription:
      "Premium buttweld fittings manufactured according to ASTM and ASME standards.",
  },
  {
    id: 14,
    name: "Fasteners",
    slug: "fasteners",
    image: fastenersImg,
    category: "Industrial Fasteners",
    shortDescription:
      "Complete range of industrial fasteners for heavy engineering applications.",
  },
  {
    id: 15,
    name: "Rings",
    slug: "rings",
    image: ringsImg,
    category: "Forged Products",
    shortDescription:
      "Precision forged rings manufactured to international quality standards.",
  },
  {
    id: 16,
    name: "Pharma Fittings",
    slug: "pharma-fittings",
    image: pharmaFittingsImg,
    category: "Sanitary Fittings",
    shortDescription:
      "Hygienic pharmaceutical fittings manufactured with superior finish.",
  },
  {
    id: 17,
    name: "Hose Pipe",
    slug: "hose-pipe",
    image: hosePipeImg,
    category: "Industrial Hose",
    shortDescription:
      "Industrial hose pipes suitable for chemical and fluid transfer systems.",
  },
  {
    id: 18,
    name: "Hardox Plate",
    slug: "hardox-plate",
    image: hardoxPlateImg,
    category: "Wear Resistant Plates",
    shortDescription:
      "Premium Hardox wear-resistant plates for mining and heavy industries.",
  },
  {
    id: 19,
    name: "Plates",
    slug: "plates",
    image: platesImg,
    category: "Flat Products",
    shortDescription:
      "Industrial plates manufactured in Stainless Steel, Carbon Steel and Alloy Steel.",
  },
  {
    id: 20,
    name: "Tubes",
    slug: "tubes",
    image: tubesImg,
    category: "Pipes & Tubes",
    shortDescription:
      "Seamless and welded tubes for industrial, structural and process applications.",
  },
  {
    id: 21,
    name: "Forged Fittings",
    slug: "forged-fittings",
    image: forgedFittingsImg,
    category: "Forged Products",
    shortDescription:
      "High-pressure forged fittings manufactured according to ASTM standards.",
  },
  {
    id: 22,
    name: "Angle & Channels",
    slug: "angle-channels",
    image: angleChannelsImg,
    category: "Structural Steel",
    shortDescription:
      "Structural angles and channels for fabrication and infrastructure projects.",
  },
  {
    id: 23,
    name: "Circles",
    slug: "circles",
    image: circlesImg,
    category: "Flat Products",
    shortDescription:
      "High precision stainless steel circles available in multiple diameters.",
  },
  {
    id: 24,
    name: "Dairy Fittings",
    slug: "dairy-fittings",
    image: dairyFittingsImg,
    category: "Sanitary Fittings",
    shortDescription:
      "Food-grade dairy fittings manufactured with excellent surface finish.",
  },
  {
    id: 25,
    name: "Wire Mesh",
    slug: "wire-mesh",
    image: wireMeshImg,
    category: "Wire Products",
    shortDescription:
      "Industrial wire mesh for filtration, screening and architectural applications.",
  },
];

export default products;
