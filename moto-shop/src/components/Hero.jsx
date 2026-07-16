// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Fachada.jpg';

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
      }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        StartCria <span>021</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Vamos construir juntos o seu sonho de ter uma moto, com as melhores condições do mercado e um atendimento que faz você se sentir em casa.
      </motion.p>
      
      <motion.a 
        href="#inventory" 
        className="btn-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Ver Estoque
      </motion.a>
    </section>
  );
};

export default Hero;