import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import GetQuote from './pages/GetQuote';



export default function App() {
  
  return (
    <div>
      <NavBar />
      <ToastContainer limit={1} position="bottom-left" theme="colored" />

      <Routes> 
        <Route path='/' element={<LandingPage />} />
        <Route path='/get-quote' element={<GetQuote/> }/>
      </Routes>
      <Footer />
    </div>
  )
}
