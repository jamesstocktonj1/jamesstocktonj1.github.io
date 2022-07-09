import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import ProjectHome from './components/Project/ProjectHome';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<ChakraProvider>
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="education" element={<Home />} />
      <Route path="experience" element={<Home />} />
      <Route path="project" element={<ProjectHome />} />
      <Route path="project/:article" element={<Project />} />
      <Route path="contact" element={<Home />} />
      <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  </BrowserRouter>
</ChakraProvider>
);
