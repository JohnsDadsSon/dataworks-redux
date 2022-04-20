import React, { useState } from "react";
import "./App.css";
import { Operations } from "./components/Operations/Operations";
import { Searchbar } from "./components/Search/Searchbar";
import { History } from "./components/History/History";
import { Topbar } from "./components/Topbar/Topbar";
import { menuitems } from "./features/menuitems";
import { useSelector } from "react-redux";
import { selectMenuState } from "./features/sortSlice";
const App = (props) => {
  const menuState = useSelector(selectMenuState);

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
};

export default App;
