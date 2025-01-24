const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/', (req, res) => {
  const simplifiedProducts = products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    rating: product.rating,
    reviewCount: product.reviewCount,
    image: product.images[0].url, // Only return the main image URL
    category: product.category,
    stock: product.stock
  }));
  
  res.json(simplifiedProducts);
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
