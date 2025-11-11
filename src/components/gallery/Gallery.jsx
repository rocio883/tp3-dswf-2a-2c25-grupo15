// src/components/gallery/Gallery.jsx
import React, { useState, useRef } from 'react';
import Lightbox from './Lightbox';
import styles from './gallery.module.css';

const Gallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const lastActiveRef = useRef(null);

  const openLightbox = (index, e) => {
    lastActiveRef.current = e?.currentTarget || null;
    setCurrentIndex(index);
  };
  const closeLightbox = () => {
    setCurrentIndex(null);
    // devolver foco a la miniatura cuando se cierre (si existe)
    if (lastActiveRef.current) lastActiveRef.current.focus();
  };
  const prev = () => {
    setCurrentIndex(i => (i > 0 ? i - 1 : images.length - 1));
  };
  const next = () => {
    setCurrentIndex(i => (i < images.length - 1 ? i + 1 : 0));
  };

  return (
    <>
      <div className={styles.grid} role="list">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={styles.thumbBtn}
            onClick={(e) => openLightbox(idx, e)}
            aria-label={`Abrir imagen ${idx + 1}`}
          >
            <img
              src={img.thumbnailUrl || img.url}
              alt={img.alt || `Imagen ${idx + 1}`}
              loading="lazy"
              className={styles.thumb}
            />
          </button>
        ))}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          close={closeLightbox}
          prev={prev}
          next={next}
        />
      )}
    </>
  );
};

export default Gallery;
