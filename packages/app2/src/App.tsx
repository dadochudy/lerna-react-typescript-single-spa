import React from "react";
import "./App.css";
import { Test } from "@monorepo/uikit";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App2</h1>
        <Test />
      </header>
    </div>
  );
};

export default App;
