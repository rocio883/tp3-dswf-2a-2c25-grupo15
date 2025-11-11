import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import ProjectLog from "./components/ProjectLog";
import MemberDetail from "./components/MemberDetail";
import Houses from "./components/Houses";
import Characters from "./components/Characters";
import React from 'react';

// ✅ TP3 gallery Nico
import Gallery from './components/gallery/Gallery';

function App() {

  // TP3 gallery Nico el Array de imágenes para la galería
  const images = [
    { url: '/images/1.jpg', thumbnailUrl: '/images/1.jpg', alt: 'Logo1', title: 'Logo 1' },
    { url: '/images/2.jpg', thumbnailUrl: '/images/2.jpg', alt: 'Logo2', title: 'Logo 2' },
    { url: '/images/3.jpg', thumbnailUrl: '/images/3.jpg', alt: 'Logo3', title: 'Logo 3' },
    { url: '/images/4.jpg', thumbnailUrl: '/images/4.jpg', alt: 'Logo4', title: 'Logo 4' },
    // aca se puede agregar más imágenes :) 
  ];

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-log" element={<ProjectLog />} />
          <Route path="/member/:id" element={<MemberDetail />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>

        {/* 👇 Nueva sección: Galería Interactiva */}
           <section className="gallerySection">
               <h3>Fotos</h3>
               <Gallery images={images} />
          </section>

      </main>
    </div>
  );
}

export default App;
