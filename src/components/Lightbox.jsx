import React from 'react';
import { motion } from 'framer-motion';

const Lightbox = ({ photo, onClose }) => (
  <motion.div
    className="lightbox"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.img
      src={photo.src}
      alt={photo.alt}
      initial={{ scale: 0.85 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={e => e.stopPropagation()}
    />
    <button className="close-btn" onClick={onClose}>×</button>
  </motion.div>
);

export default Lightbox;
