import React from 'react';
import { TaskContext, useTaskProvider } from './TaskContext';
import AppFromMF1 from 'mf1/App';
import AppFromMF2 from 'mf2/App';

import Style from './style.css';

const App = () => {
  const taskProviderValue = useTaskProvider();

  return (
    <TaskContext.Provider value={taskProviderValue}>
      <header className="header">
        <h1>TO DO APP</h1>
      </header>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>NavBar</li>
          </ul>
        </nav>
        <main className="main-content">
          {taskProviderValue.showStatus ? <AppFromMF2 /> : <AppFromMF1 />}
        </main>
      </div>
    </TaskContext.Provider>
  );
};

export default App;
