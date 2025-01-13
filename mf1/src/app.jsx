import React, { useState, useContext } from 'react';
import { useTaskProvider } from '../../shell-app/src/TaskContext';

import Style from './style.css';

const App = () => {
  const { tasks, setTasks, setShowStatus } = useTaskProvider();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleRemoveTask = () => {
    setTasks(tasks.slice(0, -1));
  };

  const handleToggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleGetResult = () => {
    setShowStatus(true);
  };

  return (
    <div className="mf1-container">
      <h2>Task List</h2>
      <div className="task-box">
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTaskCompletion(index)}
              />
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="button-group">
        <button className="remove-task-button" onClick={handleRemoveTask}>
          Remove Task
        </button>
      </div>
      <button className="get-result-button" onClick={handleGetResult}>
        Get Result
      </button>
    </div>
  );
};

export default App;
