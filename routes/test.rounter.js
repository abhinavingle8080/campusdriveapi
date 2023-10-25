const express = require('express');
const testResultController = require('../controllers/testresult.controller');

const testRouter = express.Router();

// Define the route for importing data
testRouter.post('/submit-test', testResultController.submitTest);
testRouter.post('/get-submissions', testResultController.getSubmissons);

module.exports = testRouter;