import React from 'react'
import "./Dashboard.css";
import SalesContainer from '../../components/sales-container/SalesContainer';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container p-2 flex flex-row gap-2">
      <SalesContainer/>
      <SalesContainer/>
      <SalesContainer/>
      <SalesContainer/>
      <SalesContainer/>
      </div>
    </>
  )
}

export default Dashboard
