import {
  Compass,
  ClipboardList,
  PackageSearch,
  Handshake,
  type LucideIcon,
} from "lucide-react"

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Global", href: "#global" },
  { label: "Contact", href: "#contact" },
]

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    icon: Compass,
    title: "Advisory & Strategy",
    description:
      "Clear-eyed guidance to enter new markets and refine how you operate.",
    points: [
      "Preliminary feasibility studies & market entry analysis",
      "Business strategy formulation",
      "Operational technique evaluation & process optimization",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Development & Management",
    description:
      "End-to-end project delivery from first concept through execution.",
    points: [
      "Project development support from concept to execution",
      "Planning, scheduling, budgeting, risk management & reporting",
      "Stakeholder coordination & site supervision support",
    ],
  },
  {
    icon: PackageSearch,
    title: "Sourcing & Procurement",
    description:
      "Vetted global supply and airtight commercial terms that de-risk delivery.",
    points: [
      "Global supplier identification, vetting & onboarding",
      "Contract negotiation & commercial terms structuring",
      "Logistics coordination for equipment & materials",
    ],
  },
  {
    icon: Handshake,
    title: "Business Development & Facilitation",
    description:
      "The introductions and local know-how that move deals forward.",
    points: [
      "Client introductions",
      "Negotiation support with government entities, contractors & investors",
      "Regulatory & compliance liaison in operating jurisdictions",
    ],
  },
]

export type Industry = {
  name: string
  image: string
  description: string
}

export const industries: Industry[] = [
  {
    name: "Real Estate",
    image: "/images/real-estate.png",
    description: "Developers and contractors delivering landmark projects.",
  },
  {
    name: "Construction",
    image: "/images/construction.png",
    description: "Large-scale builds managed from ground-breaking to handover.",
  },
  {
    name: "Infrastructure",
    image: "/images/infrastructure.png",
    description: "Roads, bridges, ports and the systems that connect them.",
  },
  {
    name: "Oil & Gas",
    image: "/images/oil-gas.png",
    description: "Upstream and downstream projects in capital-intensive markets.",
  },
  {
    name: "Power & Energy",
    image: "/images/energy.png",
    description: "Generation and transmission assets across emerging economies.",
  },
  {
    name: "Logistics",
    image: "/images/logistics.png",
    description: "Port, terminal and freight operations moving at scale.",
  },
]

export const countries = [
  "South Africa",
  "Nigeria",
  "United Arab Emirates",
  "Netherlands",
  "Portugal",
  "Brazil",
  "Mozambique",
]

export const valueProps = [
  {
    audience: "For Clients",
    text: "Faster market entry, reduced procurement risk, access to vetted suppliers, and expert local execution without building in-house teams.",
  },
  {
    audience: "For Suppliers",
    text: "Access to large-scale projects and credible buyer introductions in high-growth regions.",
  },
  {
    audience: "For Banks",
    text: "Transparent, contract-backed cash flows with diversified geographic and sector exposure.",
  },
]

export const stats = [
  { value: "2014", label: "Established" },
  { value: "7", label: "Countries" },
  { value: "7", label: "Core industries" },
  { value: "B2B", label: "Focus" },
]
