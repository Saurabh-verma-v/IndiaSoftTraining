import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import PlacementPage from './pages/PlacementPage';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import CorporateTrainPage from './pages/CorporateTrainPage';
import CampusTrainPage from './pages/CampusTrainPage';
import CareerPage from './pages/CareerPage';
import SuccessStories from './pages/SuccessStories';
import Guidance from './pages/Guidance';



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

      {/* trainning inner page */}
      <Route path='/corporate-training' element={<CorporateTrainPage/>}></Route>
      <Route path='/campus-training' element={<CampusTrainPage/>}></Route>

      {/* career inner page */}
      <Route path='/join-as-trainer' element={<CareerPage/>}></Route>

      {/* insight inner page */}
      <Route path='/success-stories' element={<SuccessStories/>}></Route>
      <Route path='/career-guidance' element={<Guidance/>}></Route>
      
    </Routes>
  )
}

export default App
// /career-guidance