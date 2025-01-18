import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import Tiles from "./components/tiles/Tiles";
import Charts from "./components/charts/Charts";
import Trends from "./components/trends/Trends";

const App = () => {
  return (
    <div className="relative max-h-[100vh]">
      <BrowserRouter>
        <div className="fixed top-0 left-0 bottom-0 ">
          <SideBar/>
        </div>
        <div className="fixed top-0 left-0 right-0 translate-x-[13rem]">
          <Header/>
        </div>
        <div className="main-screen absolute translate-y-[70px] w-[83.5vw] h-[89vh] translate-x-[13rem] translate-y-[-35.5rem]">
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Tiles />} />
              <Route path="charts" element={<Charts />} />
              <Route path="trends" element={<Trends />} />
            </Route>

            {/* <Route path="/products" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
