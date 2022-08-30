import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components'
import { Home, Add, View, Edit, MyPosts } from './pages'

import './App.css';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/v1';

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='mt-20'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='post/add' element={<Add />} />
        <Route path='post/edit/:post_id' element={<Edit />} />
        <Route path='post/:post_id' element={<View />} />
        <Route path='my-posts' element={<MyPosts />} />
      </Routes>
    </div>
  )
}

export default App