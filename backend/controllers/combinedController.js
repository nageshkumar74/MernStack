const axios = require('axios');
const { query } = require('express');

exports.getCombinedData = async (req, res) => {
    const { month } = req.query;
    console.log(query);

    try {
        // Fetch data from the existing APIs
        const [transactions, stats, barChart, pieChart] = await Promise.all([
            axios.get(`http://localhost:5000/api/transactions`, { params: { month } }),
            axios.get(`http://localhost:5000/api/stats`, { params: { month } }),
            axios.get(`http://localhost:5000/api/barChart`, { params: { month } }),
            axios.get(`http://localhost:5000/api/pieChart`, { params: { month } }),
        ]);

        // Combine the data
        res.json({
            transactions: transactions.data,
            statistics: stats.data,
            barChart: barChart.data,
            pieChart: pieChart.data,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching combined data', details: error.message });
    }
};
