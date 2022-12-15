const express = require('express');

const { getShifts } = require('../controllers/shift.controller');

const shiftRoutes = express.Router();

shiftRoutes.get('/', getShifts);

module.exports = { shiftRoutes };