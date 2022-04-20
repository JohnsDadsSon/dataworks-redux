import React from "react";
import "./Operations.css";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { useSelector } from "react-redux";

export const Operations = () => {
  const menuState = useSelector(selectMenuState);
  return (
    <div className="operations">
      <h3>OPERATIONS</h3>
      {menuState.map((item) => {
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
