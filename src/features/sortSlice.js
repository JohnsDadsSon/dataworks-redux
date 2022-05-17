import { createSlice } from "@reduxjs/toolkit";
import { menuitems } from "./menuitems";

export const sortSlice = createSlice({
  name: "sorting",
  initialState: {
    menuState: [...menuitems],
    sortState: "group",
    searchTerm: "",
    historyClicks: [],
    highlighted: [],
  },
  reducers: {
    sortMenuAlphabet: (state, action) => {
      if (action.payload === "group") {
        state.sortState = "group";
        state.menuState = [...menuitems];
      } else if (action.payload === "az") {
        state.sortState = "az";
        return void {
          menuState: [
            ...state.menuState.sort((a, b) => a.title.localeCompare(b.title)),
          ],
        };
      }
    },
    searchFilter: (state, action) => {
      state.searchTerm = action.payload;
    },
    historyClicks: (state, action) => {
      if (state.historyClicks.includes(action.payload)) {
        return void {
          historyClicks: [
            state.historyClicks.sort(function (x, y) {
              return x == action.payload ? -1 : y == action.payload ? 1 : 0;
            }),
          ],
        };
      } else if (state.historyClicks.length > 9) {
        return void {
          historyClicks: [state.historyClicks.pop()],
          historyClicks: [state.historyClicks.splice(0, 0, action.payload)],
        };
      } else {
        return void {
          historyClicks: [state.historyClicks.splice(0, 0, action.payload)],
        };
      }
    },
    historyItemClick: (state, action) => {
      state.highlighted = action.payload;
    },
    clearHistory: (state) => {
      state.historyClicks = [];
    },
  },
});

export default sortSlice.reducer;

export const selectMenuState = (state) => state.sorting.menuState;
export const selectSortState = (state) => state.sorting.sortState;
export const selectSearchTerm = (state) => state.sorting.searchTerm;
export const selectHistoryClicks = (state) => state.sorting.historyClicks;
export const selectHighlighted = (state) => state.sorting.highlighted;
export const {
  sortMenuAlphabet,
  searchFilter,
  historyClicks,
  clearHistory,
  historyItemClick,
} = sortSlice.actions;
