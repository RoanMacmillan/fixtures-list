import React, { createElement } from "react";
import { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    { content: "White trainers", completed: false, important: false },

    { content: "T shirts (white)", completed: false, important: false },
    { content: "Shorts (stone/blue)", completed: false, important: false },
    { content: "Linen shirt (black?)", completed: false, important: false },
    { content: "Belt", completed: false, important: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    // console.log(tasks);

    setTasks([
      ...tasks,
      { content: input, completed: false, important: false },
    ]);
    setInput("");
  };

  const toggleImportant = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, important: !task.important };
      }

      return task;
    });

    const reorderedTasks = [
      ...updatedTasks.filter((task) => task.important),
      ...updatedTasks.filter((task) => !task.important),
    ];

    setTasks(reorderedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    console.log(`Removed task ${index}`);
  };

  const handleClear = () => {
    setTasks([]);
    // console.log(tasks);
    console.log(input);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed, important: false };
      }

      return task;
    });

    const reorderedTasks = [
      ...updatedTasks.filter((task) => !task.completed),
      ...updatedTasks.filter((task) => task.completed),
    ];

    setTasks(reorderedTasks);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-lg">Todo List</h1>
      <form onSubmit={handleSubmit} className="flex gap-1 mt-1">
        <input
          className={`px-1 shadow-sm rounded-sm`}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        ></input>
        <button
          type="submit"
          disabled={!input.trim()}
          className={`bg-sky-100 w-8 flex items-center justify-center font-semibold text-lg shadow-sm rounded-sm ${
            input.trim() === "" ? "opacity-40" : ""
          } `}
        >
          +
        </button>
      </form>

      <ul className="px-1 mt-1 ">
        {tasks.map((task, index) => (
          <div className={``} key={index}>
            <div className="mt-2 flex flex-row bg-white p-1 shadow-sm">
              <div
                className={` flex  w-full rounded-sm gap-1 cursor-pointer `}
                onClick={() => toggleComplete(index)}
              >
                <button className="px-2" type="button">
                  <div
                    className={`${
                      task.completed ? "bg-sky-500 border-none" : ""
                    } flex items-center justify-center w-6 h-6 rounded-xl border border-slate-300 border-solid`}
                  >
                    {task.completed && (
                      <img
                        className="w-4 custom-btn"
                        alt="complete"
                        src="./assets/icons/tick3.svg"
                      ></img>
                    )}
                  </div>
                </button>
                <li
                  className={` w-full py-1 px-0 ${
                    task.completed === true ? "opacity-30 line-through  " : ""
                  }`}
                >
                  {task.content}
                </li>
                {/* <button className="bg-red-100 min-w-10 sm:hover:bg-red-300 flex items-center justify-center font-semibold text-lg shadow-sm rounded-sm" onClick={() => removeTask(index)}>

              <img className="w-5" src='./assets/icons/close.svg' alt='Complete'></img>
              </button> */}
              </div>
              <button
                className={`px-2 bg-white ${task.completed ? 'pointer-events-none' : ''}`}
                onClick={() => toggleImportant(index)}
              >
                <img
                  className={`opacity-10 ${
                    task.important ? "customStar opacity-100" : ""
                  }
                  

                  
                  `}
                  src="./assets/icons/star.svg"
                ></img>
              </button>
            </div>
          </div>
        ))}
      </ul>

      <button
        className={`${
          tasks.length === 0 ? "cursor-not-allowed opacity-50" : ""
        } bg-sky-100 mt-4 py-1 shadow-sm rounded-sm`}
        onClick={handleClear}
      >
        Clear all
      </button>
    </div>
  );
};

export default Todo;
