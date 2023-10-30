import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);


  const toggleTheme = () => {
    setDarkTheme(!darkTheme);

    if (darkTheme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="theme-toggle" onClick={toggleTheme}>
        <i className={`fas fa-${darkTheme ? 'sun' : 'moon'}`}></i>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
