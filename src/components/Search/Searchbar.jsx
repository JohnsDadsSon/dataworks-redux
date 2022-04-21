import React, { useState } from "react";
import "./Searchbar.css";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { sortMenuAlphabet } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Button,
} from "@mui/material";

export const Searchbar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("group");

  function dispatchSort() {
    dispatch(sortMenuAlphabet(value));
  }
  const handleChange = (event) => {
    setValue(event.target.value);
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
      <div className="sortButton">
        <Button onClick={dispatchSort} variant="contained" color="secondary">
          Sort
        </Button>
      </div>
      <div className="switchWrapper">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Sort</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="group" control={<Radio />} label="Group" />
            <FormControlLabel value="az" control={<Radio />} label="A-Z" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
