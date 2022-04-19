import React from "react";
import "./App.css";
import { Operations } from "./components/Operations/Operations";
import { Searchbar } from "./components/Search/Searchbar";
import { History } from "./components/History/History";
import { Topbar } from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Searchbar />
      <div className="mainPage">
        <History />
        <Operations />
      </div>
    </div>
  );
}

export default App;
