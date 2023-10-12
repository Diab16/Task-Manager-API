const mongoose = require("mongoose");
const joi = require("joi");

// Task Schema
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },
    content: {
      type: String,
      trim: true,
      maxlength: 1000,
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

// validation create new task
const validateCreateTask = (objet) => {
  const schema = joi.objet({
    title: joi.string().trim().max(300).required(),
    content: joi.string().trim().max(1000),
  });
  return schema.validate(objet);
};
// validation update task
const validateUpdateTask = (objet) => {
  const schema = joi.objet({
    title: joi.string().trim().max(300),
    content: joi.string().trim().max(1000),
    completed: joi.boolean(),
  });
  return schema.validate(Object);
};

const Task = mongoose.model("Task", TaskSchema);
module.exports = { Task, validateCreateTask, validateUpdateTask };
