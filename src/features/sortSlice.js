import { createSlice } from "@reduxjs/toolkit";
import { menuitems } from "./menuitems";

export const sortSlice = createSlice({
  name: "sorting",
  initialState: {
    menuState: [...menuitems],
    sortState: "group",
    searchTerm: "",
    historyClicks: [""],
  },
  reducers: {
    sortMenuAlphabet: (state, action) => {
      if (action.payload === "group") {
        state.sortState = "group";
        state.menuState = [...menuitems];
      } else {
        if (state.sortState === "az") {
          state.sortState = "za";
          return void {
            menuState: [
              ...state.menuState.sort((a, b) => b.title.localeCompare(a.title)),
            ],
          };
        } else {
          state.sortState = "az";
          return void {
            menuState: [
              ...state.menuState.sort((a, b) => a.title.localeCompare(b.title)),
            ],
          };
        }
      }
    },
    searchFilter: (state, action) => {
      state.searchTerm = action.payload;
    },
    historyClicks: (state, action) => {
      state.historyClicks.push(action.payload);
    },
  },
});

export default sortSlice.reducer;

export const selectMenuState = (state) => state.sorting.menuState;
export const selectSortState = (state) => state.sorting.sortState;
export const selectSearchTerm = (state) => state.sorting.searchTerm;
export const selectHistoryClicks = (state) => state.sorting.historyClicks;
export const { sortMenuAlphabet, searchFilter, historyClicks } =
  sortSlice.actions;
