import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
  const [month, setMonth] = useState('March');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/combined-data?month=${month}`);
      setData(data);
    };

    fetchData();
  }, [month]);

  return (
    <div>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        {/* Add more months */}
      </select>

      <TransactionsTable transactions={data.transactions} />
      <Statistics statistics={data.statistics} />
      <BarChart barChart={data.barChart} />
      <PieChart pieChart={data.pieChart} />
    </div>
  );
};

export default App;
