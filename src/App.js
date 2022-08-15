import React, { useState } from "react";
import ReactDOM from "react-dom";
import Toggle from "./Toggle";
import "./app.css";
import ToggleContext from "./ToggleContext";
const App = () => {
  const activeArr = useState([]);
  return (
    <div className="app">
      <React.StrictMode>
        <ToggleContext.Provider value={activeArr}>
          <Toggle name="GOOD" />
          <Toggle name="FAST" />
          <Toggle name="CHEAP" />
        </ToggleContext.Provider>
      </React.StrictMode>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
