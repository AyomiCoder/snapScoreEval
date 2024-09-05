const express = require('express');
const router = express.Router();

const TOTAL_SNAP_SUPPLY = 1000000000;

// Homepage route
router.get('/', (req, res) => {
  res.render('index'); // Just render the page, we will handle value display in frontend
});

// Handle calculation
router.post('/calculate', (req, res) => {
  const { username, score } = req.body;

  // Example valuation
  const valuation = score * 0.0113;

  // Calculate $SNAP allocation
  const snapAllocation = (score / TOTAL_SNAP_SUPPLY) * 73000000;

  // Return JSON result
  res.json({ value: valuation.toFixed(2), snapAllocation: snapAllocation.toFixed(2) });
});

module.exports = router;
