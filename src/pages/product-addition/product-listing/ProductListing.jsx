import React from 'react'
import "./ProductListing.css"
import { Outlet } from 'react-router-dom'

const ProductListing = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProductListing
