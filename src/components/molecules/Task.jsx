import React from "react";
import close from '../../assets/close.svg'
import check from '../../assets/check.svg'

function Task({ task, index, toggleComplete }) {

  const handleToggleComplete = () => {
    // Llama a la función toggleComplete con el id de la tarea
    toggleComplete(task.id);
  };
  return (
    <>
        <li className={task.completed ? "completed" : ""}>
            <div className=" flex items-center justify-between px-3">
                {task.text}
                <span className="border-2 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:rotate-45 duration-300 border-white " onClick={() => handleToggleComplete(index)}>
                {task.completed ? <img className="w-5 " src={check} alt="" /> : <img className="w-5 " src={close} alt="" />}
                </span>
            </div>
        </li>
    </>
  );
}

export default Task;
