
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Feature from './components/Feature';
import Guide from './components/Guide';
import PricePlan from './components/PricePlan';
import Highlights from './components/Highlights';
import FreeGuide from './components/FreeGuide';

function App() {


  return (
    <>
      <Hero />
      <Benefits />
      <Feature />
      <Highlights />
      <PricePlan />
      <Guide />
      <FreeGuide />
      <Footer />
    </>
  )
}

export default App
