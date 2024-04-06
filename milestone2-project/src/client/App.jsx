import React from "react";
import Add from '../add';
import "./App.css";
import Favorites from '../favorites';
import Show from '../show';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <Favorites />
        <Show/>
      </main>
      <Add />
    </div>
  );
}

export default App;