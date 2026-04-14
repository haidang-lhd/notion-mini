import { useState } from "react";

import { Task } from "../types/board.types";

export const useBoard = () => {
    const initialTasks: Task[] = [
        { id: "1", title: "Setup project structure", status: "todo" },
        { id: "2", title: "Implement board logic", status: "doing" },
        { id: "3", title: "Refactor components", status: "done" },
    ];
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    return { tasks, setTasks };
};

