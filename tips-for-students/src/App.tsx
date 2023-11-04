import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Four from './pages/Four';
import Second from './pages/Second';
import First from './pages/First';
import Third from './pages/Third';
import '../src/components/ItemCard.css'

function App() {
  return (
       <Router>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/pizzas' element={<First />} />
            <Route path='/desserts' element={<Second />} />
            <Route path='/drinks' element={<Third />} />
          </Routes>
 
        </Router>
  );
}

export default App;
