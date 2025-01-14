const Product = require('../models/Product');

exports.getStatistics = async (req, res) => {
    const { month } = req.query;

    if (!month) {
        return res.status(400).json({ error: "Month is required" });
    }

    const monthIndex = new Date(`${month} 1`).getMonth();
    const year = new Date().getFullYear();

    try {
        const stats = await Product.aggregate([
            {
                $match: {
                    dateOfSale: {
                        $gte: new Date(year, monthIndex, 1),
                        $lt: new Date(year, monthIndex + 1, 1),
                    },
                },
            },
            {
                $group: {
                    _id: "$sold",
                    totalAmount: { $sum: "$price" },
                    count: { $sum: 1 },
                },
            },
        ]);

        const totalSaleAmount = stats.find((item) => item._id === true)?.totalAmount || 0;
        const soldItemsCount = stats.find((item) => item._id === true)?.count || 0;
        const notSoldItemsCount = stats.find((item) => item._id === false)?.count || 0;

        res.json({ totalSaleAmount, soldItemsCount, notSoldItemsCount });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching statistics', details: error.message });
    }
};
