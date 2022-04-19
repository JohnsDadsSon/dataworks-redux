import React, { useState } from "react";
import "./Searchbar.css";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
export const Searchbar = () => {
  const [sort, setSort] = useState();
  const handleChange = (event, newSort) => {
    setSort(newSort);
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
          value={sort}
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
