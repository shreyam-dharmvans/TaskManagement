import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from "../controllers/taskController.js";
import { taskValidators, validate } from "../utils/validator.js";

const taskRouter: Router = Router();

taskRouter.get("/tasks", getAllTasks);
taskRouter.get("/tasks/:id", getSingleTask);

taskRouter.post("/tasks", validate(taskValidators), createTask);

taskRouter.put("/tasks/:id", validate(taskValidators), updateTask);

taskRouter.delete("/tasks/:id", deleteTask);

export default taskRouter;