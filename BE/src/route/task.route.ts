import { Router } from "express";
import { taskTodoController } from "../controller/task.controller";

const taskRoute = Router();

const port = 8080;

taskRoute.get("/", taskTodoController.getTask);
taskRoute.get("/:id", taskTodoController.getTaskById)
taskRoute.post("/", taskTodoController.createTask)
taskRoute.put("/:id", taskTodoController.updateTask)
taskRoute.delete("/:id", taskTodoController.deleteTask)

export default taskRoute;