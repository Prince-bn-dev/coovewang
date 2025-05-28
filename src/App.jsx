import React, { useState, useEffect } from 'react';
import CameraLoader from './components/CameraLoader';
import "./App.scss"
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       {loading ? (
          <div style={{display:"flex" , flexDirection:"column"}}>
           <CameraLoader />
         <h1>Bienvenue sur mon portfolio !</h1>
          </div>
      ) : (
        <div>
        <Header />
        <Hero />
         <About />
        <Gallery />
        <Contact />
        <Footer />
        </div>
      )}
    </>
  );
}

export default App;
