import React from "react";

import "./custom-table.scss";
import { useState } from "react";

const CustomTable = ({ tableData, resetState }) => {
  const [fieldValues, setFieldValues] = useState({
    delimiter: "",
    tablelength: tableData.length - 1,
  });
  let { delimiter, tablelength } = fieldValues;
  if (tablelength == 0 || tablelength === "") {
    tablelength = 1;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };
  return (
    <React.Fragment>
      <div className="inputs">
        <label>
          delimiter: &nbsp;
          <input
            type="text"
            name="delimiter"
            value={delimiter}
            onChange={handleChange}
          />
        </label>
        <label>
          No of Rows: &nbsp;
          <input
            type="number"
            name="tablelength"
            value={tablelength}
            onChange={handleChange}
          />
        </label>
        <button onClick={() => window.location.reload(true)}>Reset</button>
      </div>
      {delimiter.length ? (
        <table className="custom-table">
          <tbody>
            {tableData.map((data, index) => {
              const fields = data.split(delimiter);
              return index < tablelength ? (
                <tr>
                  {fields.map((field) => {
                    return <td>{field}</td>;
                  })}
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      ) : null}
    </React.Fragment>
  );
};
export default CustomTable;
