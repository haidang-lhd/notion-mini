import { useEffect, useState } from "react";
import { Task, TaskStatus } from "../types/board.types";

const initialTasks: Task[] = [
  { id: "1", title: "Learn React", status: "todo" },
  { id: "2", title: "Build UI", status: "doing" },
];

export const useBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, newTitle: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );
  };

  const moveTask = (id: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    moveTask,
  };
};