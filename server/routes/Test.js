const express = require('express');

const testRouter = express.Router();

const TestController = require('../controllers/TestController');

testRouter.get('/test/get', TestController.getTest);

testRouter.get('/test/add', TestController.addTest);

module.exports = testRouter;
