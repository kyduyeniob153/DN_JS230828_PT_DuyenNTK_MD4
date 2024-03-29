import { useEffect, useRef, useState } from "react";
import { TaskRequest, TaskResponse } from "../types/task.type";
import {
  createTask,
  getTasks,
  deleteTasksByIDAPI,
  updateTaskStatus,
} from "../api/task.api";

const Task = () => {
  // state,props
  const [taskList, setTasklist] = useState<TaskResponse[]>([]);
  //   ref
  const idRef = useRef<number>(0);
  const nameRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLInputElement>(null);
  console.log(taskList);

  // function handle event
  const fetchTasks = async () => {
    const exams = await getTasks();
    setTasklist(exams);
  };

  const onClickAdd = async () => {
    const taskRequest: TaskRequest = {
      name: nameRef.current?.value || "",
      status: false,
    };
    await createTask(taskRequest);
    fetchTasks();
  };

  //
  useEffect(() => {
    fetchTasks();
  }, []);

  // edit Event
  const onChangeStatus = async (task_id: number) => {

    await updateTaskStatus(task_id);
    fetchTasks();
  };

  // delete Event
  const deleteTaskByID = async (id: number) => {
    await deleteTasksByIDAPI(id);
    fetchTasks();
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={onClickAdd}>Them</button>

      <tbody>
        {taskList.map((task) => {
          return (
            <tr key={task.id}>
            <h1 className="title">TODO LIST</h1>
            <h6 className="comment">Get things done, one item at a time</h6>
              <td>{task.name}</td>
              <td>
                <input type="checkbox" onClick={() => onChangeStatus(task.id)} checked={task.status}></input>
              </td>
              <td>
                <button onClick={() => deleteTaskByID(task.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

export default Task;
