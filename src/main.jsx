import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Serie from './pages/Serie';
import Search from './pages/Search';
import PopularM from './pages/PopularM';
import PopularS from './pages/PopularS';
import UpcomingMovie from './pages/UpcomingMovie';
import Genres from './pages/Genres';
import Error from './pages/Error';
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/serie/:id' element={<Serie/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path="/movies/popular/:page" element={<PopularM/>}/>
          <Route path="/series/popular/:page" element={<PopularS/>}/>
          <Route path="/movies/upcoming/:page" element={<UpcomingMovie/>}/>
          <Route path="/genre/:Category"/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
