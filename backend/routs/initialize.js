const express = require('express');
const axios = require('axios');
const Product = require('../models/product');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Product.insertMany(response.data);
    res.send('Database initialized with seed data');
  } catch (error) {
    res.status(500).send('Error initializing database');
  }
});

module.exports = router;