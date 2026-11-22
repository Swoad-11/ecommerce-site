import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../assets/index";

// Demo catalogue. Every page reads products from here, so swapping this
// file for an API call later only touches `getProducts`/`getProductBySlug`.
export const products = [
  {
    id: "1011",
    slug: "fantech-mars-ii-hq54-wired-gaming-headset",
    name: "Fantech MARS II HQ54 Wired Gaming Headset",
    category: "headphone",
    brand: "Fantech",
    price: 24.99,
    oldPrice: 29.99,
    stock: 18,
    color: "Black & White",
    img: bestSellerOne,
    rating: 4.4,
    tags: ["bestSeller"],
    description:
      "A lightweight wired gaming headset with 50mm drivers, a flexible noise-reducing mic and soft memory-foam ear cushions for long sessions.",
    specs: {
      Driver: "50mm",
      Connectivity: "3.5mm jack",
      Microphone: "Omnidirectional, flexible boom",
      Weight: "260g",
    },
  },
  {
    id: "1012",
    slug: "pico-neo-3-all-in-one-vr-headset",
    name: "Pico Neo 3 8GB RAM 256GB All-In-One VR Headset",
    category: "vr",
    brand: "Pico",
    price: 399,
    stock: 6,
    color: "Gray",
    img: bestSellerTwo,
    rating: 4.6,
    tags: ["bestSeller"],
    description:
      "Standalone VR headset with 6DoF tracking, two motion controllers and a 4K display. No PC or cables needed.",
    specs: {
      RAM: "8GB",
      Storage: "256GB",
      Display: "5.5\" 4K (3664 × 1920)",
      "Refresh rate": "90Hz",
    },
  },
  {
    id: "1013",
    slug: "dual-battery-folding-camera-drone",
    name: "Dual Battery Folding Camera Toy Drone",
    category: "action-camera",
    brand: "Generic",
    price: 59,
    oldPrice: 75,
    stock: 25,
    color: "Mixed",
    img: bestSellerThree,
    rating: 4.0,
    tags: ["bestSeller", "new"],
    description:
      "Beginner-friendly foldable drone with an HD camera, altitude hold, one-key take-off and two batteries for double the flight time.",
    specs: {
      Camera: "720p HD",
      "Flight time": "Up to 2 × 12 min",
      Range: "Up to 80m",
      Controller: "2.4GHz remote + phone app",
    },
  },
  {
    id: "1014",
    slug: "infocus-inf8650-86-inch-4k-interactive-display",
    name: "InFocus INF8650 86-inch 4K Interactive Touch Display",
    category: "conference-system",
    brand: "InFocus",
    price: 4999,
    stock: 2,
    color: "Black",
    img: bestSellerFour,
    rating: 4.7,
    tags: ["bestSeller"],
    description:
      "An 86-inch 4K touch display for meeting rooms and classrooms, with multi-touch writing, built-in speakers and wireless screen sharing.",
    specs: {
      Size: "86\"",
      Resolution: "3840 × 2160",
      Touch: "20-point multi-touch",
      Ports: "HDMI, USB, LAN",
    },
  },
  {
    id: "1101",
    slug: "a4tech-bloody-m590i-gaming-headphone",
    name: "A4tech Bloody M590i Gaming Headphone",
    category: "headphone",
    brand: "A4tech",
    price: 39,
    oldPrice: 49,
    stock: 12,
    color: "Black & Red",
    img: spfOne,
    rating: 4.3,
    tags: ["specialOffer"],
    description:
      "7.1 virtual surround gaming headphone with RGB lighting, a noise-cancelling mic and over-ear cushions.",
    specs: {
      Sound: "Virtual 7.1 surround",
      Connectivity: "USB",
      Lighting: "RGB",
      Microphone: "Noise-cancelling",
    },
  },
  {
    id: "1102",
    slug: "ps4-dualshock-4-wireless-controller-steel-glacier-white",
    name: "PS4 DualShock 4 Wireless Controller Glacier White",
    category: "gaming-console",
    brand: "Sony",
    price: 54.99,
    oldPrice: 64.99,
    stock: 0,
    color: "Glacier White",
    img: spfTwo,
    rating: 4.8,
    tags: ["specialOffer"],
    description:
      "The official wireless controller for PlayStation 4, with a touch pad, light bar, built-in speaker and rechargeable battery.",
    specs: {
      Connectivity: "Bluetooth, Micro-USB",
      Battery: "Rechargeable Li-ion",
      Features: "Touch pad, motion sensor, speaker",
      Platform: "PlayStation 4",
    },
  },
  {
    id: "1103",
    slug: "mibro-watch-gs-gps-sports-smart-watch",
    name: "Mibro Watch GS GPS Sports Smart Watch",
    category: "smart-watch",
    brand: "Mibro",
    price: 89,
    oldPrice: 109,
    stock: 14,
    color: "Black",
    img: spfThree,
    rating: 4.2,
    tags: ["specialOffer"],
    description:
      "AMOLED sports watch with built-in GPS, heart-rate and SpO2 tracking, 100+ sport modes and up to two weeks of battery.",
    specs: {
      Display: "1.43\" AMOLED",
      GPS: "Built-in",
      "Water resistance": "5 ATM",
      Battery: "Up to 14 days",
    },
  },
  {
    id: "1104",
    slug: "hoco-hc9-dazzling-pulse-bluetooth-speaker",
    name: "Hoco HC9 Dazzling Pulse Wireless Bluetooth Speaker",
    category: "bluetooth-speaker",
    brand: "Hoco",
    price: 29,
    oldPrice: 35,
    stock: 30,
    color: "Black",
    img: spfFour,
    rating: 4.1,
    tags: ["specialOffer"],
    description:
      "Portable Bluetooth speaker with pulsing RGB lights, deep bass, TF card and USB playback, and FM radio.",
    specs: {
      Bluetooth: "5.0",
      Output: "10W",
      Playback: "BT, TF card, USB, FM",
      Battery: "Up to 6 hours",
    },
  },
  {
    id: "1201",
    slug: "asus-expertbook-b1-business-laptop",
    name: "ASUS ExpertBook B1 15.6\" Business Laptop",
    category: "laptop",
    brand: "ASUS",
    price: 749,
    stock: 9,
    color: "Star Black",
    img: newArrOne,
    rating: 4.5,
    tags: ["new"],
    description:
      "A durable 15.6-inch business laptop with an Intel Core processor, fast SSD storage and a spill-resistant keyboard.",
    specs: {
      Processor: "Intel Core i5",
      RAM: "8GB DDR4",
      Storage: "512GB NVMe SSD",
      Display: "15.6\" FHD",
    },
  },
  {
    id: "1202",
    slug: "amazfit-t-rex-ultra-smart-watch",
    name: "Amazfit T-Rex Ultra Rugged Smart Watch",
    category: "smart-watch",
    brand: "Amazfit",
    price: 399,
    stock: 7,
    color: "Abyss Black",
    img: newArrTwo,
    rating: 4.6,
    tags: ["new"],
    description:
      "Military-grade outdoor smartwatch with dual-band GPS, offline maps and a battery that lasts up to 20 days.",
    specs: {
      Display: "1.39\" AMOLED",
      GPS: "Dual-band, 6 systems",
      "Water resistance": "10 ATM",
      Battery: "Up to 20 days",
    },
  },
  {
    id: "1203",
    slug: "hp-ink-tank-315-all-in-one-printer",
    name: "HP Ink Tank 315 All-in-One Printer",
    category: "printer",
    brand: "HP",
    price: 179,
    oldPrice: 199,
    stock: 11,
    color: "Black",
    img: newArrThree,
    rating: 4.2,
    tags: ["new"],
    description:
      "Print, scan and copy with refillable ink tanks that deliver thousands of pages at a low cost per page.",
    specs: {
      Functions: "Print, scan, copy",
      "Print speed": "Up to 19 ppm (black)",
      Connectivity: "USB",
      Yield: "Up to 8,000 colour pages",
    },
  },
  {
    id: "1204",
    slug: "arktek-geforce-gt-740-2gb-graphics-card",
    name: "Arktek GeForce GT 740 2GB Graphics Card",
    category: "gpu",
    brand: "Arktek",
    price: 89,
    stock: 4,
    color: "Black",
    img: newArrFour,
    rating: 3.9,
    tags: ["new"],
    description:
      "An entry-level NVIDIA graphics card for HD video, multi-monitor setups and light gaming.",
    specs: {
      GPU: "NVIDIA GeForce GT 740",
      Memory: "2GB",
      Outputs: "HDMI, DVI, VGA",
      Interface: "PCI Express 3.0",
    },
  },
];

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);

export const getProductsByTag = (tag) =>
  products.filter((p) => p.tags.includes(tag));

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id)
    .sort(
      (a, b) =>
        (b.category === product.category) - (a.category === product.category)
    )
    .slice(0, limit);

export const discountPercent = (p) =>
  p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;

export const formatPrice = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n
  );
