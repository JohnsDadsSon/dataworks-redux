import React from "react";
import "../SysConfigProjectManagement/SysConfigProjectManagement.css";
import { sortMenuAlphabet, searchFilter } from "../../features/sortSlice";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { selectMenuState } from "../../features/sortSlice";
import { selectSortState } from "../../features/sortSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/sortSlice";
import { historyClicks } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
export const Operations = () => {
  const menuState = useSelector(selectMenuState);
  const sortState = useSelector(selectSortState);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const handleHistory = (event) => {
    dispatch(historyClicks(event.target.value));
  };
  if (sortState === "group") {
    return (
      <div className="operations">
        <h3 className="titleHead">OPERATIONS GROUP</h3>
        <div className="operations">
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
              return ele.catagory === "Operations";
            })
            .map((item) => {
              return (
                <div>
                  <ButtonUnstyled
                    onFocus={handleHistory}
                    className="menuItemLayout"
                    value={item.title}
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="titleAndDesc">
                      <div className="title">{item.title}</div>
                      <div className="description">{item.description}</div>
                    </div>
                  </ButtonUnstyled>
                </div>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="operationsAZ">
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
          .map((item) => {
            return (
              <div className="operations">
                <div>
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
