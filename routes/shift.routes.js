const express = require('express');

const shiftRoutes = express.Router();

shiftRoutes.get('/', function (req, res) {
    console.log('Basic Routes');
    return res.json('Shifts');
});

module.exports = { shiftRoutes };