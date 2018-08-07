const express = require('express');
const router = new express.Router();

router.use("/films", require('./films'));
router.use("/tvShows", require('./tvShows'));

router.get("/", function (req, res) {
  res.json({data: "Welcome"});
});

module.exports = router;
