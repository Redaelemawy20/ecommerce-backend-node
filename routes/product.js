const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    {
      id: 1,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 3500,
      discount: 30,
      isNew: false,
      url: '/syltherine',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 2500,
      discount: null,
      isNew: false,
      url: '/Leviosa',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000,
      discount: 50,
      isNew: false,
      url: '/lolito',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 5000,
      discount: null,
      isNew: true,
      url: '/respira',
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Grifo',
      description: 'Night lamp',
      price: 1500,
      discount: null,
      isNew: false,
      url: '/grifo',
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Muggo',
      description: 'Small mug',
      price: 15000,
      discount: null,
      isNew: true,
      url: '/muggo',
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Pingky',
      description: 'Cute bed set',
      price: 14000,
      discount: 50,
      isNew: false,
      url: '/pingky',
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Potty',
      description: 'Minimalist flower pot',
      price: 50000,
      discount: null,
      isNew: true,
      url: '/potty',
    },
  ]);
});

router.get('/:id', (req, res) => {
  res.send(`Product details for product ID: ${req.params.id}`);
});

module.exports = router;
