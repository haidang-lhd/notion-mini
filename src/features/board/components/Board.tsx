import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { Column } from "@/features/board/components";

const columns = [
  { title: "Todo", status: "todo" },
  { title: "Doing", status: "doing" },
  { title: "Done", status: "done" },
];

const Board = () => {
  const { tasks, addTask, deleteTask, updateTask } = useBoard();
  const [input, setInput] = useState("");

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button
          onClick={() => {
            if (!input.trim()) return;
            addTask(input);
            setInput("");
          }}
        >
          Add
        </button>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        {columns.map((col) => (
          <Column
            key={col.status}
            title={col.title}
            tasks={tasks.filter((t) => t.status === col.status)}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;