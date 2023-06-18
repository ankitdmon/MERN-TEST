const {
  successResponse,
  failResponse,
  errorResponse,
} = require("../utills/responses");

const goal = require("../models/goalModel");

exports.test = async (req, res) => {
  try {
    return successResponse(req, res, "message");
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

// get all goals
exports.getGoals = async (req, res) => {
  try {
    const goals = await goal.find({ isActive: true, isDeleted: false });
    return successResponse(req, res, goals);
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

// create goal
exports.setGoal = async (req, res) => {
  try {
    const goalData = {
      goal: req.body.goal,
      description: req.body.description,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const goalText = await goal.create(goalData);
    return successResponse(req, res, goalText);
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

// update goal by Id
exports.updateGoal = async (req, res) => {
  try {
    return successResponse(req, res, "updateGoal");
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

// delete goal by Id
exports.deleteGoal = async (req, res) => {
  try {
    return successResponse(req, res, "deleteGoal");
  } catch (error) {
    return errorResponse(req, res, error);
  }
};
