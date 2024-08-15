import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import QuickInfo from './components/QuickInfo/QuickInfo'
import QuickConnectUs from './components/QuickConnectUs/QuickConnectUs'
import Reviews from './components/Reviews/Reviews'
import OurProjects from './components/OurProjects/OurProjects'
import Stats from './components/Stats/Stats'
import Interno from './components/Interno/Interno'


import AboutUs from './pages/AboutUs/AboutUs';
import HowWeWork from './pages/HowWeWork/HowWeWork';
import SingleServices from './pages/SingleServices/SingleServices';
import Pricing from './pages/Pricing/Pricing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <QuickInfo />
            <QuickConnectUs />
            <Reviews />
            <OurProjects />
            <Stats />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<HowWeWork />} />
        <Route path="/example_services" element={<SingleServices />} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
