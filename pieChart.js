const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', async (req, res) => {
  const { month } = req.query;
  const startDate = new Date(`2022-${month}-01`);
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);

  try {
    const pieChartData = await Product.aggregate([
      { $match: { dateOfSale: { $gte: startDate, $lt: endDate } } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
    ]);

    res.json(pieChartData);
  } catch (error) {
    res.status(500).send('Error fetching pie chart data');
  }
});

module.exports = router;