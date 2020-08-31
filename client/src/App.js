import React, { useState } from "react";
import axios from "axios";
import CustomTable from "./components/custom-table/custom-table";
import "./App.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("textfile", file);
    axios
      .post("/uploads", data)
      .then((res) => {
        const data = res.data.data.textfile;
        const dataArray = data.split("\n");
        setTableData(dataArray);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="App">
      {tableData.length ? (
        <CustomTable tableData={tableData}></CustomTable>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="file-picker" htmlFor="text-file">
            Select a text file
          </label>
          <input type="file" id="text-file" onChange={handleChange}></input>
          {file ? (
            <div className="heading">Selected File:{file.name}</div>
          ) : null}
          <input type="submit"></input>
        </form>
      )}
    </div>
  );
};

export default App;
