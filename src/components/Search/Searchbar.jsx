import React, { useState } from "react";
import "../css/searchbar.css";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { sortMenuAlphabet, searchFilter } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import { useSelector } from "react-redux";
import { selectSortState } from "../../features/sortSlice";
import { menuitems } from "../../features/menuitems";
import { selectSearchTerm } from "../../features/sortSlice";
import ClearIcon from "@mui/icons-material/Clear";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Button,
} from "@mui/material";

export const Searchbar = () => {
  const sortState = useSelector(selectSortState);
  const dispatch = useDispatch();
  function dispatchSort(event) {
    dispatch(sortMenuAlphabet(event.target.value));
  }
  const handleChange = (event) => {
    dispatch(sortMenuAlphabet(event.target.value));
  };
  function dispatchSearch(ele) {
    dispatch(searchFilter(ele));
  }
  const clearSearch = () => {
    document.getElementById("menuSearch").value = "";
    dispatchSearch("");
  };

  return (
    <div className="searchAndSwitch">
      <div className="Search">
        <div className="SearchIconWrapper">
          <Search id="searchIcon" />
        </div>
        <InputBase
          id="menuSearch"
          placeholder="Menu Search"
          fullWidth
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => {
            dispatchSearch(event.target.value);
          }}
        />
        <Button id="clearButton" onClick={clearSearch}>
          <ClearIcon sx={{ color: "#352d56" }} />
        </Button>
      </div>
      <div className="sortButton"></div>
      <div className="switchWrapper">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleChange}
            defaultValue="group"
          >
            <FormControlLabel value="group" control={<Radio />} label="Group" />
            <FormControlLabel value="az" control={<Radio />} label="A-Z" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
