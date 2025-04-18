import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import { Home } from './App';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
);

export default AppRoutes;
