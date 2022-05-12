import React from "react";
import "../css/menuitems.css";
import { historyClicks } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/sortSlice";
import { selectHighlighted } from "../../features/sortSlice";

export const AdminArea = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  const searchTerm = useSelector(selectSearchTerm);
  const highlighted = useSelector(selectHighlighted);

  const dispatch = useDispatch();
  const handleHistory = (event) => {
    dispatch(historyClicks(event.target.value));
  };
  const filteredAdmin = [
    ...menuState
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
      .filter(function (ele) {
        return ele.catagory === "Admin Area";
      }),
  ];
  if (sortState === "group") {
    return (
      <div className="adminArea">
        <h3 className="titleHead">ADMIN AREA</h3>
        <h4 hidden={filteredAdmin.length >= 1 ? true : false}>
          Nothing to see here...
        </h4>
        <div className="adminArea">
          {filteredAdmin.map((item) => {
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
      </div>
    );
  }
};
