
import Tech from '../components/Tech';
import Works from '../components/Works';
import About from '../components/About';
import Education from '../components/Education';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import  StarsCanvas  from '../components/canvas/Stars';
import Footer from '../components/Footer';

const Home  = () => {

  return (
   
    <div className='relative z-0 bg-secondary  dark:bg-primary '>
      <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
   
     <Hero />
     <Navbar />
   
 
      </div>
      <About />
      <Education/>
      <Tech />
      
      <Works /> 

  
      <div className='relative z-0'>

        <Contact />
        <StarsCanvas/>

      <Footer/>
      </div>
    </div>

  );
}

export default Home;
