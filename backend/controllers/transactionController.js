const Product = require('../models/Product');

exports.listTransactions = async (req, res) => {
    const { search = '', page = 1, perPage = 10, month } = req.query;

    try {
        if (!month) {
            return res.status(400).json({ error: 'Month parameter is required.' });
        }

        const monthIndex = new Date(`${month} 1`).getMonth();

        const query = {
            ...(month && {
                dateOfSale: {
                    $gte: new Date(2023, monthIndex, 1),
                    $lt: new Date(2023, monthIndex + 1, 1),
                },
            }),
            ...(search && {
                $or: [
                    { title: new RegExp(search, 'i') },
                    { description: new RegExp(search, 'i') },
                    ...(isNaN(search) ? [] : [{ price: Number(search) }]),
                ],
            }),
        };

        console.log("Query from listTransactions:", query);

        const skip = (page - 1) * perPage;

        const [transactions, totalRecords] = await Promise.all([
            Product.find(query).skip(skip).limit(Number(perPage)),
            Product.countDocuments(query),
        ]);

        res.json({ page: Number(page), perPage: Number(perPage), totalRecords, transactions });
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        res.status(500).json({ error: 'Error fetching transactions', details: error.message });
    }
};
