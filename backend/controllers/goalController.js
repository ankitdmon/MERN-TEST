const {
  successResponse,
  failResponse,
  errorResponse,
} = require("../utills/responses");

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
    return successResponse(req, res, "getGoals");
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

// set goal
exports.setGoal = async (req, res) => {
  try {
    return successResponse(req, res, "setGoal");
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
