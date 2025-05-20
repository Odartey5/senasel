import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Menu from './component/Menu/Menu';
import Reservation from './component/Reservation';
import Contact from './Pages/contactus';
import Footer from './component/Footer';



// Main App component
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Our Restaurant</h1>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;