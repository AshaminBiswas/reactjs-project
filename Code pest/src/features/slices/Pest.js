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
      const pest = action.payload;
      const index = state.pest.findIndex((item) => item._id === pest._id); // Fixed return

      if (index !== -1) {
        // Changed condition to check for -1
        state.pest[index] = pest;
        localStorage.setItem("pest", JSON.stringify(state.pest));
        toast.success("Pest Updated Successfully");
      } else {
        toast.error("Pest not found"); // Added error handling
      }
    },

    resetAllPest: (state) => {
      state.pest = [];
      localStorage.removeItem("pest");
      toast.success("All Pests Reset");
    },

    removeFromPest: (state, action) => {
      const pestId = action.payload;
      const index = state.pest.findIndex((item) => item._id === pestId);

      if (index >= 0) {
        state.pest.splice(index, 1);
        localStorage.setItem("pest", JSON.stringify(state.pest));
        toast.success("Pest Removed");
      }
    },
  },
});

export const { addToPast, updateToPest, resetAllPest, removeFromPest } =
  pestSlice.actions;

export default pestSlice.reducer;
