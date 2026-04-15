import { useBoard } from "../hooks/useBoard";
import { Column } from "@/features/board/components";

const Board = () => {
  const { tasks } = useBoard();

  const getTasksByStatus = (status: string) =>
  tasks.filter((t) => t.status === status);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Column title="Todo" tasks={getTasksByStatus("todo")} />
      <Column title="Doing" tasks={getTasksByStatus("doing")} />
      <Column title="Done" tasks={getTasksByStatus("done")} />
    </div>
  );
};

export default Board;