import React from "react";
import "./AdminArea.css";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";

export const AdminArea = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  if (sortState === "group") {
    return (
      <div className="Admin Area">
        <h3>ADMIN AREA</h3>
        {menuState
          .filter(function (ele) {
            return ele.catagory === "Admin Area";
          })
          .map((item) => {
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
  }
};
