import React from 'react'
import Home from './Home';
import Login from './Login';
import Movie from './Movie';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
export default function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Movie' element={<Movie/>}></Route>

        
      </Routes>
    </div>
    </BrowserRouter>
  )
}
