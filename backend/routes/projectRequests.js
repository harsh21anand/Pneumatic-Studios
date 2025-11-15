const express = require('express');
const router = express.Router();
const { createProjectRequest } = require('../controllers/projectRequestController');

router.post('/', createProjectRequest);

module.exports = router;