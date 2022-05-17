import React from "react";
import "../css/menuitems.css";
import { sortMenuAlphabet, searchFilter } from "../../features/sortSlice";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { Button } from "@mui/material";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/sortSlice";
import { historyClicks } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import { selectHighlighted } from "../../features/sortSlice";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Operations = () => {
  const navigate = useNavigate();
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  const searchTerm = useSelector(selectSearchTerm);
  const highlighted = useSelector(selectHighlighted);
  const dispatch = useDispatch();
  const handleHistory = (event) => {
    dispatch(historyClicks(event.target.value));
  };
  const filteredAZ = [
    ...menuState.filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    }),
  ];
  const filteredOperations = [
    ...menuState
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
      .filter(function (ele) {
        return ele.catagory === "Operations";
      }),
  ];
  const startLengthOperations = menuState.filter(function (ele) {
    return ele.catagory === "Operations";
  }).length;

  if (sortState === "group") {
    if (filteredOperations.length > 0) {
      return (
        <div className="operations">
          <h3 className="titleHead">OPERATIONS GROUP</h3>

          <div
            className="operations"
            style={
              filteredOperations.length < startLengthOperations
                ? { justifyContent: "flex-start" }
                : { justifyContent: "space-evenly" }
            }
          >
            {filteredOperations.map((item) => {
              return (
                <div key={item.key}>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <ButtonUnstyled
                      onFocus={handleHistory}
                      className={
                        item.title == highlighted
                          ? "menuItemLayoutHighlighted"
                          : "menuItemLayout"
                      }
                      value={item.title}
                    >
                      <div className="icon">{item.icon}</div>
                      <div className="titleAndDesc">
                        <div className="title">{item.title}</div>
                        <div className="description">{item.description}</div>
                      </div>
                    </ButtonUnstyled>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="operationsAZ">
        <h3 hidden={filteredAZ.length >= 1 ? true : false}>
          No items match your search
        </h3>

        {filteredAZ.map((item) => {
          return (
            <div className="operations" key={item.key}>
              <div>
                <ButtonUnstyled
                  onFocus={handleHistory}
                  value={item.title}
                  className={
                    item.title == highlighted
                      ? "menuItemLayoutHighlighted"
                      : "menuItemLayout"
                  }
                >
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
// return (
//   <div className="operations">
//     <h3>OPERATIONS GROUP</h3>
//     {menuState
//       .filter((val) => {
//         if (searchTerm == "") {
//           return val;
//         } else if (val.title.includes(searchTerm)) {
//           return val;
//         }
//       })
//       .map((item) => {
//         return (
//           <ButtonUnstyled className="menuItemLayout">
//             <div className="icon">{item.icon}</div>
//             <div className="titleAndDesc">
//               <div className="title">{item.title}</div>
//               <div className="description">{item.description}</div>
//             </div>
//           </ButtonUnstyled>
//         );
//       })
//     }
// )}
