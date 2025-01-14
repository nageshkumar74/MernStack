const Product = require('../models/Product');

exports.pieChartController = async (req, res) => {
    const { month } = req.query;

    if (!month) {
        return res.status(400).json({ error: 'Month parameter is required.' });
    }

    try {
        const monthIndex = new Date(`${month} 1`).getMonth();

        const pieChartData = await Product.aggregate([
            {
                $match: {
                    dateOfSale: {
                        $gte: new Date(2023, monthIndex, 1),
                        $lt: new Date(2023, monthIndex + 1, 1),
                    },
                },
            },
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    category: '$_id',
                    count: 1,
                    _id: 0,
                },
            },
        ]);

        res.json(pieChartData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pie chart data', details: error.message });
    }
};
