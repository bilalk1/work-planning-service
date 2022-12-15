const express = require('express');

const routes = express.Router();

const { shiftRoutes } = require('./shift.route');

routes.use('/shift', shiftRoutes);

module.exports = { routes };
