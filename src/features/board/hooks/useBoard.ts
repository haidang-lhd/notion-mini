import { useEffect, useState } from "react";
import { Task } from "../types/board.types";
import { STORAGE_KEY, TASK_STATUS } from "../constants/board.constants";
import { useTaskActions } from "./useTaskActions";

const initialTasks: Task[] = [
  { id: "1", title: "Learn React", status: TASK_STATUS.TODO },
  { id: "2", title: "Build UI", status: TASK_STATUS.DOING },
];

/**
 * Initialize tasks from localStorage with fallback to initial tasks
 * @returns Tasks array from storage or initial tasks
 */
const loadTasksFromStorage = (): Task[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialTasks;
  } catch (error) {
    console.error("Failed to load tasks from localStorage:", error);
    return initialTasks;
  }
};

/**
 * Hook for managing board state and task operations
 *
 * Responsibilities:
 * - Manages tasks state
 * - Handles localStorage persistence (load + save)
 * - Provides task action handlers via useTaskActions hook
 *
 * @returns Object with tasks state and action handlers
 */
export const useBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasksFromStorage);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Get task action handlers
   * These are pure functions that handle all task mutations
   */
  const { addTask, deleteTask, updateTask, moveTask } =
    useTaskActions(setTasks);

  /**
   * Persist tasks to localStorage whenever they change
   */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    moveTask,
    isLoading,
  };
};