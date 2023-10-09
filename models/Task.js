const mongoose = require("mongoose");

// Task Schema
const TaskSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
