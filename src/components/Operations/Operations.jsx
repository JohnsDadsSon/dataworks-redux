import React from "react";
import "../SysConfigProjectManagement/SysConfigProjectManagement.css";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";

export const Operations = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  if (sortState === "group") {
    return (
      <div className="operations">
        <h3>OPERATIONS GROUP</h3>
        {menuState
          .filter(function (ele) {
            return ele.catagory === "Operations";
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
  } else {
    return (
      <div className="operationsAZ">
        {menuState.map((item) => {
          return (
            <div className="operations">
              <div>
                <ButtonUnstyled className="menuItemLayout">
                  <div className="icon">{item.icon}</div>
                  <div className="titleAndDesc">
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                  </div>
                </ButtonUnstyled>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
