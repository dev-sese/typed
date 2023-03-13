import React, { useState } from "react";
import Viewer from "components/Viewer";
import { List } from "components/List";

function App() {
  return (
    <div className="text-center">
      <div className="flex">
        <List></List>
        <div className="w-[1px] min-h-screen bg-[#C4C4C4]" />
        <Viewer></Viewer>
      </div>
    </div>
  );
}

export default App;
