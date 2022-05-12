import React from "react";
import "../css/history.css";
import { useSelector } from "react-redux";
import { selectHistoryClicks } from "../../features/sortSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearHistory } from "../../features/sortSlice";
import { historyItemClick } from "../../features/sortSlice";
import { selectHighlighted } from "../../features/sortSlice";

export const History = () => {
  const dispatch = useDispatch();
  const historyClicks = useSelector(selectHistoryClicks);
  const highlighted = useSelector(selectHighlighted);
  const handleClearHistory = () => {
    dispatch(clearHistory());
  };
  const handleClick = (event) => {
    dispatch(historyItemClick(event.target.value));
  };
  return (
    <div className="history">
      <div className="center">
        <h3> HISTORY</h3>
        <Button onClick={handleClearHistory}>Clear History</Button>
        {historyClicks.map((item) => {
          if (historyClicks == "") {
            return "Nothing to see!";
          } else {
            return (
              <Button
                value={item}
                variant={highlighted == item ? "contained" : "outlined"}
                key={item.key}
                onClick={handleClick}
              >
                {item}
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
};
