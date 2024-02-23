import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import './App.css'

import Navbar from './pages/navbar/Navbar';
import Home from './components/home/Home'
import Services from './components/services/Services'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/footer' element={<Footer />}/>
      </Routes>
    </Router>
  );
}

export default App;
