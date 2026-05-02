import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { Column } from "./index";
import { COLUMNS } from "../constants/board.constants";
import { filterTasksByStatus } from "../utils/board.utils";
import Input from "./ui/Input";
import Button from "./ui/Button";

const Board = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    moveTask,
    isLoading,
  } = useBoard();

  const [input, setInput] = useState("");

  const handleAddTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    addTask(trimmed);
    setInput("");
  };

  // 🟡 1. HANDLE LOADING
  if (isLoading) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Loading board...</p>
      </div>
    );
  }

  return (
    <div>
      {/* 🟢 Input area */}
      <div style={{ marginBottom: "16px" }}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
          placeholder="Add a new task..."
        />

        <Button onClick={handleAddTask} disabled={!input.trim()}>
          Add
        </Button>
      </div>

      {/* 🟡 2. EMPTY STATE (full board) */}
      {tasks.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#999",
            marginTop: "40px",
          }}
        >
          No tasks yet. Start by adding one 🚀
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "16px",
            padding: "20px",
            background: "#f5f5f5",
            minHeight: "100px",
          }}
        >
          {COLUMNS.map((col) => (
            <Column
              key={col.status}
              title={col.title}
              tasks={filterTasksByStatus(tasks, col.status)}
              deleteTask={deleteTask}
              updateTask={updateTask}
              moveTask={moveTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;