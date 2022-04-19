import { createSlice } from "@reduxjs/toolkit";
import { menuitems } from "./menuitems";

const initialState = {
  menuState: [...menuitems],
};
export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortMenu: (state, action) => {
      return void {
        menuState: [
          ...state.menuState.sort((a, b) => a.title.localeCompare(b.title)),
        ],
      };
    },
  },
});

export default sortSlice.reducer;
export const { sortMenu } = sortSlice.actions;
