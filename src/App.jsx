// npm i react-router-dom
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Explore from './components/Explore';
import Home from './components/Home';
import Fun from './components/Fun';
import Tips from './components/Tips';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure the app renders only after full page load
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <h2 className="text-xl text-gray-700">Loading...</h2>
      </div>
    );
  }

  return (
    <Routes>
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
