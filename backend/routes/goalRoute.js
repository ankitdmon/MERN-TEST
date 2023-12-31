const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

// testing
router.get("/test", goalController.test);

//get all Goals
router.get("/getGoals", goalController.getGoals);

//set goal
router.post("/setGoal", goalController.setGoal);

//update goal
router.put("/updateGoal/:id", goalController.updateGoal);

//delete goal
router.post("/deleteGoal/:id", goalController.deleteGoal);

module.exports = router;
