import React from 'react';
import './App.css';
import Agreement from './component/Agreement';

const App: React.FC = () => {
  const handleSubmit = () => {
    alert('Submitted!');
  };

  const longText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `.repeat(10);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Term Sheet Agreement</h1>
        <p>Please read through the terms and indicate whether you agree with them below.</p>
        <Agreement text={longText} onSubmit={handleSubmit} />
      </header>
    </div>
  );
};

export default App;
