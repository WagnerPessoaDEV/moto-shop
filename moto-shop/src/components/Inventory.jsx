// src/components/Inventory.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import xmax2024Image from '../assets/estoque/xmax-2024.jpg';
import xmax2024Image1 from '../assets/estoque/xmax-2024 (1).jpg';
import xmax2024Image2 from '../assets/estoque/xmax-2024 (2).jpg';
import xmax2024Image3 from '../assets/estoque/xmax-2024 (3).jpg';
import xmax2024Image4 from '../assets/estoque/xmax-2024 (4).jpg';
import xmax2024Image5 from '../assets/estoque/xmax-2024 (5).jpg';
import cb500fImage1 from '../assets/estoque/Novas/CB500F/CB500F (1).png';
import cb500fImage2 from '../assets/estoque/Novas/CB500F/CB500F (2).png';
import cb500fImage3 from '../assets/estoque/Novas/CB500F/CB500F (3).png';
import cb500fImage4 from '../assets/estoque/Novas/CB500F/CB500F (4).png';
import cb500fImage5 from '../assets/estoque/Novas/CB500F/CB500F (5).png';
import mt03Image1 from '../assets/estoque/Novas/MT03/MT03 (1).png';
import mt03Image2 from '../assets/estoque/Novas/MT03/MT03 (2).png';
import mt03Image3 from '../assets/estoque/Novas/MT03/MT03 (3).png';
import mt03Image4 from '../assets/estoque/Novas/MT03/MT03 (4).png';
import mt03Image5 from '../assets/estoque/Novas/MT03/MT03 (5).png';
import r15Image1 from '../assets/estoque/Novas/YamahaR15/Yamaha R15 (1).png';
import r15Image2 from '../assets/estoque/Novas/YamahaR15/Yamaha R15 (2).png';
import r15Image3 from '../assets/estoque/Novas/YamahaR15/Yamaha R15 (3).png';
import r15Image4 from '../assets/estoque/Novas/YamahaR15/Yamaha R15 (4).png';
import r15Image5 from '../assets/estoque/Novas/YamahaR15/Yamaha R15 (5).png';
import cb500xImage1 from '../assets/estoque/Usadas/CB 500x/CB 500x (1).png';
import cb500xImage2 from '../assets/estoque/Usadas/CB 500x/CB 500x (2).png';
import cb500xImage3 from '../assets/estoque/Usadas/CB 500x/CB 500x (3).png';
import cb500xImage4 from '../assets/estoque/Usadas/CB 500x/CB 500x (4).png';
import cb500xImage5 from '../assets/estoque/Usadas/CB 500x/CB 500x (5).png';
import iron883Image1 from '../assets/estoque/Usadas/Harley Davidson Iron 883/Harley Davidson Iron 883 (1).jpg';
import iron883Image2 from '../assets/estoque/Usadas/Harley Davidson Iron 883/Harley Davidson Iron 883 (2).jpg';
import iron883Image3 from '../assets/estoque/Usadas/Harley Davidson Iron 883/Harley Davidson Iron 883 (3).jpg';
import iron883Image4 from '../assets/estoque/Usadas/Harley Davidson Iron 883/Harley Davidson Iron 883 (4).jpg';
import iron883Image5 from '../assets/estoque/Usadas/Harley Davidson Iron 883/Harley Davidson Iron 883 (5).jpg';
import iron883Image6 from '../assets/estoque/Usadas/Harley Davidson Iron 883/Harley Davidson Iron 883 (6).jpg';
import fz25Image1 from '../assets/estoque/Usadas/Fz25/2026-07-16_18h34_04.png';
import fz25Image2 from '../assets/estoque/Usadas/Fz25/2026-07-16_18h34_10.png';
import fz25Image3 from '../assets/estoque/Usadas/Fz25/2026-07-16_18h34_15.png';
import fz25Image4 from '../assets/estoque/Usadas/Fz25/2026-07-16_18h34_20.png';
import fz25Image5 from '../assets/estoque/Usadas/Fz25/2026-07-16_18h34_29.png';
import versysImage1 from '../assets/estoque/Usadas/Kawasaki Versys 650/2026-07-16_18h35_32.png';
import versysImage2 from '../assets/estoque/Usadas/Kawasaki Versys 650/2026-07-16_18h35_39.png';
import versysImage3 from '../assets/estoque/Usadas/Kawasaki Versys 650/2026-07-16_18h35_43.png';
import versysImage4 from '../assets/estoque/Usadas/Kawasaki Versys 650/2026-07-16_18h35_51.png';
import versysImage5 from '../assets/estoque/Usadas/Kawasaki Versys 650/2026-07-16_18h36_00.png';
import xreImage1 from '../assets/estoque/Usadas/XRE 300/XRE 300 (1).png';
import xreImage2 from '../assets/estoque/Usadas/XRE 300/XRE 300 (2).png';
import xreImage3 from '../assets/estoque/Usadas/XRE 300/XRE 300 (3).png';
import xreImage4 from '../assets/estoque/Usadas/XRE 300/XRE 300 (4).png';
import xreImage5 from '../assets/estoque/Usadas/XRE 300/XRE 300 (5).png';
import bmwF750Image1 from '../assets/estoque/Usadas/BMW F 750 GS/2026-07-16_18h42_46.png';
import bmwF750Image2 from '../assets/estoque/Usadas/BMW F 750 GS/2026-07-16_18h42_50.png';
import bmwF750Image3 from '../assets/estoque/Usadas/BMW F 750 GS/2026-07-16_18h42_54.png';
import bmwF750Image4 from '../assets/estoque/Usadas/BMW F 750 GS/2026-07-16_18h42_58.png';
import bmwF750Image5 from '../assets/estoque/Usadas/BMW F 750 GS/2026-07-16_18h43_01.png';

