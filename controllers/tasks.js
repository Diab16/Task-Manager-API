const asyncHandler = require("express-async-handler");
const { Book, Task } = require("../models/Task");
const e = require("express");
/**
 * @desc   Get All Books
 * @route  /api/v1/tasks
 * @method GET
 * @access public
 */
const getAllTasks = asyncHandler(async (req, res) => {
  const taskList = await Task.find();
  if (taskList) {
    res.status(200).json(taskList);
  } else {
    res.status(404).json({ message: "there is no tasks" });
  }
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
  let task = await Task.findById(req.params.id);
  if (task) {
    task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask };
