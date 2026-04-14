import { useBoard } from "../hooks/useBoard";

const Board = () => {
  const { tasks } = useBoard();
  return (
    <div>
      <h2>Board</h2>
      <p>Total tasks: {tasks.length}</p>
    </div>
  );
};

export default Board;