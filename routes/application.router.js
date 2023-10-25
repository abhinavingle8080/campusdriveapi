const express = require('express');
const studentController = require('../controllers/application.controller');

const applicationRouter = express.Router();

// Define the route for importing data
applicationRouter.post('/import-applications', studentController.importApplications);

module.exports = applicationRouter;
