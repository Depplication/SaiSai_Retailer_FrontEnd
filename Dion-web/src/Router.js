import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebButtonPage from "./views/WebButton/WebButtonPage";
import WebTextFieldPage from "./views/WebTextField/WebTextFieldPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/web-button" element={<WebButtonPage />}></Route>
        <Route exact path="/web-textfield" element={<WebTextFieldPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
