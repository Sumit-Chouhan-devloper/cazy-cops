import './App.css';
import { useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Faqs from './components/Faq';
import AboutUs from './components/AboutUs';
import Impact from './components/Impact';
import RoadMap from './components/RoadMap';
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from './components/Preloader';
function App() {
  useEffect(() => {
    AOS.init(
      {disable: 'mobile',
      duration: 3000,
      once:true,
    });
  }, []);
  return (
    <>
    <div className='mw_1920 overflow-hidden mx-auto'>
      <Preloader/>
      <Hero/>
      <AboutUs/>
      <Impact/>
      <RoadMap/>
      <Faqs/>
      </div>
    </>

  );
}

export default App;
