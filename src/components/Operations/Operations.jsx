import React from "react";
import "./Operations.css";
import { menuitems } from "../MenuItems/menuitems";

export const Operations = () => {
  return (
    <div className="operations">
      <h3>OPERATIONS</h3>
      {menuitems.map((item) => {
        return (
          <div className="menuItemLayout">
            <div className="icon">{item.icon}</div>
            <div className="titleAndDesc">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
