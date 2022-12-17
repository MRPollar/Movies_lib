import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Category from './pages/Category';
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path="/movies/:category" element={<Category/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
