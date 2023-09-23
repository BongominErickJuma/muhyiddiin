import React from "react"
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from './components/about/About'
import Admissions from './components/admissions/Admission'
import Contact from './components/contact/Contact'
import Programs from './components/programs/Programs'
import Nav from './Navbar/nav/Nav'
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="admissions" element={<Admissions/>} />
          <Route path="programs" element={<Programs/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
