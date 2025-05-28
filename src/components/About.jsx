import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section className="about" id="about">
    <motion.div
      className="about-content"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <img src="/images/personne.jpg" alt="Covee Wang" />
      <div>
        <h2>A Little About Me</h2>
        <h5>
        Hello! I'm Covee Wang, a people & events photographer from China whose creative vision has been shaped by life in London and Paris.
        </h5>
        <p>
          With a background in photojournalism, I capture authentic moments that tell your unique story. From the excitement of the Paris 2024 Olympics to intimate portraits, my lens seeks to reveal genuine emotions and connections. Based in Paris, I blend cultural perspectives with artistic vision to create meaningful images that stand the test of time.
        </p>
      </div>
    </motion.div>
  </section>
);

export default About;
