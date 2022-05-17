import React from "react";
import { menuitems } from "../features/menuitems";
import "../components/css/modulepages.css";
export const SystemStatus = () => {
  const filtered = menuitems.filter((obj) => obj.link === "/SystemStatus");
  return (
    <div className="modulePage">
      <div className="moduleIcon">{filtered[0].icon}</div>
      <div className="text">
        <h1>{filtered[0].title}</h1>
        <p>{filtered[0].description}</p>
      </div>
    </div>
  );
};
