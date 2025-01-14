const express = require('express');
const { pieChartController } = require('../controllers/pieChartController');
const router = express.Router();

router.get('/', pieChartController);

module.exports = router;
