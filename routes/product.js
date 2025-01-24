const express = require('express');
const router = express.Router();
const products = require('../data/products');

// Product data array
// const products = [
//   {
//     id: 1,
//     name: "Asgaard sofa",
//     price: 250000.00,
//     description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
//     rating: 3,
//     reviewCount: 5,
//     sizes: ["XL", "L", "SM"],
//     colors: ["#816DFA", "#000000", "#B88E2F"],
//     images: [
//       {
//         id: 1,
//         url: "https://via.placeholder.com/600x400",
//         alt: "Asgaard sofa main view"
//       },
//       {
//         id: 2,
//         url: "https://via.placeholder.com/600x400",
//         alt: "Asgaard sofa side view"
//       },
//       {
//         id: 3,
//         url: "https://via.placeholder.com/600x400",
//         alt: "Asgaard sofa detail view"
//       }
//     ],
//     category: "Sofa",
//     sku: "SS001",
//     tags: ["sofa", "furniture", "living room"],
//     stock: 5,
//     dimensions: {
//       width: 100,
//       height: 80,
//       depth: 90
//     }
//   },
//   {
//     id: 2,
//     name: "Syltherine",
//     price: 350000.00,
//     description: "Luxury big sofa 2-seat with modern design and premium quality materials, perfect for your living room.",
//     rating: 4,
//     reviewCount: 8,
//     sizes: ["XL", "L", "SM"],
//     colors: ["#816DFA", "#000000", "#B88E2F"],
//     images: [
//       {
//         id: 1,
//         url: "https://via.placeholder.com/600x400",
//         alt: "Syltherine main view"
//       },
//       {
//         id: 2,
//         url: "https://via.placeholder.com/600x400",
//         alt: "Syltherine side view"
//       }
//     ],
//     category: "Sofa",
//     sku: "SS002",
//     tags: ["sofa", "furniture", "living room"],
//     stock: 3,
//     dimensions: {
//       width: 120,
//       height: 85,
//       depth: 95
//     }
//   }
// ];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

module.exports = router;
