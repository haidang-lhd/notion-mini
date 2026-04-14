import { useBoard } from "../hooks/useBoard";
import Column from "./Column";

const Board = () => {
  const { tasks } = useBoard();

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const doingTasks = tasks.filter((t) => t.status === "doing");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Column title="Todo" tasks={todoTasks} />
      <Column title="Doing" tasks={doingTasks} />
      <Column title="Done" tasks={doneTasks} />
    </div>
  );
};

export default Board;