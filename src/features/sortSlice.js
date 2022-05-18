import { createSlice } from "@reduxjs/toolkit";
import { menuitems } from "./menuitems";

export const sortSlice = createSlice({
  name: "sorting",
  initialState: {
    menuState: [...menuitems],
    sortState: "group",
    searchTerm: "",
    historyClicks: [],
    currentModule: "",
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
      return void {
        historyClicks: [
          state.historyClicks.splice(
            0,
            0,
            menuitems.filter((obj) => obj.title === action.payload)[0]
          ),
        ],
      };
    },

    clearHistory: (state) => {
      state.historyClicks = [];
    },
    buildModule: (state, action) => {
      state.currentModule = action.payload;
    },
  },
});

export default sortSlice.reducer;

export const selectMenuState = (state) => state.sorting.menuState;
export const selectSortState = (state) => state.sorting.sortState;
export const selectSearchTerm = (state) => state.sorting.searchTerm;
export const selectHistoryClicks = (state) => state.sorting.historyClicks;
export const selectCurrentModule = (state) => state.sorting.currentModule;
export const selectModuleBuilt = (state) => state.sorting.isModuleBuilt;

export const {
  sortMenuAlphabet,
  searchFilter,
  historyClicks,
  clearHistory,
  buildModule,
} = sortSlice.actions;
