import { useState } from "react";
import { Task, TaskStatus } from "../types/board.types";
import TaskCard from "./TaskCard";

interface Props {
  title: string;
  tasks: Task[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
  moveTask: (id: string, newStatus: TaskStatus) => void;
}

const Column = ({ title, tasks, deleteTask, updateTask, moveTask }: Props) => {

  const [isOver, setIsOver] = useState(false);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        moveTask(id, title.toLowerCase() as TaskStatus);
        setIsOver(false);
      }}
     style={{ flex: 1, padding: "12px", background: isOver ? "#e0f2fe" : "#f9fafb", borderRadius: "10px", minHeight: "300px", transition: "0.2s" }}
    >
      <h3>{title}</h3>

      {tasks.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#999",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          No tasks here 👀
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            moveTask={moveTask}
          />
        ))
      )}
    </div>
  );
};

export default Column;
