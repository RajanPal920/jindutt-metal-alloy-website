import { BadgeCheck, Receipt, Building2 } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "ISO 9001:2015",
    slug: "iso-9001-2015",
    pdf: "/certificates/iso-9001.pdf",
    description: "ISO 9001:2015 Quality Management System Certification.",
    icon: BadgeCheck,
  },
  {
    id: 2,
    name: "GST Certificate",
    slug: "gst-certificate",
    pdf: "/certificates/gst-certificate.pdf",
    description: "Goods and Services Tax Registration Certificate.",
    icon: Receipt,
  },
  {
    id: 3,
    name: "Udyam Registration",
    slug: "udyam-registration",
    pdf: "/certificates/udyam.pdf",
    description: "MSME Udyam Registration Certificate.",
    icon: Building2,
  },
];

export default certificates;
