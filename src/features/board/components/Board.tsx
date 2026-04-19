import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { Column } from "@/features/board/components";

const columns = [
  { title: "Todo", status: "todo" },
  { title: "Doing", status: "doing" },
  { title: "Done", status: "done" },
];

const Board = () => {
  const { tasks, addTask, deleteTask, updateTask, moveTask } = useBoard();
  const [input, setInput] = useState("");

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginRight: "8px",
          }}
        />
        <button
          onClick={() => {
            if (!input.trim()) return;
            addTask(input);
            setInput("");
          }}
           style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <div style={{ display: "flex", gap: "16px", padding: "20px", background: "#f5f5f5", minHeight: "100px" }}>
        {columns.map((col) => (
          <Column
            key={col.status}
            title={col.title}
            tasks={tasks.filter((t) => t.status === col.status)}
            deleteTask={deleteTask}
            updateTask={updateTask}
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;