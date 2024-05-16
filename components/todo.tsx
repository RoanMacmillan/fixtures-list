import React, { createElement } from "react";
import { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [typeInput, setTypeInput] = useState("");

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const [tasks, setTasks] = useState([
    {
      content: "Clean room",
      completed: false,
      important: false,
      context: "Chores",
    },

    {
      content: "Play video games",
      completed: false,
      important: false,
      context: "Hobby",
    },
    {
      content: "Cook dinner",
      completed: false,
      important: false,
      context: "Chores",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    // console.log(tasks);

    setTasks([
      ...tasks,
      {
        content: input,
        completed: false,
        important: false,
        context: typeInput,
      },
    ]);
    setInput("");
    setTypeInput("");
  };

  const handleEdit = (index, currentContent) => {
    setEditingTaskId(index);
    setEditedContent(currentContent);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, content: editedContent };
      }

      console.log(`This is index: ${index}`)


      return task;
    });

    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditedContent("");
  };

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
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
    setEditingTaskId(null);
    
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    console.log(`Removed task ${index}`);
    setEditingTaskId(null);

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

    // const reorderedTasks = [
    //   ...updatedTasks.filter((task) => !task.completed),
    //   ...updatedTasks.filter((task) => task.completed),
    // ];

    // setTasks(reorderedTasks);
    setTasks(updatedTasks);
    setEditingTaskId(null);

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
        <input
          className={`px-1 shadow-sm rounded-sm`}
          type="text"
          value={typeInput}
          onChange={(e) => setTypeInput(e.target.value)}
          placeholder="Context"
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
            <div className="mt-2 flex flex-row bg-white p-1  shadow-sm">
              <div
                className={` flex items-center  w-full rounded-sm relative gap-1 cursor-pointer 
                
                
                `}
              >

                <button 
                onClick={() => toggleComplete(index)}
                
                
                className="absolute w-full z-50 top-0 bg-transparent h-full left-0"></button>

                <button className="px-2 " type="button">
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

                {editingTaskId === index ? (
                  <>
                    <input
                      type="text"
                      className=" px-2 z-50 py-1 bg-sky-50 rounded-md border border-sky-300 focus:outline-none focus:ring focus:ring-blue-300"
                      value={editedContent}
                      onChange={handleInputChange}
                    />
                  </>
                ) : (
                  <>
                    <li
                      className={` py-1 px-0 ${
                        task.completed === true
                          ? "opacity-30 line-through  "
                          : ""
                      }`}
                    >
                      {task.content}
                    </li>
                  </>
                )}

                {/* <button className="bg-red-100 min-w-10 sm:hover:bg-red-300 flex items-center justify-center font-semibold text-lg shadow-sm rounded-sm" onClick={() => removeTask(index)}>

              <img className="w-5" src='./assets/icons/close.svg' alt='Complete'></img>
              </button> */}
                <p className="ml-auto mr-3 text-gray-400 text-xs">{task.context}</p>
              </div>

              {editingTaskId === index ? (
                <>
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                </>
              ) : (
                <>
                  <button
                    className={`px-2  hover-btn`}
                    onClick={() => handleEdit(index, task.content)}
                  >
                    <img
                      className={`opacity-10 edit-img
                  

                  
                  `}
                      src="./assets/icons/edit.svg"
                    ></img>
                  </button>
                </>
              )}

              <button
                className={`px-2 bg-white hover-btn2 ${
                  task.completed ? "pointer-events-none" : ""
                }
                
                
                `}
                onClick={() => toggleImportant(index)}
              >
                <img
                  className={`opacity-10 customStar1 ${
                    task.important ? "customStar opacity-100" : ""
                  }

                  `}
                  src="./assets/icons/star.svg"
                ></img>
              </button>

              <button
                className={`px-2 bg-white hover-btn3`}
                onClick={() => removeTask(index)}
              >
                <img
                  className={`opacity-10 bin-hover
                  

                  
                  `}
                  src="./assets/icons/bin.svg"
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
