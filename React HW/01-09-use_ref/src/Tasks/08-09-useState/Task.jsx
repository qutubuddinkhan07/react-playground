import React, { useEffect, useState } from "react";

const Task = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  // Load tasks from localStorage when component loads
  useEffect(() => {
    const storedData = localStorage.getItem("details");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const addTask = () => {
    if (input.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      task: input,
    };

    const updatedData = [...data, newTask];

    setData(updatedData);

    localStorage.setItem("details", JSON.stringify(updatedData));

    setInput("");
  };

  const deleteTask = (id) => {
    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);

    localStorage.setItem("details", JSON.stringify(updatedData));
  };

  return (
    <div>
      <label htmlFor="task">Task</label>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="task"
        id="task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.task}

            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
