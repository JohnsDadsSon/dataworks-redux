import React, { useState } from "react";
import "./Searchbar.css";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { sortMenu } from "../../features/sortSlice";
import { useDispatch } from "react-redux";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState("group");
  const handleChange = () => {
    if (toggle == "AZ") {
      dispatch(sortMenu("AZ"));
      setToggle("group");
    } else if (toggle == "group") {
      dispatch(sortMenu("group"));
      setToggle("AZ");
    }
  };

  return (
    <div className="searchAndSwitch">
      <div className="Search">
        <div className="SearchIconWrapper">
          <Search id="searchIcon" />
        </div>
        <InputBase
          placeholder="Menu Search"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className="switchWrapper">
        <ToggleButtonGroup
          color="primary"
          value={toggle}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton color="secondary" value="Group">
            Group
          </ToggleButton>
          <ToggleButton color="secondary" value="A-Z">
            A-Z
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
