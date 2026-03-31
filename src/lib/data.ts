// ============================================================
// TimberArt.lv — Site Data
// All content scraped from live site + SWOT-enhanced copy
// ============================================================

export const SITE_CONFIG = {
  name: "TimberArt",
  tagline: "Saunas crafted for a lifetime of ritual.",
  taglineLv: "Mēs radām pirtis, mikro mājas un vasaras mājiņas...",
  phone: "+371 27302050",
  email: "timberart@timberart.lv",
  instagram: "https://www.instagram.com/timberart_saunas/",
  tiktok: "https://www.tiktok.com/@timberart_saunas",
  facebook: "https://www.facebook.com/timberartsia",
  whatsapp: "https://wa.me/37127302050",
  mapsUrl: "https://maps.google.com/?q=Madona+Latvia",
  leasingMonthly: 69,
};

export const STATS = [
  { value: "311+", label: "Projects Completed" },
  { value: "6+",   label: "Years Experience" },
  { value: "EU",   label: "Quality Certified" },
  { value: "100%", label: "Thermowood" },
];

export const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Barrel Saunas",          href: "/products/mucveida-pirtis",       desc: "Round, rectangular & oval" },
      { label: "Thermowood Sauna Houses",href: "/products/termokoka-pirts-majas", desc: "Year-round sauna homes" },
      { label: "Frame Saunas & Houses",  href: "/products/karkasa-pirtis",        desc: "Termo Kubs modular range" },
      { label: "Micro Houses & Pods",    href: "/products/mikro-majas",           desc: "Camping & glamping units" },
      { label: "Hot Tubs",               href: "/products/koka-kubli",            desc: "200cm & 225cm tubs" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Wood Windows & Doors",   href: "/services/koka-logu-durvis" },
      { label: "Sauna Renovation",       href: "/services/remonts" },
      { label: "Sauna Interior Build",   href: "/services/telpu-izbuve" },
      { label: "Custom Projects",        href: "/services/individualie" },
    ],
  },
  { label: "Gallery",    href: "/galerija" },
  { label: "About",      href: "/par-mums" },
  { label: "Contact",    href: "/kontakti" },
];

export interface Product {
  slug: string;
  name: string;
  nameLv: string;
  category: string;
  description: string;
  price: number;
  priceLabel: string;
  specs: { icon: string; label: string; value: string }[];
  includes: string[];
  finishes: string[];
  imageUrl: string;
  plans?: string;
  related: string[];
}

