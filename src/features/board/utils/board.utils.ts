import { Task, TaskStatus } from "../types/board.types";

/**
 * Filter tasks by their status
 * @param tasks - Array of tasks to filter
 * @param status - The status to filter by
 * @returns Filtered array of tasks matching the given status
 */
export const filterTasksByStatus = (
  tasks: Task[],
  status: TaskStatus
): Task[] => {
  return tasks.filter((task) => task.status === status);
};
