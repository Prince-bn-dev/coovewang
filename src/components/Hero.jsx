import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="hero">
    <motion.div
      className="hero-bg"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <h1>Coveewang</h1>
      <p>Photographe Portrait & Lifestyle</p>
      <motion.a
        href="#gallery"
        whileHover={{ scale: 1.07 }}
        className="hero-btn"
      >
        Voir la galerie
      </motion.a>
    </motion.div>
  </section>
);

export default Hero;
