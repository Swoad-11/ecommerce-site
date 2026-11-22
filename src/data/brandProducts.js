// Products for every brand in "Shop by Brands", plus items that fill the
// remaining categories. Images are the brands' official product photos.
import acerAspire7 from "../assets/products/catalog/acer-aspire7.webp";
import acerHelios from "../assets/products/catalog/acer-helios.webp";
import acerSwiftGo from "../assets/products/catalog/acer-swiftgo.webp";
import lenovoLegion from "../assets/products/catalog/lenovo-legion.webp";
import lenovoIdeapad from "../assets/products/catalog/lenovo-ideapad.webp";
import lenovoGo from "../assets/products/catalog/lenovo-go.webp";
import waltonN28 from "../assets/products/catalog/walton-n28.webp";
import waltonN77 from "../assets/products/catalog/walton-n77.webp";
import waltonTv from "../assets/products/catalog/walton-tv.webp";
import msSurface from "../assets/products/catalog/ms-surface.webp";
import msXbox from "../assets/products/catalog/ms-xbox.webp";
import msController from "../assets/products/catalog/ms-controller.webp";
import dellXps13 from "../assets/products/catalog/dell-xps13.webp";
import dellEarbuds from "../assets/products/catalog/dell-earbuds.webp";
import dellBattery from "../assets/products/catalog/dell-battery.webp";
import hpOmen16 from "../assets/products/catalog/hp-omen16.webp";
import hpVictus15 from "../assets/products/catalog/hp-victus15.webp";
import hpSmartTank from "../assets/products/catalog/hp-smarttank.webp";
import tosh43 from "../assets/products/catalog/tosh-43.webp";
import tosh50 from "../assets/products/catalog/tosh-50.webp";
import tosh55 from "../assets/products/catalog/tosh-55.webp";
import gb4060 from "../assets/products/catalog/gb-4060.webp";
import gb7600 from "../assets/products/catalog/gb-7600.webp";
import gbG5 from "../assets/products/catalog/gb-g5.webp";
import asusZenbook from "../assets/products/catalog/asus-zenbook.webp";
import asusRouter from "../assets/products/catalog/asus-router.webp";
import asusRogPhone from "../assets/products/catalog/asus-rogphone.webp";
import ecoflowRiver2 from "../assets/products/catalog/ecoflow.webp";

