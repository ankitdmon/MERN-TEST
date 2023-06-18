const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    goal: {
      type: String,
      required: true,
      maxlength: 46,
    },
    description: {
      type: String,
      maxlength: 255,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: "Goals",
  }
);

goalSchema.pre("save", function (next) {
  if (this.isDeleted && !this.deletedAt) {
    this.deletedAt = new Date();
  }
  next();
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
