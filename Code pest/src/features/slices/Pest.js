import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Safely parse localStorage data
let pestItems = [];
try {
  const storedPest = localStorage.getItem("pest");
  pestItems = storedPest ? JSON.parse(storedPest) : [];
} catch (error) {
  console.error("Failed to parse 'pest' from localStorage:", error);
  localStorage.removeItem("pest");
}

const initialState = {
  pest: pestItems,
};

export const pestSlice = createSlice({
  name: "pest",
  initialState,
  reducers: {
    addToPast: (state, action) => {
      const pest = action.payload;
      state.pest.push(pest);
      localStorage.setItem("pest", JSON.stringify(state.pest));
      toast.success("Pest Created Successfully");
    },

    updateToPest: (state, action) => {
      // You can implement logic here if needed
      const pest = action.payload;
      const index = state.pest.findindex((item) => {
        item._id === pest._id;
      });

      if (index >= 0) {
        state.pest[index] = pest;
        localStorage.setItem("pest", JSON.stringify(state.pest));
        toast.success("Pest Update Successfully");
      }
    },

    resetAllPest: (state) => {
      state.pest = [];
      localStorage.removeItem("pest");
      toast.success("All Pests Reset");
    },

    removeFromPest: (state, action) => {
      const idToRemove = action.payload;
      state.pest = state.pest.filter((item) => item.id !== idToRemove);
      localStorage.setItem("pest", JSON.stringify(state.pest));
      toast.success("Pest Removed");
    },
  },
});

export const { addToPast, updateToPest, resetAllPest, removeFromPest } =
  pestSlice.actions;

export default pestSlice.reducer;
