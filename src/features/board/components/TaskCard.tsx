import { useState } from "react";
import { Task, TaskStatus } from "../types/board.types";
import Card from "./ui/Card";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
  moveTask?: (id: string, newStatus: TaskStatus) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleSave = () => {
    const trimmed = value.trim();
    if (trimmed && trimmed !== task.title) {
      updateTask(task.id, trimmed);
    } else if (!trimmed) {
      setValue(task.title);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(task.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <Card
      style={{
        margin: "6px 0",
        cursor: "grab",
        transition: "0.2s",
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDragStart={(e) => {
          setIsDragging(true);
          e.dataTransfer.setData("text/plain", task.id);
        }}
        onDragEnd={() => setIsDragging(false)}
        draggable
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          opacity: isDragging ? 0.5 : 1,
          transition: "0.2s",
        }}
      >
        {isEditing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <div onClick={() => setIsEditing(true)}>
            {task.title}
          </div>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          style={{
            marginLeft: "8px",
            opacity: isHovered ? 1 : 0,
            transition: "0.2s",
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default TaskCard;