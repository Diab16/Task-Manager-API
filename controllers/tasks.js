const asyncHandler = require("express-async-handler");
const { Book, Task } = require("../models/Task");
/**
 * @desc   Get All Books
 * @route  /api/v1/tasks
 * @method GET
 * @access public
 */
const getAllTasks = asyncHandler(async (req, res) => {
  const taskList = await Task.find();
  res.status(200).json(taskList);
});

/**
 * @desc   Creat New Task
 * @route  /api/v1/tasks
 * @method POST
 * @access public
 */
const creatTask = asyncHandler(async (req, res) => {
  const task = new Task({
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
  res.status(200).send(task);
});

/**
 * @desc   Update Task
 * @route  /api/v1/tasks/:id
 * @method PATCH
 * @access public
 */
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).send("Update Task");
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
    res.json({ message: "task has been deleted" });
  } else {
    res.json({ message: "task not found" });
  }
});

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask };
