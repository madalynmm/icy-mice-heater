const path = require('path');
const router = require('express').Router();

// '/notes' responds with the index.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;