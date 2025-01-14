const axios = require('axios');
const Product = require('../models/Product');

exports.seedDatabase = async (req, res) => {
    try {
        await Product.deleteMany({});

        const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

        const formattedData = data.map(item => ({
            title: item.title,
            description: item.description,
            price: Number(item.price),
            category: item.category,
            dateOfSale: new Date(item.dateOfSale),
            sold: Boolean(item.sold),
        }));

        await Product.insertMany(formattedData);

        res.status(201).json({ message: 'Database seeded successfully!' });
    } catch (error) {
        console.error('Error seeding database:', error.message);
        res.status(500).json({
            error: 'Error seeding database',
            details: error.message,
        });
    }
};
