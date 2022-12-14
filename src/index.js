import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Single from "./component/RepoDescription";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />

        <Route
          path="/user/:id"
          element={
            <Provider store={store}>
              <Single />
            </Provider>
          }
        />
        <Route
          path="*"
          exact
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
