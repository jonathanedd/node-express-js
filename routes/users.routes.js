const express = require('express');

const router = express.Router();

// controller 
const { getAllUsers, createUser  } = require('../controllers/users.controller');

// After copying the enpoints, repleace app for router
router.get('/', getAllUsers );

router.post('/', createUser );

// this is the way to export in node js
module.exports = { usersRouter: router }