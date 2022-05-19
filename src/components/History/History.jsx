import React from "react";
import "../css/history.css";
import { useSelector } from "react-redux";
import { selectHistoryClicks } from "../../features/sortSlice";
import { Button } from "@mui/material";
import { ActionTypes, ButtonUnstyled } from "@mui/base";
import { useDispatch } from "react-redux";
import { clearHistory } from "../../features/sortSlice";
import { historyItemClick } from "../../features/sortSlice";
import { Link } from "react-router-dom";
import { menuitems } from "../../features/menuitems";
import { buildModule } from "../../features/sortSlice";
import { selectCurrentModule } from "../../features/sortSlice";
import { selectModuleBuilt } from "../../features/sortSlice";
export const History = () => {
  const dispatch = useDispatch();
  const historyClicks = useSelector(selectHistoryClicks);
  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleModule = (event) => {
    dispatch(buildModule(event.target.value));
  };
  return (
    <div className="history">
      <div className="center">
        <h3 className="historyTitle">HISTORY</h3>
        <ButtonUnstyled
          className="clearHistory"
          style={{
            textDecoration: "none",
            textAlign: "left",
            backgroundColor: "white",
            borderStyle: "none",
            fontFamily: "Segoe UI",
            fontSize: "12pt",
            fontWeight: "",
          }}
          onClick={handleClearHistory}
        >
          CLEAR HISTORY
        </ButtonUnstyled>
        {historyClicks.map((item) => {
          return (
            <Link
              className="historyLink"
              to={"/module"}
              onFocus={handleModule}
              style={{ textDecoration: "none" }}
              value={item.title}
            >
              <ButtonUnstyled
                className="historyButton"
                style={{
                  textDecoration: "none",
                  textAlign: "left",
                  backgroundColor: "white",
                  borderStyle: "none",
                  fontFamily: "Segoe UI",
                  fontSize: "12pt",
                }}
                value={item.title}
              >
                {item.title}
              </ButtonUnstyled>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
/* <Button
              sx={{ padding: "10px" }}
              value={item}
              variant={highlighted == item ? "contained" : ""}
              key={item.key}
              onClick={handleClick}
            >
              {item}
            </Button> */
