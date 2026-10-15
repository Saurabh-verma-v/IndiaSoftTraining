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

// admin

import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/Dashboard';
import AdminLayout from './admin/components/AdminLayout';
import AdminCategories from './admin/pages/AdminCategories';
import AdminCourses from './admin/pages/AdminCourses';
import AdminEnquiries from './admin/pages/AdminEnquiries.jsx';
import AdminTrainerApplications from './admin/pages/AdminTrainerApplications.jsx';
import AdminTestimonials from './admin/pages/AdminTestimonials.jsx';
import AdminSuccessStories from './admin/pages/AdminSuccessStories.jsx';
import AdminTrainingServices from './admin/pages/AdminTrainingServices.jsx';
import AdminSettings from './admin/pages/AdminSettings.jsx';

import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* home page */}
      <Route path='/' element={<HomePage />}></Route>
      {/* About page */}
      <Route path='/about' element={<AboutPage />}></Route>
      {/* program page */}
      <Route path='/program' element={<ProgramPage />}></Route>
      {/* Placement page */}
      <Route path='/placement' element={<PlacementPage />}></Route>
      {/* testimonial page */}
      <Route path='/testimonials' element={<Testimonials />}></Route>
      {/* contact page */}
      <Route path='/contact' element={<ContactUs />}></Route>

      {/* trainning inner page */}
      <Route path='/corporate-training' element={<CorporateTrainPage />}></Route>
      <Route path='/campus-training' element={<CampusTrainPage />}></Route>

      {/* career inner page */}
      <Route path='/join-as-trainer' element={<CareerPage />}></Route>

      {/* insight inner page */}
      <Route path='/success-stories' element={<SuccessStories />}></Route>
      <Route path='/career-guidance' element={<Guidance />}></Route>

      {/* Admin area */}
      <Route path='/admin/login' element={<AdminLogin />}></Route>

      <Route element={<AdminProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="courses" element={<AdminCourses />} />
        <Route path="enquiries" element={<AdminEnquiries />} />
        <Route path="trainer-applications" element={<AdminTrainerApplications />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="success-stories" element={<AdminSuccessStories />} />
        <Route path="training-services" element={<AdminTrainingServices />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      </Route>

    </Routes>
  )
}

export default App
// /career-guidance