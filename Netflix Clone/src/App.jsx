import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login"
import SingleVideoPage from "./components/Single Video Page/SingleVideoPage"
function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path={`/movie/:id`} element={<SingleVideoPage />} />
      </Routes>
    </div>
  )
}

export default App
