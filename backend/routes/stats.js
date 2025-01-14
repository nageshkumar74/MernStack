const express = require('express');
const { getStatistics } = require('../controllers/statsController'); 
const router = express.Router();

router.get('/', getStatistics); 
console.log(getStatistics)
module.exports = router;
