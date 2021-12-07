import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import TopBar from "./components/TopBar/TopBar";
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Chefs from './Pages/Chefs/Chefs';
//import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import Gallery from './Pages/Gallery/Gallery';
import Menu from './Pages/Menu/Menu';
import Specials from './Pages/Specials/Specials';
import Testimonials from './Pages/Testimonials/Testimonials';
import WhyUs from './Pages/WhyUs/WhyUs';

const App = () => {
  return (
    <>
    <TopBar />
    <Header />
    <Hero/>
    <About/>
    <WhyUs/>
    <Menu/>
    <Specials/>
    <Events/>
    <Booking/>
    <Testimonials/>
    <Gallery/>
    <Chefs/>
    {/* <Contact/> */}
    </>
  )
  
};

export default App;