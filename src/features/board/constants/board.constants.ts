import { TaskStatus } from "../types/board.types";

/**
 * Task status constants
 * Represents all possible states for a task
 */
export const TASK_STATUS = {
  TODO: "todo" as TaskStatus,
  DOING: "doing" as TaskStatus,
  DONE: "done" as TaskStatus,
} as const;

/**
 * Board columns configuration
 * Each column represents a task status with its display title
 */
export const COLUMNS = [
  {
    title: "Todo",
    status: TASK_STATUS.TODO,
  },
  {
    title: "Doing",
    status: TASK_STATUS.DOING,
  },
  {
    title: "Done",
    status: TASK_STATUS.DONE,
  },
] as const;

/**
 * LocalStorage key for persisting tasks
 */
export const STORAGE_KEY = "tasks";
