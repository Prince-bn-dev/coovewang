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
          <section class="portfolio-section">
            <h2>Événements récents</h2>
            <div class="portfolio-grid">
              <div class="photo-card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src="/images/14.jpg" alt="Mariage - Cotonou" />
                  </div>
                  <div class="card-back">
                    <h3>Mariage à Cotonou</h3>
                    <p>Un moment magique capturé avec élégance et émotions à la plage de Fidjrossè.</p>
                  </div>
                </div>
              </div>

              <div class="photo-card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src="/images/8.jpg" alt="Shooting Mode" />
                  </div>
                  <div class="card-back">
                    <h3>Shooting Mode</h3>
                    <p>Séance mode haute couture avec jeux d’ombres et de lumière en studio.</p>
                  </div>
                </div>
              </div>

              <div class="photo-card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src="/images/3.jpg" alt="Événement Corporate" />
                  </div>
                  <div class="card-back">
                    <h3>Événement Corporate</h3>
                    <p>Cocktail professionnel organisé par la BCI, couverture en temps réel.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
