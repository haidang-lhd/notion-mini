import { useState } from "react";
import { Task } from "../types/board.types";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTitle: string) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

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