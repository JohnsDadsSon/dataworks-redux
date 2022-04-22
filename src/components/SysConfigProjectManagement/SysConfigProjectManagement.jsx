import React from "react";
import "./SysConfigProjectManagement.css";
import { historyClicks } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/sortSlice";

export const SysConfigProjectManagement = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const handleHistory = (event) => {
    dispatch(historyClicks(event.target.value));
  };
  if (sortState === "group") {
    return (
      <div>
        <div className="sysConfigProjectManagement">
          <div className="sysConfig">
            <h3>SYSTEM CONFIGURATION</h3>
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
                return ele.catagory === "System Configuration";
              })
              .map((item) => {
                return (
                  <ButtonUnstyled
                    onFocus={handleHistory}
                    value={item.title}
                    className="menuItemLayout"
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

          <div className="projectManagement">
            <br></br>
            <h3>PROJECT MANAGEMENT</h3>
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
                return ele.catagory === "Project Management";
              })
              .map((item) => {
                return (
                  <ButtonUnstyled
                    onFocus={handleHistory}
                    value={item.title}
                    className="menuItemLayout"
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
        </div>
      </div>
    );
  }
};
