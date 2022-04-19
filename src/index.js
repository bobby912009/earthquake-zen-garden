/* eslint-env browser */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Toolbar from "./components/Toolbar";
import DetailView from "./pages/DetailView";
import UserProfile from "./pages/UserProfile";
import "./main.css";
import { MAIN_URL, USER_PROFILE_URL } from "./utilities/real-constants";
/**
 * Setting up the single page application
 */
const rootElement = document.getElementById("root");
render(
  <>
    <BrowserRouter>
      <Routes>
        <Route
          path={MAIN_URL}
          element={
            <Toolbar>
              <App />
            </Toolbar>
          }
        ></Route>
        <Route
          path=":id"
          element={
            <Toolbar>
              <DetailView />
            </Toolbar>
          }
        />
        <Route
          path={USER_PROFILE_URL}
          element={
            <Toolbar>
              <UserProfile />
            </Toolbar>
          }
        />
      </Routes>
    </BrowserRouter>
  </>,
  rootElement
);
