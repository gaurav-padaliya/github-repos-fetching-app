import { createSlice, configureStore } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const Slice = createSlice({
  name: "git",
  initialState: {
    reposData: [],
  },
  reducers: {
    setRepo: (state, actions) => {
      state.reposData = [...JSON.parse(actions.payload)];
    },
    setid: (state, actions) => {
      state.id = actions.payload;
    },
  },
});

export const { setRepo } = Slice.actions;

export default Slice.reducer;
