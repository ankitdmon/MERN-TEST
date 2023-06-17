const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

router.get("/", goalController.demo);

module.exports = router;