const buildGallery = (seed) => [
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-1`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-2`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-3`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-4`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-5`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-6`,
];

const xmaxGallery = [
  xmax2024Image,
  xmax2024Image1,
  xmax2024Image2,
  xmax2024Image3,
  xmax2024Image4,
  xmax2024Image5,
];
const cb500fGallery = [
  cb500fImage1,
  cb500fImage2,
  cb500fImage3,
  cb500fImage4,
  cb500fImage5,
];
const mt03Gallery = [
  mt03Image1,
  mt03Image2,
  mt03Image3,
  mt03Image4,
  mt03Image5,
];
const r15Gallery = [
  r15Image1,
  r15Image2,
  r15Image3,
  r15Image4,
  r15Image5,
];
const cb500xGallery = [
  cb500xImage1,
  cb500xImage2,
  cb500xImage3,
  cb500xImage4,
  cb500xImage5,
];
const iron883Gallery = [
  iron883Image1,
  iron883Image2,
  iron883Image3,
  iron883Image4,
  iron883Image5,
  iron883Image6,
];
const fz25Gallery = [
  fz25Image1,
  fz25Image2,
  fz25Image3,
  fz25Image4,
  fz25Image5,
];
const versysGallery = [
  versysImage1,
  versysImage2,
  versysImage3,
  versysImage4,
  versysImage5,
];
const xreGallery = [
  xreImage1,
  xreImage2,
  xreImage3,
  xreImage4,
  xreImage5,
];
const bmwF750Gallery = [
  bmwF750Image1,
  bmwF750Image2,
  bmwF750Image3,
  bmwF750Image4,
  bmwF750Image5,
];
//motos novas
const newBikes = [
  {
    id: 1,
    name: 'Honda CB 500F',
    year: 2023,
    price: 'R$ 35.900',
    km: '0 km',
    status: 'new',
    image: cb500fImage1,
    gallery: cb500fGallery,
  },
  {
    id: 2,
    name: 'Kawasaki Ninja 400',
    year: 2023,
    price: 'R$ 38.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('ninja-400'),
  },
  {
    id: 3,
    name: 'Yamaha MT-03',
    year: 2024,
    price: 'R$ 34.900',
    km: '0 km',
    status: 'new',
    image: mt03Image1,
    gallery: mt03Gallery,
  },
  {
    id: 4,
    name: 'Yamaha R15',
    year: 2024,
    price: 'R$ 22.900',
    km: '0 km',
    status: 'new',
    image: r15Image1,
    gallery: r15Gallery,
  },
];
//motos usadas
const usedBikes = [
  {
    id: 1,
    name: 'Xmax 250 Abs',
    year: 2024,
    price: 'R$ 0.00',
    km: '0.000 km',
    status: 'used',
    image: xmax2024Image,
    gallery: xmaxGallery,
  },
  {
    id: 2,
    name: 'Harley Davidson Iron 883',
    year: 2020,
    price: 'R$ 55.000',
    km: '12.000 km',
    status: 'used',
    image: iron883Image1,
    gallery: iron883Gallery,
  },
  {
    id: 3,
    name: 'Honda CB 500X',
    year: 2021,
    price: 'R$ 34.500',
    km: '18.000 km',
    status: 'used',
    image: cb500xImage1,
    gallery: cb500xGallery,
  },
  {
    id: 4,
    name: 'Yamaha Fazer 250',
    year: 2019,
    price: 'R$ 17.900',
    km: '24.000 km',
    status: 'used',
    image: fz25Image1,
    gallery: fz25Gallery,
  },
  {
    id: 5,
    name: 'Kawasaki Versys 650',
    year: 2018,
    price: 'R$ 36.900',
    km: '31.000 km',
    status: 'used',
    image: versysImage1,
    gallery: versysGallery,
  },
  {
    id: 6,
    name: 'Honda XRE 300',
    year: 2020,
    price: 'R$ 21.500',
    km: '22.000 km',
    status: 'used',
    image: xreImage1,
    gallery: xreGallery,
  },
  {
    id: 7,
    name: 'BMW F 750 GS',
    year: 2019,
    price: 'R$ 52.900',
    km: '27.000 km',
    status: 'used',
    image: bmwF750Image1,
    gallery: bmwF750Gallery,
  },
];

