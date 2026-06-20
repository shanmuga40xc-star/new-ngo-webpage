// Static content for InAmigos Foundation website (placeholder).

export const SITE = {
  name: "InAmigos Foundation",
  shortName: "InAmigos",
  tagline: "Nurturing Young Minds, Building Bright Futures",
  email: "support@inamigosfoundation.org.in",
  phone: "+91 98765 43210",
  address: "Lucknow, Uttar Pradesh, India",
  helpline: "Mon — Sat, 9:00 — 18:00 IST",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#about" },
  { label: "Causes", href: "#causes" },
  { label: "Impact", href: "#impact" },
  { label: "Volunteers", href: "#volunteers" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 68, suffix: "", label: "Volunteers" },
  { value: 28, suffix: "", label: "States" },
  { value: 6, suffix: "", label: "Causes" },
  { value: 42000, suffix: "+", label: "Beneficiaries" },
];

export const CAUSES = [
  {
    id: "education",
    title: "Bachpansala — Education",
    description:
      "After-school learning circles for under-resourced children. We replace rote with curiosity, one classroom at a time.",
    image: "https://images.pexels.com/photos/18449721/pexels-photo-18449721.jpeg",
    tag: "Flagship",
  },
  {
    id: "healthcare",
    title: "Mobile Healthcare",
    description:
      "Free check-up camps and medicine drives in remote villages — bringing dignity to last-mile care.",
    image: "https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg",
    tag: "Active",
  },
  {
    id: "women",
    title: "Women Empowerment",
    description:
      "Stitching cooperatives, financial literacy and self-defence — building agency, not just income.",
    image: "https://images.pexels.com/photos/36746080/pexels-photo-36746080.jpeg",
    tag: "Active",
  },
  {
    id: "environment",
    title: "Green Drives",
    description:
      "Plantation drives, river clean-ups and zero-waste school kits with measurable carbon reporting.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    tag: "Seasonal",
  },
  {
    id: "rural",
    title: "Rural Development",
    description:
      "Clean water, road repair and library kiosks for 40+ villages across Uttar Pradesh and beyond.",
    image: "https://images.pexels.com/photos/36739282/pexels-photo-36739282.jpeg",
    tag: "Ongoing",
  },
  {
    id: "skill",
    title: "Skill Training",
    description:
      "Tailoring, digital literacy and spoken-English certifications for youth aged 16–28.",
    image: "https://images.pexels.com/photos/32285450/pexels-photo-32285450.jpeg",
    tag: "Cohort Open",
  },
];

export const EVENTS = [
  {
    id: "happiness-2025",
    date: "20 March 2025",
    title: "International Day of Happiness 2025",
    category: "Community",
    excerpt:
      "Join us in spreading joy, positivity, and well-being through engaging activities and inspiring discussions across 12 cities.",
    image:
      "https://images.pexels.com/photos/8364027/pexels-photo-8364027.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "winter-warmth",
    date: "08 January 2025",
    title: "Winter Warmth Drive — North India",
    category: "Drive",
    excerpt:
      "Distributing 5,000+ blankets, sweaters and meal kits across shelters in Lucknow, Kanpur and Varanasi.",
    image:
      "https://images.pexels.com/photos/6646997/pexels-photo-6646997.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "skill-cohort",
    date: "15 February 2025",
    title: "Digital Literacy Cohort — Batch 14",
    category: "Education",
    excerpt:
      "120 young women graduated from our 12-week digital and spoken-English program with placement support.",
    image:
      "https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const VOLUNTEERS = [
  {
    name: "Faiz Khan",
    role: "Volunteer Supervisor",
    location: "Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aanya Sharma",
    role: "Education Lead",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rohan Verma",
    role: "Healthcare Coordinator",
    location: "Maharashtra",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "Community Outreach",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "InAmigos didn't bring charity into our village — they brought a library, a doctor, and a future. My daughter wants to be a teacher now.",
    name: "Sunita Devi",
    role: "Parent · Bahraich",
  },
  {
    quote:
      "I joined as a weekend volunteer. Two years later, I lead the skill-training cohort in Lucknow. This place changes everyone who steps in.",
    name: "Arjun Mehta",
    role: "Skill Program Lead",
  },
  {
    quote:
      "Their reporting is honest, their workers are present, and their impact is measurable. We're proud to be a recurring CSR partner.",
    name: "Kavita Reddy",
    role: "CSR Head · Saral Tech",
  },
];

export const DONATION_PRESETS = [
  { value: 500, label: "₹500", note: "1 child's school kit" },
  { value: 1500, label: "₹1,500", note: "1 month of meals" },
  { value: 5000, label: "₹5,000", note: "Medical camp for 20" },
  { value: 25000, label: "₹25,000", note: "Sponsor a village classroom" },
];

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
];
