import React from "react";
import "./History.css";
import { useSelector } from "react-redux";
import { selectHistoryClicks } from "../../features/sortSlice";

export const History = () => {
  const historyClicks = useSelector(selectHistoryClicks);
  return (
    <div className="history">
      <div className="center">
        <h3> HISTORY</h3>
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
