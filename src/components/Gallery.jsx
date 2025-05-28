import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

const photos = [
  { src: '/images/1.jpg', alt: 'Portrait 1' },
  { src: '/images/2.jpg', alt: 'Portrait 2' },
  { src: '/images/3.jpg', alt: 'Portrait 3' },
  { src: '/images/4.jpg', alt: 'Portrait 4' },
  { src: '/images/5.jpg', alt: 'Portrait 5' },
  { src: '/images/6.jpg', alt: 'Portrait 6' },
  { src: '/images/7.jpg', alt: 'Portrait 7' },
  { src: '/images/8.jpg', alt: 'Portrait 8' },
  { src: '/images/9.jpg', alt: 'Portrait 9' },
  { src: '/images/10.jpg', alt: 'Portrait 10' },
  { src: '/images/11.jpg', alt: 'Portrait 11' },
  { src: '/images/12.jpg', alt: 'Portrait 12' },
  { src: '/images/13.jpg', alt: 'Portrait 13' },
  { src: '/images/14.jpg', alt: 'Portrait 14' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <h2>Galerie</h2>
      <div className="gallery-grid">
        {photos.map((photo, idx) => (
          <motion.div
            className="gallery-item"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            onClick={() => setSelected(photo)}
          >
            <img src={photo.src} alt={photo.alt} />
          </motion.div>
        ))}
      </div>
      {selected && <Lightbox photo={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Gallery;
