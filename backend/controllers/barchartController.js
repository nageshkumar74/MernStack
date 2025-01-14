const Product = require('../models/Product');

exports.barChartController = async (req, res) => {
    const { month } = req.query;
    const monthIndex = new Date(`${month} 1`).getMonth();

    const ranges = [
        { min: 0, max: 100 },
        { min: 101, max: 200 },
        { min: 201, max: 300 },
        { min: 301, max: 400 },
        { min: 401, max: 500 },
        { min: 501, max: 600 },
        { min: 601, max: 700 },
        { min: 701, max: 800 },
        { min: 801, max: 900 },
        { min: 901, max: Infinity },
    ];

    try {
        const barData = await Promise.all(
            ranges.map(async ({ min, max }) => ({
                range: `${min}-${max === Infinity ? 'above' : max}`,
                count: await Product.countDocuments({
                    price: { $gte: min, $lt: max },
                    dateOfSale: { $gte: new Date(2023, monthIndex, 1), $lt: new Date(2023, monthIndex + 1, 1) },
                }),
            }))
        );

        res.json(barData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bar chart data', details: error.message });
    }
};
