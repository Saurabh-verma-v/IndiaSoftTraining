import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import PlacementPage from './pages/PlacementPage';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';


const App = () => {
  return (
    <Routes>
      {/* home page */}
      <Route path='/' element={<HomePage/>}></Route>
      {/* About page */}
      <Route path='/about' element={<AboutPage/>}></Route>
      {/* program page */}
      <Route path='/program' element={<ProgramPage/>}></Route>
      {/* Placement page */}
      <Route path='/placement' element={<PlacementPage/>}></Route>
      {/* testimonial page */}
      <Route path='/testimonials' element={<Testimonials/>}></Route>
      {/* contact page */}
      <Route path='/contact' element={<ContactUs/>}></Route>
    </Routes>
  )
}

export default App