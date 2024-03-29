import axios from "axios";
import { TaskRequest, TaskResponse } from "../types/task.type";

const API_URL = "http://localhost:8080/api/v1/task";

export const getTasks = async (): Promise<TaskResponse[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return [];
  }
};

export const getTaskByID = async (id: number): Promise<TaskResponse | null> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    return null;
  }
};

export const createTask = async (exReq: TaskRequest) => {
  try {
    const response = await axios.post(API_URL, exReq);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const updateTaskStatus = async (
  task_id: number
): Promise<TaskResponse> => {
  try {
    const response = await axios.put(
      `${API_URL}/${task_id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${task_id}:`, error);
    throw new Error("Failed to update task. Please try again.");
  }
};

export const deleteTasksByIDAPI = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting task with ID ${id}:`, error);
    throw new Error("Failed to delete task. Please try again.");
  }
};
