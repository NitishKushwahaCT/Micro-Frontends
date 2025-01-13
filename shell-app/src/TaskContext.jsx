import React, { createContext, useState } from 'react';

// Create TaskContext
export const TaskContext = createContext();

// Function to provide the context
export const useTaskProvider = () => {
  const [tasks, setTasks] = useState([
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: false },
  ]);

  const [showStatus, setShowStatus] = useState(false);

  return { tasks, setTasks, showStatus, setShowStatus };
};
