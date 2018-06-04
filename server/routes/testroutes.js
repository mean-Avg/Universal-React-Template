const express = require('express');

const router = express.Router();

const TestController = require('../controllers/TestController');

router.route('/get').get(TestController.getTest);

router.route('/add').post(TestController.addTest);

module.exports = router;
