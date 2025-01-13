import React, { useContext } from 'react';
import { TaskContext } from '../../shell-app/src/TaskContext';

import Style from './style.css';

const App = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="mf2-container">
      <h2>STATUS</h2>
      <div className="status-box">
        <p>
          <strong>Completed:</strong> {completedTasks}
        </p>
        <p>
          <strong>Pending:</strong> {pendingTasks}
        </p>
      </div>
    </div>
  );
};

export default App;
