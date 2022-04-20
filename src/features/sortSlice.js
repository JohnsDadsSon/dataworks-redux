import { createSlice } from "@reduxjs/toolkit";
import { menuitems } from "./menuitems";

const initialState = {
  menuState: [...menuitems],
};
export const sortSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    sortMenu: (state, action) => {
      if (action.payload == "AZ") {
        return void {
          menuState: [
            ...state.menuState.sort((a, b) => a.title.localeCompare(b.title)),
          ],
        };
      } else if (action.payload == "group") {
        return void {
          menuState: [
            ...state.menuState.sort((a, b) => b.title.localeCompare(a.title)),
          ],
        };
      }
    },
  },
});

export default sortSlice.reducer;

export const selectMenuState = (state) => state.sorting.menuState;

export const { sortMenu } = sortSlice.actions;
