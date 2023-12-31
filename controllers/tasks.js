const asyncHandler = require("express-async-handler");
const {
  Task,
  validateCreateTask,
  validateUpdateTask,
} = require("../models/Task");

/**
 * @desc   Get All Tasks
 * @route  /api/v1/tasks
 * @method GET
 * @access public
 */
const getAllTasks = asyncHandler(async (req, res) => {
  const { searchString, completed } = req.query;
  const queries = {};
  queries.completed = completed === "true" ? true : false;
  let taskList;
  if (!searchString && !completed) taskList = await Task.find();
  else {
    if (!searchString) searchString = "";
    taskList = await Task.find(
      {
        $text: { $search: searchString },
      },
      queries
    ).select("title content completed");
  }
  if (taskList) {
    res.status(200).json(taskList);
  } else {
    res.status(404).json({ message: "there is no tasks" });
  }
});

/**
 * @desc   Create New Task
 * @route  /api/v1/tasks
 * @method POST
 * @access public
 */
const createTask = asyncHandler(async (req, res) => {
  const { error } = validateCreateTask(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const task = new Task({
    title: req.body.title,
    content: req.body.content,
    completed: req.body.completed,
  });
  const result = await task.save(task);
  res.status(201).json(result);
});

/**
 * @desc   Get Task by ID
 * @route  /api/v1/tasks/:id
 * @method GET
 * @access public
 */
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).json({ message: "task not found" });
  }
});

/**
 * @desc   Update Task
 * @route  /api/v1/tasks/:id
 * @method PATCH
 * @access public
 */
const updateTask = asyncHandler(async (req, res) => {
  const { error } = validateUpdateTask(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  let task = await Task.findById(req.params.id);
  if (task) {
    task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "task not found" });
  }
});

/**
 * @desc   Delete Task
 * @route  /api/v1/tasks/:id
 * @method DELETE
 * @access public
 */
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "task has been deleted" });
  } else {
    res.status(404).json({ message: "task not found" });
  }
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