export const CATEGORIES = [
  {
    slug:        "mucveida-pirtis",
    name:        "Barrel Saunas",
    nameLv:      "Mucveida pirtis",
    description: "Traditional round, rectangular and oval barrel saunas in thermowood.",
    fromPrice:   5200,
    count:       15,
    imageUrl:    "https://timberart.lv/image/catalog/category-images/5k4_pirts_front2.png",
    href:        "/products/mucveida-pirtis",
  },
  {
    slug:        "termokoka-pirts-majas",
    name:        "Thermowood Sauna Houses",
    nameLv:      "Termokoka pirts mājas",
    description: "Full sauna buildings for year-round outdoor living.",
    fromPrice:   8200,
    count:       4,
    imageUrl:    "https://timberart.lv/image/catalog/product/karkasa%20pirtis%20un%20mājas/Termokoka%20pirtsmaja%204,50m/TimberRAT_saunahouse_Front2.png",
    href:        "/products/termokoka-pirts-majas",
  },
  {
    slug:        "karkasa-pirtis",
    name:        "Frame Saunas & Houses",
    nameLv:      "Karkasa pirtis un mājas",
    description: "Premium Termo Kubs modular frame saunas.",
    fromPrice:   6500,
    count:       3,
    imageUrl:    "https://timberart.lv/image/catalog/product/karkasa%20pirtis%20un%20mājas/Cube%206m%20Raimonds/Thermocube_6mFront.png",
    href:        "/products/karkasa-pirtis",
  },
  {
    slug:        "mikro-majas",
    name:        "Micro Houses & Glamping Pods",
    nameLv:      "Mikro mājas un kempinga namiņi",
    description: "Spiral glamping pods and ARTA micro-home series.",
    fromPrice:   12000,
    count:       4,
    imageUrl:    "https://timberart.lv/image/catalog/product/kempingi/Spiral%20camping%20pod%20–%20Autumn/Prot_front3-1.png",
    href:        "/products/mikro-majas",
  },
  {
    slug:        "koka-kubli",
    name:        "Hot Tubs",
    nameLv:      "Koka kubli",
    description: "Thermowood hot tubs with external or integrated stove.",
    fromPrice:   1850,
    count:       5,
    imageUrl:    "https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=800&auto=format&fit=crop",
    href:        "/products/koka-kubli",
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    slug:        "apala-pirts-390m",
    name:        "Round Sauna 3.90m",
    nameLv:      "Apaļā pirts 3,90m",
    category:    "Barrel Saunas",
    description: "Our most popular model. Room for 4–6 adults — crafted from premium thermowood for lifelong performance in any climate.",
    price:       6900,
    priceLabel:  "ex. VAT",
    specs: [
      { icon: "users",     label: "Capacity",    value: "4–6 adults" },
      { icon: "ruler",     label: "Diameter",    value: "3.90 m" },
      { icon: "thermometer",label:"Temperature", value: "Up to 90°C" },
      { icon: "weight",    label: "Material",    value: "Thermowood" },
    ],
    includes: [
      "Skamet wood stove with stones, boiler & chimney",
      "Interior benches, steam room & floor grating",
      "Full interior treatment — Tikkurila Supi",
      "Electrical installation & LED ambient lighting",
      "8mm tempered bronze glass sauna door",
    ],
    finishes:  ["Remmers HK-Lasur", "Tikkurila Supi", "Würth Assy"],
    imageUrl:  "https://timberart.lv/image/catalog/product/Mucveida%20pirtis%20/Apaļās%20pirtis/Ap_3,90m.png",
    related:   ["apala-pirts-300m", "apala-pirts-420m", "taisnstura-pirts-300m"],
  },
  {
    slug:        "termokoka-pirtsmajas-390m",
    name:        "Thermowood Sauna House 3.90m",
    nameLv:      "Termokoka pirtsmāja 3,90m",
    category:    "Thermowood Sauna Houses",
    description: "A complete standalone sauna building. Insulated for four-season use — the ultimate year-round outdoor retreat.",
    price:       8200,
    priceLabel:  "ex. VAT",
    specs: [
      { icon: "home",      label: "Type",        value: "Full building" },
      { icon: "ruler",     label: "Length",      value: "3.90 m" },
      { icon: "snowflake", label: "Season",      value: "Year-round" },
      { icon: "weight",    label: "Material",    value: "Thermowood" },
    ],
    includes: [
      "Full structural frame & thermowood cladding",
      "Insulation for four-season use",
      "Premium Skamet stove with boiler system",
      "Interior fit-out — benches, LED, Tikkurila finish",
      "Panoramic window & glass door",
    ],
    finishes:  ["Remmers HK-Lasur", "Tikkurila Supi"],
    imageUrl:  "https://timberart.lv/image/catalog/product/karkasa%20pirtis%20un%20mājas/Termokoka%20pirtsmaja%204,50m/TimberRAT_saunahouse_Front2.png",
    related:   ["termokoka-pirtsmajas-450m", "pirts-ar-terasi-600m"],
  },
  {
    slug:        "kubls-200cm-integreta-krasns",
    name:        "Hot Tub 200cm — Integrated Stove",
    nameLv:      "Kubls 200cm ar integrētu krāsni",
    category:    "Hot Tubs",
    description: "Soak under the stars. Our 200cm thermowood hot tub fits 4 adults with a clean, built-in heating system.",
    price:       1850,
    priceLabel:  "ex. VAT",
    specs: [
      { icon: "users",     label: "Capacity",    value: "3–4 adults" },
      { icon: "ruler",     label: "Diameter",    value: "200 cm" },
      { icon: "flame",     label: "Stove",       value: "Integrated" },
      { icon: "weight",    label: "Material",    value: "Thermowood" },
    ],
    includes: [
      "Integrated wood-fired stove with clean exterior",
      "Stainless steel inner lining",
      "Thermowood outer shell — heat-treated for water resistance",
      "Cover lid included",
    ],
    finishes:  ["Natural thermowood", "Dark thermowood"],
    imageUrl:  "https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=800&auto=format&fit=crop",
    related:   ["kubls-225cm-areja-krasns"],
  },
];

