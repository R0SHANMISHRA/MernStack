const express = require('express');
const mongoose = require('mongoose');
const initializeRoutes = require('./routes/initialize');
const transactionsRoutes = require('./routes/transactions');
const statisticsRoutes = require('./routes/statistics');
const barChartRoutes = require('./routes/barChart');
const pieChartRoutes = require('./routes/pieChart');
const combinedDataRoutes = require('./routes/combinedData');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mern_challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/initialize', initializeRoutes);
app.use('/transactions', transactionsRoutes);
app.use('/statistics', statisticsRoutes);
app.use('/bar-chart', barChartRoutes);
app.use('/pie-chart', pieChartRoutes);
app.use('/combined-data', combinedDataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
