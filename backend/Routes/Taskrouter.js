const express = require("express");
const {
  createTask,
  getTask,
  getsingleTask,
  deleteTask,
  updateTask,
} = require("../Controllers/Taskcontroller");
const Task = require("../models/taskmodel");
const router = express.Router();

// router.route("/").get(getTask).post(createTask)

router.post("/", createTask);
router.get("/", getTask);
router.get("/:id", getsingleTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);


module.exports = router;
