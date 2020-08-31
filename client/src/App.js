import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [file, setFile] = useState({ file: null });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
  };
  return (
    <div className="App" onSubmit={handleSubmit}>
      <form>
        <label htmlFor="text-file">Select a text file</label>
        <input type="file" id="text-file"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default App;
