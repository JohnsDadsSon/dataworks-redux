import React, { useState } from "react";
import "./Searchbar.css";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { sortMenuAlphabet } from "../../features/sortSlice";
import { useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import { useSelector } from "react-redux";
import { selectSortState } from "../../features/sortSlice";

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
  const [value, setValue] = useState("group");
  function dispatchSort() {
    dispatch(sortMenuAlphabet(value));
    handleButtonText();
  }
  const handleChange = (event) => {
    setValue(event.target.value);
    setButtonText(event.target.value);
    handleButtonText(value);
  };

  const [buttonText, setButtonText] = useState("By Group");
  const [isError, setError] = useState(true);
  const handleButtonText = (event) => {
    if (sortState === "group") {
      if (value === "group") {
        setError(false);
        setButtonText("A-Z");
      } else {
        setError(true);
      }
    } else if (sortState === "az") {
      if (value === "az") {
        setButtonText("By Group");
        setError(false);
      } else {
        setError(true);
      }
    } else if (sortState === "za") {
      setError(false);
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
      <div className="sortButton">
        <Button
          onClick={dispatchSort}
          variant="contained"
          disabled={isError}
          sx={{ backgroundColor: "#352d56" }}
        >
          Sort {buttonText}
        </Button>
      </div>
      <div className="switchWrapper">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
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
