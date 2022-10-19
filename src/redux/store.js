import { configureStore } from "@reduxjs/toolkit";
import reducerfxn from "./reducer";
export default configureStore({
  reducer: {
    git: reducerfxn,
  },
});
