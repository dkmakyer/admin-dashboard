import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import SideBar from './components/side-bar/SideBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          {/* <Route path="/products" element={<Products/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/alerts" element={<Alerts/>}/>
          <Route path="/settings" element={<Settings/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
