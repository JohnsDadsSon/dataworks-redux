import { createSlice } from "@reduxjs/toolkit";
import { menuitems } from "./menuitems";

// const initialState = {

// };
export const sortSlice = createSlice({
  name: "sorting",
  initialState: { menuState: [...menuitems], sortState: "group" },
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
  },
});
export default sortSlice.reducer;

export const selectMenuState = (state) => state.sorting.menuState;
export const selectSortState = (state) => state.sorting.sortState;
export const { sortMenuAlphabet } = sortSlice.actions;
