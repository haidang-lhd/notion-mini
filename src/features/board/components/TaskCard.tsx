import { useState } from "react";
import { Task, TaskStatus } from "../types/board.types";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
  moveTask?: (id: string, newStatus: TaskStatus) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        (e.currentTarget.querySelector("button") as HTMLButtonElement).style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        (e.currentTarget.querySelector("button") as HTMLButtonElement).style.opacity = "0";
      }}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", task.id);
      }}
      style={{
        padding: "10px",
        margin: "6px 0",
        background: "white",
        borderRadius: "8px",
         // CSS property adds shadow effects around an element's frame (box-shadow: [inset] [h-offset] [v-offset] [blur-radius] [spread-radius] [color];)
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        cursor: "grab",
        transition: "0.2s",
      }}
    >
      {isEditing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => {
            updateTask(task.id, value);
            setIsEditing(false);
          }}
          autoFocus
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>
          {task.title}
        </div>
      )}

      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "8px", opacity: 0, transition: "0.2s" }}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;