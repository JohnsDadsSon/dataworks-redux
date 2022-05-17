import React from "react";
import { Operations } from "./components/Operations/Operations";
import { History } from "./components/History/History";
import { Searchbar } from "./components/Search/Searchbar";
import { AdminArea } from "./components/AdminArea/AdminArea";
import { SysConfigProjectManagement } from "./components/SysConfigProjectManagement/SysConfigProjectManagement";
export const MainPage = () => {
  return (
    <div>
      <Searchbar />
      <div className="mainPage">
        <History />
        <hr></hr>
        <Operations />
        <SysConfigProjectManagement />
        <AdminArea />
      </div>
    </div>
  );
};
