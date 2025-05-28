import React from 'react';
import { motion } from 'framer-motion';


const Contact = () => (
  <section className="contact" id="contact">
    <motion.form
      className="contact-form"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2>Contact</h2>
      <input type="text" placeholder="Nom" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Votre message..." required />
      <button type="submit">Envoyer</button>
    </motion.form>
  </section>
);

export default Contact;
