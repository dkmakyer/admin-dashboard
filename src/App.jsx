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
        <div className="flex flex-row">
          <SideBar />
          <Header />
        </div>
        <div className="main-screen absolute translate-y-[-30px] w-[85.3vw] h-[89.8vh] translate-x-[11.4rem] translate-y-[-35.5rem]">
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="tiles" element={<Tiles />} />
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
