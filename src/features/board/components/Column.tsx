import { Task } from "../types/board.types";
import TaskCard from "./TaskCard";

interface Props {
  title: string;
  tasks: Task[];
}

const Column = ({ title, tasks }: Props) => {
  return (
    <div style={{ flex: 1, padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
