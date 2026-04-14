import { useState } from "react";
import { Task } from "../types/board.types";

const initialTasks: Task[] = [
  { id: "1", title: "Learn React", status: "todo" },
  { id: "2", title: "Build UI", status: "doing" },
  { id: "3", title: "Fix bugs", status: "done" },
  { id: "4", title: "Write docs", status: "todo" },
];

export const useBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return {
    tasks,
    setTasks,
  };
};