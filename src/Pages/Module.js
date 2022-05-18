import React from "react";
import { menuitems } from "../features/menuitems";
import "../components/css/modulepages.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";
import { historyClicks, selectHistoryClicks } from "../features/sortSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentModule } from "../features/sortSlice";
export const Module = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyClicks(module));
  }, []);

  const module = useSelector(selectCurrentModule);
  const moduleInfo = menuitems.filter((obj) => obj.title === module)[0];
  {
    return (
      <div className="modulePage">
        <Link to="/">
          <HomeIcon
            style={{
              textDecoration: "none",
              position: "absolute",
              left: "10px",
              fontSize: "50",
            }}
            variant="contained"
          >
            Return to menu page
          </HomeIcon>
        </Link>
        <div className="moduleIcon">{moduleInfo.icon}</div>
        <div className="text">
          <h1>{moduleInfo.title}</h1>
          <p>{moduleInfo.description}</p>
        </div>
      </div>
    );
  }
};
