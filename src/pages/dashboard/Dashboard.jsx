import React from 'react'
import "./Dashboard.css";
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container p-2">
        <Outlet/>
      </div>
    </>
  )
}

export default Dashboard
