import React from "react";
import "./Topbar.css";
import { InputLabel } from "@mui/material";
import { Select, FormControl, MenuItem } from "@mui/material";

export const Topbar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img
              className="logo"
              src="./dataworkspng.png"
              alt="dataworks logo"
            />
            <FormControl
              variant="filled"
              sx={{ backgroundColor: "#3e3e6e", borderRadius: 1 }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Main Menu
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Main Menu"
              >
                <MenuItem>What</MenuItem>
                <MenuItem>Goes</MenuItem>
                <MenuItem>Here?</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="topRight">
            <FormControl variant="filled" sx={{ borderRadius: 1 }}>
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Allen O'Neill
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Main Menu"
              >
                <MenuItem>What</MenuItem>
                <MenuItem>Goes</MenuItem>
                <MenuItem>Here?</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ borderRadius: 1 }}>
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Support
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Main Menu"
              >
                <MenuItem>What</MenuItem>
                <MenuItem>Goes</MenuItem>
                <MenuItem>Here?</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};
