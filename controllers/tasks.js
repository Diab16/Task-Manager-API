const asyncHandler = require("express-async-handler");
const { Book, Task } = require("../models/Task");
/**
 * @desc   Get All Books
 * @route  /api/v1/tasks
 * @method GET
 * @access public
 */
const getAllTasks = (req, res) => {
  res.status(200).send("get all books");
};

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
  res.status(200).send("Get Task by ID");
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
  res.status(200).send("Delete Task");
});

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask };
