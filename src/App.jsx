import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Feature from './components/Feature';
import Guide from './components/Guide';
import PricePlan from './components/PricePlan';
import Highlights from './components/Highlights';

function App() {


  return (
    <>
      <Hero />
      <Benefits />
      <Feature />
      <Highlights />
      <PricePlan />
      <Guide />
      <Footer />

    </>
  )
}

export default App
