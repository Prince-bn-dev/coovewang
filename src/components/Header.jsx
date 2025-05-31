import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="logo">
          <a href="#hero">
            <span>Covee</span>
          </a>
        </div>
        <nav className="nav">
          {navItems.map(({ label, href }) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ scale: 1.1, color: '#e0b973' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="nav-link"
            >
              {label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
