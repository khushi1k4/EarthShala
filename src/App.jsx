// npm i react-router-dom
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Explore from './components/Explore';
import Home from './components/Home';
import Fun from './components/Fun';
import Tips from './components/Tips';
import './App.css'

function App() {
  return (
      <Routes>
        {/* Layout route with NavBar */}
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="fun" element={<Fun />} />
          <Route path="tips" element={<Tips />} />
        </Route>
      </Routes>
  );
}

export default App;