const Inventory = () => {
  const [filter, setFilter] = useState('new');
  const [selectedBike, setSelectedBike] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const bikesByStatus = {
    new: newBikes,
    used: usedBikes,
  };
  const filteredBikes = bikesByStatus[filter] || [];

  return (
    <section className="inventory-section" id="inventory">
      <h2 className="section-title">Nosso Estoque</h2>

      <div className="inventory-filters" role="tablist" aria-label="Filtrar estoque">
        <button
          type="button"
          className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
          onClick={() => setFilter('new')}
          aria-pressed={filter === 'new'}
        >
          Motos Novas
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'used' ? 'active' : ''}`}
          onClick={() => setFilter('used')}
          aria-pressed={filter === 'used'}
        >
          Motos Usadas
        </button>
      </div>

      <div className="inventory-grid">
        {filteredBikes.map((bike) => (
          <motion.div 
            key={`${bike.status}-${bike.id}`}
            className="moto-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Anima apenas uma vez ao entrar na tela
            transition={{ duration: 0.5, delay: 0.1 * bike.id }}
            onClick={() => setSelectedBike(bike)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setSelectedBike(bike);
              }
            }}
          >
            <div className="moto-image">
              <img src={bike.image} alt={bike.name} className="moto-image-img" />
              <span className={`tag ${bike.status}`}>
                {bike.status === 'new' ? 'Nova' : 'Usada'}
              </span>
            </div>
            <div className="moto-info">
              <h3>{bike.name}</h3>
              <p>{bike.year} | {bike.km}</p>
              <div className="price">{bike.price}</div>
              <motion.button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '15px', fontSize: '1rem' }}
                whileHover={{ scale: 1.02 }}
              >
                Tenho Interesse
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedBike && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBike(null)}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <h3>{selectedBike.name}</h3>
                  <p>{selectedBike.year} | {selectedBike.km}</p>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setSelectedBike(null)}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>
              <div className="modal-grid">
                {selectedBike.gallery.map((photo, index) => (
                  <button
                    key={`${selectedBike.name}-${index}`}
                    className="modal-thumb"
                    type="button"
                    onClick={() => setSelectedPhoto(photo)}
                    aria-label={`Abrir ${selectedBike.name} ${index + 1} em tamanho maior`}
                  >
                    <img src={photo} alt={`${selectedBike.name} ${index + 1}`} className="modal-thumb-img" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="photo-lightbox-panel"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="photo-lightbox-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Fechar imagem ampliada"
              >
                Fechar
              </button>
              <img src={selectedPhoto} alt="Imagem ampliada do estoque" className="photo-lightbox-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Inventory;