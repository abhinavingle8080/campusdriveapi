const express = require('express');
const round1Controller = require('../controllers/round1.controller');
const round2Controller = require('../controllers/round2.controller');
const round3Controller = require('../controllers/round3.controller');

const commonRouter = express.Router();

// Define the route for importing data
commonRouter.post('/get-round1', round1Controller.getRound1List);
commonRouter.post('/get-round2', round2Controller.getRound2List);
commonRouter.post('/get-round3', round3Controller.getRound3List);

module.exports = commonRouter;
