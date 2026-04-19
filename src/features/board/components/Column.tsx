import { Task } from "../types/board.types";
import TaskCard from "./TaskCard";
import { TaskStatus } from "../types/board.types";

interface Props {
  title: string;
  tasks: Task[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
  moveTask: (id: string, newStatus: TaskStatus) => void;
}

const Column = ({ title, tasks, deleteTask, updateTask, moveTask }: Props) => {
  return (
    <div
      onDragOver={(e) => e.preventDefault()} // Allow dropping
      onDrop={(e) => {
        const id = e.dataTransfer.getData("text/plain");
        moveTask(id, title.toLowerCase() as TaskStatus);
      }}
     style={{ flex: 1, padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
};

export default Column;
