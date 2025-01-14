const express = require('express');
const { seedDatabase } = require('../controllers/seedController');
const router = express.Router();

router.post('/', seedDatabase);

module.exports = router;
