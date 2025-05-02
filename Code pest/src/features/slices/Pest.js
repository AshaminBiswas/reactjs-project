import { createSlice, createReducer } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pest: localStorage.getItem("pest")
    ? JSON.parse(localStorage.getItem("pest"))
    : [],
};

export const pestSlice = createSlice({
  name: "pest",
  initialState,

  reducers: {
    addToPast: (state, action) => {
      const pest = action.payload;
      state.pest.push(pest);
      localStorage.setItem("pest", JSON.stringify(state.pest));
      toast("Pest Created Successfully");
    },
    updateToPest: (state, action) => {},
    resetAllPest: (state, action) => {},
    removeFromPest: (state, action) => {},
  },
});

export const { addToPast, updateToPest, resetAllPest, removeFromPest } =
  pestSlice.actions;
export default pestSlice.reducer;
