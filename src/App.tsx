import React from "react";
import Viewer from "components/Viewer";
import "App.css";
import List from "components/List";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <List></List>
        <Viewer></Viewer>
      </div>
    </div>
  );
}

export default App;
