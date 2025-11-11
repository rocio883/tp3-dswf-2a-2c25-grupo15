// src/components/gallery/Lightbox.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './gallery.module.css';

const Lightbox = ({ images, currentIndex: initialIndex, close, prev, next }) => {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => setIndex(initialIndex), [initialIndex]);

  // bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  // manejar teclado
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') {
        setZoomed(false);
        prev();
      } else if (e.key === 'ArrowRight') {
        setZoomed(false);
        next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close, prev, next]);

  // trap focus simple: poner foco en el dialog al abrir
  useEffect(() => {
    const node = dialogRef.current;
    if (node) node.focus();
  }, []);

  const toggleZoom = () => {
    setZoomed(z => !z);
  };

  const handleOverlayClick = (e) => {
    // cerrar solo si hacen click en el overlay (no en el contenido)
    if (e.target === e.currentTarget) close();
  };

  const img = images[index];

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen ${index + 1} de ${images.length}`}
    >
      <div
        className={styles.content}
        ref={dialogRef}
        tabIndex={-1}
      >
        <button
          className={styles.closeBtn}
          onClick={close}
          aria-label="Cerrar (Esc)"
        >
          ×
        </button>

        <button className={styles.navLeft} onClick={() => { setZoomed(false); prev(); }} aria-label="Anterior">‹</button>
        <button className={styles.navRight} onClick={() => { setZoomed(false); next(); }} aria-label="Siguiente">›</button>

        <div className={styles.imgWrap}>
          <img
            ref={imgRef}
            src={img.url}
            alt={img.alt || `Imagen ${index + 1}`}
            className={`${styles.lightImg} ${zoomed ? styles.zoomed : ''}`}
            onClick={toggleZoom}
            loading="eager"
            draggable="false"
          />
        </div>

        {/* Pie con título / índice */}
        <div className={styles.caption}>
          <span>{img.title || img.alt || `Imagen ${index + 1}`}</span>
          <span>{index + 1} / {images.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
