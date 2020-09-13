import React from "react";
import logo from "./logo.png";
import "./App.css";
import AllPayments from "./payments/PaymentsApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="project-name">Catalyst</p>
        </h1>
        <h2>React starter codebase</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{AllPayments()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
