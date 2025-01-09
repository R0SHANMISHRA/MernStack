const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  const { month } = req.query;

  try {
    const [transactions, statistics, barChart, pieChart] = await Promise.all([
      axios.get(`http://localhost:5000/transactions?month=${month}`),
      axios.get(`http://localhost:5000/statistics?month=${month}`),
      axios.get(`http://localhost:5000/bar-chart?month=${month}`),
      axios.get(`http://localhost:5000/pie-chart?month=${month}`),
    ]);

    res.json({
      transactions: transactions.data,
      statistics: statistics.data,
      barChart: barChart.data,
      pieChart: pieChart.data,
    });
  } catch (error) {
    res.status(500).send('Error fetching combined data');
  }
});

module.exports = router;