import { useState } from "react";
import { Task } from "../types/board.types";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
  moveTask: (id: string, newStatus: TaskStatus) => void;
}

const TaskCard = ({ task, deleteTask, updateTask, moveTask }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", task.id);
      }}
      style={{
        padding: "10px",
        margin: "6px 0",
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "6px",
        cursor: "grab",
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

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;