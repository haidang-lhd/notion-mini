import { Task, TaskStatus } from "../types/board.types";
import { TASK_STATUS } from "../constants/board.constants";

/**
 * Type for the setTasks function from useState
 */
type SetTasksFunction = React.Dispatch<React.SetStateAction<Task[]>>;

/**
 * Hook that provides immutable task mutation functions
 *
 * This hook doesn't manage state itself. Instead, it receives setTasks as a dependency
 * and returns pure update functions that use functional setState patterns.
 *
 * This separation allows:
 * - Easy testing (no hooks dependencies needed)
 * - Reusability with different state management solutions
 * - Clear separation between state management and business logic
 *
 * @param setTasks - React setState function for tasks
 * @returns Object with task mutation functions
 */
export const useTaskActions = (setTasks: SetTasksFunction) => {
  /**
   * Add a new task with the given title
   * New tasks default to "todo" status
   */
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: TASK_STATUS.TODO,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  /**
   * Delete a task by id
   */
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  /**
   * Update a task's title by id
   */
  const updateTask = (id: string, newTitle: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );
  };

  /**
   * Move a task to a different status (column)
   */
  const moveTask = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  return {
    addTask,
    deleteTask,
    updateTask,
    moveTask,
  };
};
