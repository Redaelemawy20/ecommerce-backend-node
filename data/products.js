const products = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000.00,
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    rating: 3,
    reviewCount: 5,
    sizes: ["XL", "L", "SM"],
    colors: ["#816DFA", "#000000", "#B88E2F"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Asgaard sofa main view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Asgaard sofa side view"
      },
      {
        id: 3,
        url: "https://via.placeholder.com/600x400",
        alt: "Asgaard sofa detail view"
      }
    ],
    category: "Sofa",
    sku: "SS001",
    tags: ["sofa", "furniture", "living room"],
    stock: 5,
    dimensions: {
      width: 100,
      height: 80,
      depth: 90
    }
  },
  {
    id: 2,
    name: "Syltherine",
    price: 350000.00,
    description: "Luxury big sofa 2-seat with modern design and premium quality materials, perfect for your living room.",
    rating: 4,
    reviewCount: 8,
    sizes: ["XL", "L", "SM"],
    colors: ["#816DFA", "#000000", "#B88E2F"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Syltherine main view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Syltherine side view"
      }
    ],
    category: "Sofa",
    sku: "SS002",
    tags: ["sofa", "furniture", "living room"],
    stock: 3,
    dimensions: {
      width: 120,
      height: 85,
      depth: 95
    }
  },
  {
    id: 3,
    name: "Leviosa Dining Chair",
    price: 145000.00,
    description: "Elegant dining chair with premium upholstery and ergonomic design, perfect for long dinner conversations.",
    rating: 5,
    reviewCount: 12,
    sizes: ["L", "SM"],
    colors: ["#A1662F", "#000000", "#D7B98E"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Leviosa chair front view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Leviosa chair side view"
      }
    ],
    category: "Chair",
    sku: "DC003",
    tags: ["chair", "furniture", "dining room"],
    stock: 8,
    dimensions: {
      width: 45,
      height: 95,
      depth: 50
    }
  },
  {
    id: 4,
    name: "Lolito Coffee Table",
    price: 180000.00,
    description: "Modern coffee table with sleek design and durable construction, featuring storage compartments.",
    rating: 4,
    reviewCount: 6,
    sizes: ["L", "SM"],
    colors: ["#B88E2F", "#000000", "#FFFFFF"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Lolito table top view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Lolito table side view"
      }
    ],
    category: "Table",
    sku: "CT004",
    tags: ["table", "furniture", "living room"],
    stock: 4,
    dimensions: {
      width: 120,
      height: 45,
      depth: 60
    }
  },
  {
    id: 5,
    name: "Respira Bookshelf",
    price: 290000.00,
    description: "Contemporary bookshelf with adjustable shelves and minimal design, perfect for modern homes.",
    rating: 4,
    reviewCount: 9,
    sizes: ["XL", "L"],
    colors: ["#816DFA", "#B88E2F", "#000000"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Respira bookshelf front view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Respira bookshelf detail view"
      }
    ],
    category: "Storage",
    sku: "BS005",
    tags: ["bookshelf", "furniture", "storage"],
    stock: 2,
    dimensions: {
      width: 180,
      height: 200,
      depth: 40
    }
  },
  {
    id: 6,
    name: "Grifo Bed Frame",
    price: 420000.00,
    description: "Luxurious king-size bed frame with premium upholstery and built-in storage.",
    rating: 5,
    reviewCount: 15,
    sizes: ["King", "Queen"],
    colors: ["#B88E2F", "#816DFA", "#000000"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Grifo bed front view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Grifo bed side view"
      }
    ],
    category: "Bedroom",
    sku: "BF006",
    tags: ["bed", "furniture", "bedroom"],
    stock: 3,
    dimensions: {
      width: 200,
      height: 120,
      depth: 210
    }
  },
  {
    id: 7,
    name: "Muggo Side Table",
    price: 85000.00,
    description: "Compact side table with modern design, perfect for small spaces and bedside use.",
    rating: 4,
    reviewCount: 7,
    sizes: ["SM"],
    colors: ["#000000", "#B88E2F", "#FFFFFF"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Muggo table top view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Muggo table side view"
      }
    ],
    category: "Table",
    sku: "ST007",
    tags: ["table", "furniture", "bedroom"],
    stock: 10,
    dimensions: {
      width: 45,
      height: 55,
      depth: 45
    }
  },
  {
    id: 8,
    name: "Pingky Wardrobe",
    price: 550000.00,
    description: "Spacious wardrobe with multiple compartments and full-length mirror, built for modern living.",
    rating: 4,
    reviewCount: 11,
    sizes: ["XL", "L"],
    colors: ["#B88E2F", "#000000"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Pingky wardrobe front view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Pingky wardrobe interior view"
      }
    ],
    category: "Storage",
    sku: "WD008",
    tags: ["wardrobe", "furniture", "bedroom"],
    stock: 2,
    dimensions: {
      width: 180,
      height: 220,
      depth: 60
    }
  },
  {
    id: 9,
    name: "Potty Ottoman",
    price: 75000.00,
    description: "Versatile ottoman that serves as both seating and storage, with premium fabric upholstery.",
    rating: 4,
    reviewCount: 6,
    sizes: ["L", "SM"],
    colors: ["#816DFA", "#B88E2F", "#000000"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Potty ottoman front view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Potty ottoman open view"
      }
    ],
    category: "Seating",
    sku: "OT009",
    tags: ["ottoman", "furniture", "living room"],
    stock: 6,
    dimensions: {
      width: 60,
      height: 45,
      depth: 60
    }
  },
  {
    id: 10,
    name: "Stellar TV Unit",
    price: 320000.00,
    description: "Contemporary TV unit with cable management and ample storage space for entertainment systems.",
    rating: 5,
    reviewCount: 14,
    sizes: ["XL", "L"],
    colors: ["#B88E2F", "#000000", "#FFFFFF"],
    images: [
      {
        id: 1,
        url: "https://via.placeholder.com/600x400",
        alt: "Stellar TV unit front view"
      },
      {
        id: 2,
        url: "https://via.placeholder.com/600x400",
        alt: "Stellar TV unit detail view"
      }
    ],
    category: "Storage",
    sku: "TU010",
    tags: ["tv unit", "furniture", "living room"],
    stock: 4,
    dimensions: {
      width: 200,
      height: 60,
      depth: 45
    }
  }
];

module.exports = products;
