import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { Column } from "@/features/board/components";
import { COLUMNS } from "../constants/board.constants";
import { filterTasksByStatus } from "../utils/board.utils";
import Input from "./ui/Input";
import Button from "./ui/Button";

const Board = () => {
  const { tasks, addTask, deleteTask, updateTask, moveTask } = useBoard();
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
        />
        <Button onClick={handleAddTask} disabled={!input.trim()}>
          Add
        </Button>
      </div>

      <div style={{ display: "flex", gap: "16px", padding: "20px", background: "#f5f5f5", minHeight: "100px" }}>
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
    </div>
  );
};

export default Board;