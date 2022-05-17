import React from "react";
import { menuitems } from "../features/menuitems";
import "../components/css/modulepages.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const ProxyManagement = () => {
  const filtered = menuitems.filter((obj) => obj.link === "/ProxyManagement");
  return (
    <div className="modulePage">
      <Link to="/">
        <HomeIcon
          style={{
            textDecoration: "none",
            position: "absolute",
            left: "10px",
            fontSize: "60",
          }}
          variant="contained"
        >
          Return to menu page
        </HomeIcon>
      </Link>
      <div className="moduleIcon">{filtered[0].icon}</div>
      <div className="text">
        <h1>{filtered[0].title}</h1>
        <p>{filtered[0].description}</p>
      </div>
    </div>
  );
};