export const brandProducts = [
  // ---------- Acer ----------
  {
    id: "2001",
    slug: "acer-predator-helios-neo-16-ai-gaming-laptop",
    name: "Acer Predator Helios Neo 16 AI Gaming Laptop",
    category: "laptop",
    brand: "Acer",
    price: 1799.99,
    stock: 6,
    color: "Abyssal Black",
    img: acerHelios,
    rating: 4.7,
    tags: ["bestSeller"],
    description:
      "A 16-inch gaming laptop with an Intel Core Ultra 7 processor, GeForce RTX 50 Series graphics and a fast 240Hz WQXGA display.",
    specs: {
      Processor: "Intel Core Ultra 7 255HX",
      Graphics: "NVIDIA GeForce RTX 5070 Laptop GPU",
      RAM: "16GB DDR5",
      Storage: "1TB SSD",
      Display: "16\" WQXGA IPS, 240Hz",
    },
  },
  {
    id: "2002",
    slug: "acer-swift-go-14-laptop",
    name: "Acer Swift Go 14 Laptop",
    category: "laptop",
    brand: "Acer",
    price: 849.99,
    oldPrice: 949.99,
    stock: 10,
    color: "Pure Silver",
    img: acerSwiftGo,
    rating: 4.4,
    tags: ["specialOffer"],
    description:
      "A thin and light 14-inch AI laptop with Intel Core Ultra power, a touchscreen and Wi-Fi 7 for work on the move.",
    specs: {
      Processor: "Intel Core Ultra 7 155H",
      RAM: "16GB LPDDR5X",
      Storage: "512GB SSD",
      Display: "14\" WUXGA touchscreen",
      Wireless: "Killer Wi-Fi 7",
    },
  },
  {
    id: "2003",
    slug: "acer-aspire-7-laptop",
    name: "Acer Aspire 7 15.6\" Laptop",
    category: "laptop",
    brand: "Acer",
    price: 749.99,
    stock: 12,
    color: "Charcoal Black",
    img: acerAspire7,
    rating: 4.2,
    tags: [],
    description:
      "An everyday 15.6-inch laptop with a 12th Gen Intel Core processor, a backlit keyboard and a fingerprint reader.",
    specs: {
      Processor: "Intel Core i7 (12th Gen)",
      RAM: "16GB DDR4",
      Storage: "512GB SSD",
      Display: "15.6\" Full HD IPS",
      Security: "Fingerprint reader",
    },
  },

  // ---------- Lenovo ----------
  {
    id: "2011",
    slug: "lenovo-legion-slim-5-gen-9-16-inch",
    name: "Lenovo Legion Slim 5 Gen 9 16\" Gaming Laptop",
    category: "laptop",
    brand: "Lenovo",
    price: 1299.99,
    oldPrice: 1449.99,
    stock: 7,
    color: "Luna Grey",
    img: lenovoLegion,
    rating: 4.6,
    tags: ["specialOffer"],
    description:
      "A slim 16-inch gaming laptop with an AMD Ryzen 8040 Series processor, GeForce RTX 40 Series graphics and a high-refresh display.",
    specs: {
      Processor: "AMD Ryzen 7 8845HS",
      Graphics: "NVIDIA GeForce RTX 4060 Laptop GPU",
      RAM: "16GB DDR5",
      Storage: "1TB SSD",
      Display: "16\" WQXGA, up to 240Hz",
    },
  },
  {
    id: "2012",
    slug: "lenovo-ideapad-slim-5-14-inch",
    name: "Lenovo IdeaPad Slim 5 14\" Laptop",
    category: "laptop",
    brand: "Lenovo",
    price: 699.99,
    stock: 15,
    color: "Abyss Blue",
    img: lenovoIdeapad,
    rating: 4.4,
    tags: [],
    description:
      "A sleek and durable 14-inch laptop with an AMD Ryzen processor, a bright display and Dolby Audio speakers.",
    specs: {
      Processor: "AMD Ryzen 7 8845HS",
      RAM: "16GB LPDDR5x",
      Storage: "512GB SSD",
      Display: "14\" WUXGA",
      Audio: "Dolby Audio",
    },
  },
  {
    id: "2013",
    slug: "lenovo-legion-go-handheld-gaming-pc",
    name: "Lenovo Legion Go Handheld Gaming PC",
    category: "gaming-console",
    brand: "Lenovo",
    price: 699.99,
    stock: 5,
    color: "Shadow Black",
    img: lenovoGo,
    rating: 4.5,
    tags: ["new"],
    description:
      "A Windows handheld gaming PC with an 8.8-inch QHD+ screen and detachable controllers that play your PC game library anywhere.",
    specs: {
      Processor: "AMD Ryzen Z1 Extreme",
      RAM: "16GB LPDDR5X",
      Storage: "512GB SSD",
      Display: "8.8\" QHD+, 144Hz",
      Controllers: "Detachable",
    },
  },

  // ---------- Walton ----------
  {
    id: "2021",
    slug: "walton-nexg-n28",
    name: "Walton NEXG N28 Smartphone (8GB/128GB)",
    category: "mobile-phone",
    brand: "Walton",
    price: 169,
    stock: 25,
    color: "Blue",
    img: waltonN28,
    rating: 4.2,
    tags: ["new"],
    description:
      "A big-battery smartphone with a 6.7-inch 120Hz display, a 50MP camera and expandable storage.",
    specs: {
      Processor: "MediaTek Helio G81",
      Memory: "8GB RAM / 128GB storage",
      Display: "6.7\" HD+ IPS, 120Hz",
      Camera: "50MP rear",
      Battery: "6000mAh",
    },
  },
  {
    id: "2022",
    slug: "walton-nexg-n77",
    name: "Walton NEXG N77 Smartphone",
    category: "mobile-phone",
    brand: "Walton",
    price: 155,
    stock: 20,
    color: "Green",
    img: waltonN77,
    rating: 4.1,
    tags: [],
    description:
      "A 6.8-inch Android smartphone with a 6000mAh battery and 18W fast charging.",
    specs: {
      Processor: "MediaTek Helio G81",
      Display: "6.8\"",
      Battery: "6000mAh",
      Charging: "18W",
    },
  },
  {
    id: "2023",
    slug: "walton-vivi-q-43r-4k-google-tv",
    name: "Walton Vivi Q 43R 4K QLED Google TV (W43G5R)",
    category: "tv",
    brand: "Walton",
    price: 449,
    stock: 9,
    color: "Black",
    img: waltonTv,
    rating: 4.3,
    tags: [],
    description:
      "A 43-inch 4K QLED+ Google TV with a voice remote and all your streaming apps built in.",
    specs: {
      Size: "43\"",
      Panel: "4K QLED+",
      Platform: "Google TV (Android 14)",
      Memory: "2GB RAM / 32GB storage",
      Remote: "Voice remote",
    },
  },

  // ---------- Microsoft ----------
  {
    id: "2031",
    slug: "microsoft-surface-laptop-13-8-inch",
    name: "Microsoft Surface Laptop 13.8\" Copilot+ PC",
    category: "laptop",
    brand: "Microsoft",
    price: 1199.99,
    oldPrice: 1399.99,
    stock: 8,
    color: "Sapphire",
    img: msSurface,
    rating: 4.7,
    tags: ["specialOffer"],
    description:
      "Microsoft's thin aluminium Copilot+ PC with a Snapdragon X processor, a 13.8-inch PixelSense touchscreen and all-day battery life.",
    specs: {
      Processor: "Snapdragon X Plus",
      RAM: "16GB",
      Storage: "512GB SSD",
      Display: "13.8\" PixelSense touchscreen",
      OS: "Windows 11",
    },
  },
  {
    id: "2032",
    slug: "xbox-series-x-1tb",
    name: "Xbox Series X 1TB Console",
    category: "gaming-console",
    brand: "Microsoft",
    price: 599.99,
    stock: 6,
    color: "Black",
    img: msXbox,
    rating: 4.8,
    tags: ["bestSeller"],
    description:
      "The fastest, most powerful Xbox, with true 4K gaming, up to 120 frames per second and a 1TB custom SSD.",
    specs: {
      Storage: "1TB custom NVMe SSD",
      Resolution: "True 4K",
      Performance: "Up to 120 FPS",
      Drive: "4K UHD Blu-ray",
    },
  },
  {
    id: "2033",
    slug: "xbox-wireless-controller-carbon-black",
    name: "Xbox Wireless Controller – Carbon Black",
    category: "gaming-console",
    brand: "Microsoft",
    price: 54.99,
    oldPrice: 64.99,
    stock: 30,
    color: "Carbon Black",
    img: msController,
    rating: 4.7,
    tags: ["specialOffer"],
    description:
      "The official Xbox controller with textured grips, a hybrid D-pad and a Share button. Works with Xbox, Windows PC, Android and iOS.",
    specs: {
      Connectivity: "Xbox Wireless, Bluetooth, USB-C",
      Battery: "2 × AA, up to 40 hours",
      Compatibility: "Xbox Series X|S, Xbox One, Windows, Android, iOS",
    },
  },

  // ---------- Dell ----------
  {
    id: "2041",
    slug: "dell-xps-13-9350",
    name: "Dell XPS 13 9350 Laptop",
    category: "laptop",
    brand: "Dell",
    price: 1399.99,
    stock: 6,
    color: "Platinum",
    img: dellXps13,
    rating: 4.6,
    tags: [],
    description:
      "Dell's thin and light 13-inch laptop with an Intel Core Ultra processor, a CNC aluminium chassis and a 13.4-inch touch display.",
    specs: {
      Processor: "Intel Core Ultra 7",
      RAM: "16GB LPDDR5X",
      Storage: "512GB SSD",
      Display: "13.4\" touch display",
      Weight: "About 2.6 lb",
    },
  },
  {
    id: "2042",
    slug: "dell-pro-plus-earbuds-eb525",
    name: "Dell Pro Plus Earbuds EB525",
    category: "earphone",
    brand: "Dell",
    price: 168.99,
    oldPrice: 179.99,
    stock: 14,
    color: "Black",
    img: dellEarbuds,
    rating: 4.3,
    tags: ["new"],
    description:
      "True wireless earbuds with adaptive noise cancelling and an AI noise-cancelling mic, certified for Microsoft Teams and Zoom.",
    specs: {
      "Noise cancelling": "Adaptive ANC",
      Bluetooth: "5.3 + USB receiver",
      "Listening time": "Up to 8h (33h with case)",
      Rating: "IP54",
    },
  },
  {
    id: "2043",
    slug: "dell-4-cell-54wh-replacement-battery",
    name: "Dell 4-cell 54 Wh Replacement Laptop Battery",
    category: "laptop-battery",
    brand: "Dell",
    price: 124.99,
    stock: 18,
    color: "Black",
    img: dellBattery,
    rating: 4.4,
    tags: [],
    description:
      "Genuine Dell replacement battery for select Inspiron, Latitude and Vostro laptops. Check your model before ordering.",
    specs: {
      Capacity: "54 Wh",
      Cells: "4-cell lithium-ion",
      Voltage: "15 V DC",
      "Part number": "XDY9K",
    },
  },

  // ---------- HP ----------
  {
    id: "2051",
    slug: "hp-omen-16-gaming-laptop",
    name: "HP OMEN 16 Gaming Laptop",
    category: "laptop",
    brand: "HP",
    price: 1799.99,
    stock: 5,
    color: "Shadow Black",
    img: hpOmen16,
    rating: 4.5,
    tags: ["bestSeller"],
    description:
      "A 16-inch gaming laptop with an AMD Ryzen processor, GeForce RTX 50 Series graphics and a smooth high-refresh display.",
    specs: {
      Processor: "AMD Ryzen 9",
      Graphics: "NVIDIA GeForce RTX 5060 Laptop GPU",
      RAM: "32GB DDR5",
      Storage: "1TB SSD",
      Display: "16\" WQXGA, up to 240Hz",
    },
  },
  {
    id: "2052",
    slug: "hp-victus-15-gaming-laptop",
    name: "HP Victus 15.6\" Gaming Laptop",
    category: "laptop",
    brand: "HP",
    price: 899.99,
    oldPrice: 999.99,
    stock: 11,
    color: "Mica Silver",
    img: hpVictus15,
    rating: 4.3,
    tags: ["specialOffer"],
    description:
      "An affordable 15.6-inch gaming laptop with an AMD Ryzen 7 processor and dedicated graphics for 1080p gaming.",
    specs: {
      Processor: "AMD Ryzen 7 7445H",
      RAM: "12GB",
      Storage: "512GB SSD",
      Display: "15.6\" Full HD",
    },
  },
  {
    id: "2053",
    slug: "hp-smart-tank-580-all-in-one-printer",
    name: "HP Smart Tank 580 All-in-One Printer",
    category: "printer",
    brand: "HP",
    price: 169,
    stock: 13,
    color: "White",
    img: hpSmartTank,
    rating: 4.3,
    tags: [],
    description:
      "A wireless print, scan and copy ink tank printer that comes with enough ink for thousands of pages.",
    specs: {
      Functions: "Print, scan, copy",
      "Print speed": "Up to 12 ppm black / 5 ppm color",
      Connectivity: "Wi-Fi, Bluetooth, USB",
      "Ink included": "Up to 8,000 black / 6,000 color pages",
    },
  },

  // ---------- Toshiba ----------
  {
    id: "2061",
    slug: "toshiba-43qa4c-43-inch-4k-uhd-tv",
    name: "Toshiba 43\" 4K UHD Android TV (43QA4C)",
    category: "tv",
    brand: "Toshiba",
    price: 349,
    stock: 10,
    color: "Black",
    img: tosh43,
    rating: 4.2,
    tags: [],
    description:
      "A 43-inch 4K UHD smart TV with HDR and Dolby Vision, running Android TV with Google Assistant built in.",
    specs: {
      Size: "43\"",
      Resolution: "3840 × 2160",
      HDR: "HDR10, Dolby Vision",
      Platform: "Android TV",
    },
  },
  {
    id: "2062",
    slug: "toshiba-50ua6b-50-inch-4k-uhd-tv",
    name: "Toshiba 50\" 4K UHD Smart TV (50UA6B)",
    category: "tv",
    brand: "Toshiba",
    price: 399,
    oldPrice: 449,
    stock: 8,
    color: "Black",
    img: tosh50,
    rating: 4.1,
    tags: ["specialOffer"],
    description:
      "A 50-inch 4K Ultra HD smart TV with HDR support and popular streaming apps.",
    specs: {
      Size: "50\"",
      Resolution: "3840 × 2160",
      HDR: "Yes",
      Platform: "Android TV",
    },
  },
  {
    id: "2063",
    slug: "toshiba-55qa4c-55-inch-4k-uhd-tv",
    name: "Toshiba 55\" 4K UHD Android TV (55QA4C)",
    category: "tv",
    brand: "Toshiba",
    price: 499,
    stock: 6,
    color: "Black",
    img: tosh55,
    rating: 4.3,
    tags: [],
    description:
      "A 55-inch 4K UHD smart TV with HDR, Dolby Vision and Android TV for a big-screen picture at a fair price.",
    specs: {
      Size: "55\"",
      Resolution: "3840 × 2160",
      HDR: "HDR10, Dolby Vision",
      Platform: "Android TV",
    },
  },

  // ---------- Gigabyte ----------
  {
    id: "2071",
    slug: "gigabyte-geforce-rtx-4060-windforce-oc-8g",
    name: "GIGABYTE GeForce RTX 4060 WINDFORCE OC 8G",
    category: "gpu",
    brand: "Gigabyte",
    price: 299.99,
    stock: 9,
    color: "Black",
    img: gb4060,
    rating: 4.6,
    tags: ["bestSeller"],
    description:
      "A compact RTX 4060 graphics card with DLSS 3 and GIGABYTE's WINDFORCE cooling for smooth 1080p gaming.",
    specs: {
      "Core clock": "2475 MHz",
      "CUDA cores": "3072",
      Memory: "8GB GDDR6, 128-bit",
      "Recommended PSU": "450W",
    },
  },
  {
    id: "2072",
    slug: "gigabyte-radeon-rx-7600-gaming-oc-8g",
    name: "GIGABYTE Radeon RX 7600 GAMING OC 8G",
    category: "gpu",
    brand: "Gigabyte",
    price: 259.99,
    oldPrice: 279.99,
    stock: 7,
    color: "Black",
    img: gb7600,
    rating: 4.4,
    tags: [],
    description:
      "An AMD Radeon RX 7600 card with triple-fan cooling, RGB Fusion lighting and a metal back plate.",
    specs: {
      "Boost clock": "Up to 2755 MHz",
      "Stream processors": "2048",
      Memory: "8GB GDDR6, 128-bit",
      "Recommended PSU": "550W",
    },
  },
  {
    id: "2073",
    slug: "gigabyte-g5-2024-gaming-laptop",
    name: "GIGABYTE G5 (2024) Gaming Laptop",
    category: "laptop",
    brand: "Gigabyte",
    price: 899.99,
    stock: 6,
    color: "Black",
    img: gbG5,
    rating: 4.2,
    tags: [],
    description:
      "A 15.6-inch gaming laptop with an Intel Core processor, GeForce RTX 40 Series graphics and a 144Hz display.",
    specs: {
      Processor: "Intel Core i5 (13th Gen)",
      Graphics: "NVIDIA GeForce RTX 4050 Laptop GPU",
      RAM: "16GB DDR5",
      Storage: "512GB SSD",
      Display: "15.6\" Full HD, 144Hz",
    },
  },

  // ---------- ASUS ----------
  {
    id: "2081",
    slug: "asus-zenbook-14-oled-ux3405",
    name: "ASUS Zenbook 14 OLED (UX3405)",
    category: "laptop",
    brand: "ASUS",
    price: 1599.99,
    oldPrice: 1799.99,
    stock: 7,
    color: "Foggy Silver",
    img: asusZenbook,
    rating: 4.6,
    tags: ["specialOffer"],
    description:
      "A premium 14-inch Copilot+ PC with a 3K 120Hz OLED touchscreen and an Intel Core Ultra 9 processor.",
    specs: {
      Processor: "Intel Core Ultra 9 285H",
      RAM: "32GB",
      Storage: "1TB SSD",
      Display: "14\" 3K OLED touch, 120Hz",
    },
  },
  {
    id: "2082",
    slug: "asus-rt-ax58u-ax3000-wifi-6-router",
    name: "ASUS RT-AX58U AX3000 Wi-Fi 6 Router",
    category: "router",
    brand: "ASUS",
    price: 129.99,
    stock: 16,
    color: "Black",
    img: asusRouter,
    rating: 4.5,
    tags: ["bestSeller"],
    description:
      "A dual-band Wi-Fi 6 router with AiMesh support and built-in AiProtection network security.",
    specs: {
      Standard: "Wi-Fi 6 (802.11ax)",
      Speed: "AX3000 dual-band",
      Mesh: "AiMesh compatible",
      Security: "AiProtection",
    },
  },
  {
    id: "2083",
    slug: "asus-rog-phone-9",
    name: "ASUS ROG Phone 9",
    category: "mobile-phone",
    brand: "ASUS",
    price: 999.99,
    stock: 4,
    color: "Storm White",
    img: asusRogPhone,
    rating: 4.7,
    tags: ["new"],
    description:
      "A flagship gaming phone with a Snapdragon 8 Elite chip, a 185Hz AMOLED display and the ROG AniMe Vision rear lighting.",
    specs: {
      Processor: "Snapdragon 8 Elite",
      Display: "6.78\" AMOLED, up to 185Hz",
      Battery: "5800mAh",
    },
  },

  // ---------- EcoFlow (fills the Power Station category) ----------
  {
    id: "2091",
    slug: "ecoflow-river-2-portable-power-station",
    name: "EcoFlow RIVER 2 Portable Power Station",
    category: "power-station",
    brand: "EcoFlow",
    price: 189,
    oldPrice: 239,
    stock: 12,
    color: "Grey",
    img: ecoflowRiver2,
    rating: 4.6,
    tags: ["specialOffer"],
    description:
      "A backpack-sized LFP power station that recharges from AC in about an hour and runs laptops, lights and small devices off-grid.",
    specs: {
      Capacity: "256Wh LFP",
      "AC output": "300W (600W X-Boost)",
      "AC recharge": "0–100% in about 60 min",
      Weight: "About 3.5 kg",
    },
  },
];
