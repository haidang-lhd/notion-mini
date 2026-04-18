import { Task } from "../types/board.types";
import TaskCard from "./TaskCard";

interface Props {
  title: string;
  tasks: Task[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
}

const Column = ({ title, tasks, deleteTask, updateTask }: Props) => {
  return (
    <div style={{ flex: 1, padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>

      {tasks.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default Column;
