import React from "react";
import "./History.css";
import { useSelector } from "react-redux";
import { selectHistoryClicks } from "../../features/sortSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearHistory } from "../../features/sortSlice";

export const History = () => {
  const dispatch = useDispatch();
  const historyClicks = useSelector(selectHistoryClicks);
  const handleClearHistory = () => {
    dispatch(clearHistory());
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
            return <li>{item}</li>;
          }
        })}
      </div>
    </div>
  );
};
