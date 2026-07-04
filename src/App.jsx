import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import MyWork from './Components/MyWork/MyWork'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import WebDesign from './Components/Pages/WebDesign'
import StaticWebsite from './Components/Pages/StaticWebsite'
import LandingPage from './Components/Pages/LandingPage'
import PortfolioWebsite from './Components/Pages/PortfolioWebsites'
import ReusableUi from './Components/Pages/ReusableUi'
import BasicWebApps from './Components/Pages/BasicWebApps'
import Internships from './Components/Pages/Internships'


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/WebDesign' element={<WebDesign />} />
        <Route path='/StaticWebsite' element={<StaticWebsite />} />
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path='/PortfolioWebsite' element={<PortfolioWebsite />} />
        <Route path='/ReusableUi' element={<ReusableUi />} />
        <Route path='/BasicWebApps' element={<BasicWebApps />} />
         <Route path='/internships' element={<Internships />} />
        

      </Routes>
    </BrowserRouter>
  );
}


export default App;
