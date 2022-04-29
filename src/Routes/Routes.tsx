import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<Product />} />
  </Routes>
)

export default MyRoutes
