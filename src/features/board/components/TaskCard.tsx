import { Task } from "../types/board.types";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "6px 0",
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "6px",
      }}
    >
      {task.title}
    </div>
  );
};

export default TaskCard;