import React, { useState } from "react";

const Task = ({ text, tasks, setTasks, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(text);


  const updateTask = () => {
    setIsEditing(true);
  };

// Saving the edited task
  const saveTask = () => {
    setIsEditing(false);
    const updatedTasks = [...tasks];
    if (editedTask.trim() !== "") {
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
    } else {
      alert("Task cannot be left empty");
    }
  };

//   deleting task
  const deleteTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input className="save"
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={saveTask}>Save</button>
        </>
      ) : (
        <>
          {text}
          <div className="button-container">
            <button className="del-btn" onClick={deleteTask}>
              <i className="fa fa-trash"></i>
            </button>
            <button onClick={updateTask}>
              <i className="fa fa-pencil"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
