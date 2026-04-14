import { Task } from "../types/board.types";

interface Props {
  title: string;
  tasks: Task[];
}

const Column = ({ title, tasks }: Props) => {
  return (
    <div style={{ flex: 1, padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>

      {tasks.map((task) => (
        <div key={task.id} style={{ padding: "8px", margin: "4px 0", background: "#f5f5f5" }}>
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default Column;
