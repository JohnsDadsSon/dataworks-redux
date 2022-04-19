import React from "react";
import "./Operations.css";
import { menuitems } from "../../features/menuitems";
import { Button } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export const Operations = () => {
  return (
    <div className="operations">
      <h3>OPERATIONS</h3>
      {menuitems.map((item) => {
        return (
          <ButtonUnstyled className="menuItemLayout">
            <div className="icon">{item.icon}</div>
            <div className="titleAndDesc">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </ButtonUnstyled>
        );
      })}
    </div>
  );
};
