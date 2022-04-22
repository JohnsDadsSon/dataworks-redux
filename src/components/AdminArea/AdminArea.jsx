import React from "react";
import "../SysConfigProjectManagement/SysConfigProjectManagement.css";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/sortSlice";

export const AdminArea = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  const searchTerm = useSelector(selectSearchTerm);
  if (sortState === "group") {
    return (
      <div className="adminArea">
        <h3>ADMIN AREA</h3>
        {menuState
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
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
