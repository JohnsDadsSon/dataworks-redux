import React, { useEffect, useState } from "react";
import "../css/menuitems.css";
import { historyClicks } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/sortSlice";
import { selectHighlighted } from "../../features/sortSlice";

export const SysConfigProjectManagement = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  const searchTerm = useSelector(selectSearchTerm);
  const highlighted = useSelector(selectHighlighted);

  const dispatch = useDispatch();
  const handleHistory = (event) => {
    dispatch(historyClicks(event.target.value));
  };
  const filteredSysConfig = [
    ...menuState
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
      .filter(function (ele) {
        return ele.catagory === "System Configuration";
      }),
  ];
  const filteredProjectManagement = [
    ...menuState
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
      .filter(function (ele) {
        return ele.catagory === "Project Management";
      }),
  ];
  const startLengthSys = menuState.filter(function (ele) {
    return ele.catagory === "System Configuration";
  }).length;
  const startLengthProj = menuState.filter(function (ele) {
    return ele.catagory === "Project Management";
  }).length;
  if (sortState === "group") {
    return (
      <div className="sysConfigProjectManagement">
        <h3
          id="sysTitle"
          className="titleHead"
          style={
            filteredSysConfig.length > 0 ? { display: "" } : { display: "none" }
          }
        >
          SYSTEM CONFIGURATION
        </h3>
        <div
          className="sysConfig"
          style={
            (filteredSysConfig.length > 0
              ? { display: "" }
              : { display: "none" },
            filteredSysConfig.length < startLengthSys
              ? { justifyContent: "flex-start" }
              : { justifyContent: "space-evenly" })
          }
        >
          {filteredSysConfig.map((item) => {
            return (
              <ButtonUnstyled
                onFocus={handleHistory}
                value={item.title}
                className={
                  item.title == highlighted
                    ? "menuItemLayoutHighlighted"
                    : "menuItemLayout"
                }
                key={item.key}
              >
                <div className="icon">{item.icon}</div>
                <div className="titleAndDesc">
                  <div className="title">{item.title}</div>
                  <div className="description">{item.description}</div>
                </div>
              </ButtonUnstyled>
            );
          })}
        </div>
        <br></br>
        <h3
          className="titleHead"
          id="projTitle"
          style={
            filteredProjectManagement.length > 0
              ? { display: "" }
              : { display: "none" }
          }
        >
          PROJECT MANAGEMENT
        </h3>
        <div
          className="projectManagement"
          style={
            (filteredProjectManagement.length > 0
              ? { display: "" }
              : { display: "none" },
            filteredProjectManagement.length < startLengthProj
              ? { justifyContent: "flex-start" }
              : { justifyContent: "space-evenly" })
          }
        >
          {filteredProjectManagement.map((item) => {
            if (filteredProjectManagement.length > 0) {
              return (
                <ButtonUnstyled
                  onFocus={handleHistory}
                  value={item.title}
                  className={
                    item.title == highlighted
                      ? "menuItemLayoutHighlighted"
                      : "menuItemLayout"
                  }
                  key={item.key}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="titleAndDesc">
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                  </div>
                </ButtonUnstyled>
              );
            }
          })}
        </div>
      </div>
    );
  }
};
