import { Request, Response } from "express";
import { dbConfig } from "../config/task.config";
import { TaskTodo } from "../entity/task.entity";

export class taskTodoController {
  private static taskTodoRepo = dbConfig.getRepository(TaskTodo);

  static getTask = async (req: Request, res: Response) => {
    const tasks = await this.taskTodoRepo.find();
    res.status(200).json(tasks);
  };

  static getTaskById = async (req: Request, res: Response) => {
    const taskId = +req.params.id;
    const task = await this.taskTodoRepo.findOneBy({ id: taskId });
    res.status(200).json(task);
  };

  static createTask = async (req: Request, res: Response) => {
    const taskBody = req.body;
    const taskNew = this.taskTodoRepo.create(taskBody);
    const taskSave = await this.taskTodoRepo.save(taskNew);
    res.status(201).json(taskSave);
  };

  static updateTask = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const taskUpdate = await this.taskTodoRepo.findOneBy({ id });
    taskUpdate.status = true;
    const taskUpdated = await this.taskTodoRepo.save(taskUpdate);
    res.status(201).json(taskUpdated);
  };

  static deleteTask = async (req: Request, res: Response) => {
    const id = +req.params.id;
    await this.taskTodoRepo.delete(id);
    res.status(204).end();
  };
}
