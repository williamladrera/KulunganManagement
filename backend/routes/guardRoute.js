const express = require('express');
const router = express.Router();
const guardController = require('../controllers/guardController');

// Get all guards
router.get('/guards', guardController.getAllGuards);

// Search guard by ID, rank, and years of service
router.get('/guards/search', guardController.searchGuard); // Updated route to /guards/search

// Delete a guard by ID
router.get('/delete/guards/:id', guardController.deleteGuardById);

module.exports = router;
