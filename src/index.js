import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import ProjectHome from './components/Project/ProjectHome';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<ChakraProvider>
  <HashRouter>
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<Experience />} />
      <Route path="project" element={<ProjectHome />} />
      <Route path="project/:article" element={<Project />} />
      <Route path="contact" element={<Home />} />
      <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  </HashRouter>
</ChakraProvider>
);
