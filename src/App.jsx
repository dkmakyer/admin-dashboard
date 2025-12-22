import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import Tiles from "./components/tiles/Tiles";
import Charts from "./components/charts/Charts";
import Trends from "./components/trends/Trends";
import ProfitsAndLoss from "./components/profit-and-loss/ProfitsAndLoss";
import Products from "./pages/products/Products";
import ProductCategory from "./pages/product-addition/product-category/ProductCategory";
import ProductListing from "./pages/product-addition/product-listing/ProductListing";
import FillDetail from "./pages/product-addition/fill-detail/FillDetail";

const App = () => {
  return (
    <div className="app-container overflow-y-hidden min-w-[375px]">
      <HashRouter>
        <div className="app-header-container">
          <Header/>
        </div>
        <div className="app-sidebar-container">
          <SideBar/>
        </div>
         <div className="app-main-screen">
         <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Tiles />} />
              <Route path="charts" element={<Charts />} />
              <Route path="trends" element={<Trends />} />
              <Route path="profit-and-loss" element={<ProfitsAndLoss />} />
            </Route>

             <Route path="/products" element={<Products />} />
            <Route  path="/product-listing" element={<ProductListing/>}>
            <Route index element={<FillDetail/>}/>

              {/* <Route index element={<ProductCategory/>}/> */}
              {/* <Route path="fill-detail" element={<FillDetail/>}/> */}
            </Route>
             {/* </Route> */}
            {/*<Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} /> */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
