/* eslint-env browser */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
const root = createRoot(rootElement);

root.render(
  <StrictMode>
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
  </StrictMode>
);
