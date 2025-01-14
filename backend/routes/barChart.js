const express = require('express');
const { barChartController } = require('../controllers/barchartController');

const router = express.Router();

router.get('/', barChartController);

module.exports = router;
