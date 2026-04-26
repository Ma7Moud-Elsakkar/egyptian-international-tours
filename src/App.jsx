import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import AboutOffers from './components/project/AboutOffers'

const MainLayout = () => (
  <>
    <Home />
    <Nav />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Services />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/offer/:id" element={<AboutOffers />} />
    </Routes>
  )
}

export default App
