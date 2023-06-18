const {
  successResponse,
  failResponse,
  errorResponse,
} = require("../utills/responses");

const Goal = require("../models/goalModel");

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
    const goals = await Goal.find({ isActive: true, isDeleted: false });
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

    const goalText = await Goal.create(goalData);
    return successResponse(req, res, goalText);
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

// update goal by Id
exports.updateGoal = async (req, res) => {
  try {
    const goalId = req.params.id;
    const { goal, description } = req.body;

    const updatedFields = {};

    if (goal) {
      updatedFields.goal = goal;
    }

    if (description) {
      updatedFields.description = description;
    }

    if (Object.keys(updatedFields).length === 0) {
      return failResponse(req, res, "No fields to update provided");
    }

    updatedFields.updatedAt = Date.now();

    const updatedGoal = await Goal.findByIdAndUpdate(goalId, updatedFields, {
      new: true,
    });

    if (!updatedGoal) {
      return failResponse(req, res, "There is no such Goal with this Id!");
    }

    return successResponse(req, res, updatedGoal);
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