export const TESTIMONIALS = [
  {
    name:    "Jānis Kļaviņš",
    city:    "Riga",
    product: "Round Sauna 3.90m",
    text:    "Best investment we've made for our summer house. The thermowood quality is exceptional — looks amazing after two winters outdoors.",
    rating:  5,
    avatar:  "JK",
  },
  {
    name:    "Marta Liepiņa",
    city:    "Jūrmala",
    product: "Thermowood Sauna House 4.50m",
    text:    "From first contact to delivery — professional, precise, and the finished sauna is absolutely beautiful. Our guests love it.",
    rating:  5,
    avatar:  "ML",
  },
  {
    name:    "Thomas Müller",
    city:    "Munich, Germany",
    product: "Hot Tub 225cm",
    text:    "Shipped to Germany without issues. The build quality rivals anything I've seen from Scandinavian brands — at a fraction of the price.",
    rating:  5,
    avatar:  "TM",
  },
  {
    name:    "Andris Bērziņš",
    city:    "Valmiera",
    product: "Termo Kubs 6.0 Frame Sauna",
    text:    "Used the leasing option — made it very accessible. The sauna arrived perfectly packaged. Assembly team was fast and clean.",
    rating:  5,
    avatar:  "AB",
  },
  {
    name:    "Sophie Laurent",
    city:    "Amsterdam, NL",
    product: "Spiral Glamping Pod",
    text:    "Running a glamping site — our Spiral pod is fully booked every weekend. The ROI was achieved in the first season.",
    rating:  5,
    avatar:  "SL",
  },
];

export const BLOG_POSTS = [
  {
    slug:     "kuru-pirti-izveleties",
    title:    "Which Sauna Is Right for You? The Complete Buyer's Guide",
    titleLv:  "Kuru pirti izvēlēties? Pilnīgais ceļvedis",
    excerpt:  "Round, rectangular, or a full sauna house? We break down every option so you choose with confidence.",
    category: "Buyer's Guide",
    date:     "March 2026",
    readMin:  8,
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop",
  },
  {
    slug:     "kas-ir-termokoksne",
    title:    "What Is Thermowood? And Why It's the Best Sauna Material",
    titleLv:  "Kas ir termokoksne un kāpēc tā ir labākais materiāls pirtij?",
    excerpt:  "Heat-treated at 180–220°C, thermowood outlasts regular wood in every climate. Here's the science.",
    category: "Material Guide",
    date:     "March 2026",
    readMin:  5,
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop",
  },
  {
    slug:     "glamping-roi",
    title:    "Earn €1,000+/Month From a Glamping Pod — The ROI Breakdown",
    titleLv:  "Nopelni €1,000+/mēnesī no glamping namiņa",
    excerpt:  "Glamping site operators share real numbers. Our Spiral pod pays for itself in under 18 months.",
    category: "Business",
    date:     "March 2026",
    readMin:  6,
    imageUrl: "https://images.unsplash.com/photo-1562602834-b81b5b1e665e?w=600&auto=format&fit=crop",
  },
];

export const PARTNER_LOGOS = [
  { name: "Tikkurila", role: "Interior treatments" },
  { name: "Remmers",   role: "Exterior finishes" },
  { name: "Würth",     role: "Hardware & fasteners" },
  { name: "Skamet",    role: "Wood stoves" },
  { name: "LIAA",      role: "Innovation incubator" },
];
