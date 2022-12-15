const express = require('express');

const Joi = require('joi');

const { getShifts } = require('../controllers/shift.controller');
const { joiMiddleWare } = require('../middlewares/joi.middleware');

const shiftRoutes = express.Router();

const schema = Joi.object({ name: Joi.string().required() })

shiftRoutes.get('/', joiMiddleWare(schema), getShifts);

module.exports = { shiftRoutes };