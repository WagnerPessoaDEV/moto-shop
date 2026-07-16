// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-eyebrow">Nossa história</p>
          <h2>Mais de 15 anos conectando voce a sua proxima moto</h2>
          <p>
            A StartCria021 é uma empresa de tecnologia e design especializada em transformar ideias em soluções digitais modernas e eficientes. Atuamos no desenvolvimento de sites, sistemas web, landing pages, identidade visual, manutenção de computadores, instalação de redes e criação de conteúdo para redes sociais.

Nosso objetivo é ajudar empresas e empreendedores a fortalecerem sua presença digital através da tecnologia, criatividade e inovação, oferecendo soluções personalizadas que impulsionam resultados e conectam marcas ao seu público de forma estratégica.

Na StartCria021, acreditamos que cada projeto é único e merece uma combinação de design, tecnologia e atenção aos detalhes para gerar impacto real e crescimento sustentável.
          </p>
          <div className="about-highlights">
            <div>
              <span>+3.500</span>
              <small>Motos vendidas</small>
            </div>
            <div>
              <span>100%</span>
              <small>Clientes satisfeitos</small>
            </div>
            <div>
              <span>24h</span>
              <small>Online</small>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Por que escolher a StartCria021?</h3>
          <ul>
            <li>Inspeção completa e revisao antes da entrega.</li>
            <li>Equipe especializada em financiamento e consorcio.</li>
            <li>Negociacao simples com opção de troca.</li>
            <li>Suporte dedicado no pos-venda.</li>
          </ul>
          <button type="button" className="btn-primary">
            Falar com um especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
