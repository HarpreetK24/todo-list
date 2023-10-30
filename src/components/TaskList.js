import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setNewTask('');
    } else {
      alert('Please enter something.');
    }
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="task-list">
      <div className="input-section">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='add-btn' onClick={() => addTask(newTask)}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task}
            tasks={tasks}
            setTasks={setTasks}
            index={index}
          />
        ))}
      </ul>
      <button className="clear-button" onClick={clearAllTasks}>
        Clear All
      </button>
    </div>
  );
};

export default TaskList;
