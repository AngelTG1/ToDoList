import React from "react";
import Task from "./Task";

function TodoList({ tasks, toggleComplete }) {
  return (
    <>
      <ul className="flex flex-col gap-2 p-1">
        {tasks.map((task, index) => (
          <>
            <Task
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
          />
          <hr />
          </>
        ))}
        
      </ul>
    </>
  );
}

export default TodoList;
