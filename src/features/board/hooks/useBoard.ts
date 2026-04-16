import { useState } from "react";
import { Task } from "../types/board.types";

const initialTasks: Task[] = [
  { id: "1", title: "Learn React", status: "todo" },
  { id: "2", title: "Build UI", status: "doing" },
];

export const useBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  };

  return {
    tasks,
    addTask,
  };
};