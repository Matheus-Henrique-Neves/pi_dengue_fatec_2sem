
import React, { useState } from 'react';
import styles from './Carousel.module.css'; // Importe o módulo CSS

const Carousel: React.FC = () => {
  const images = [
   'https://live.staticflickr.com/65535/52994537135_5dcd166e9c_b.jpg',
    'https://live.staticflickr.com/65535/53513156350_16bd2513ed_b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnAdaWvzlXR5Qwo-674E0WvgKkuREq7sRZg&s',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles['carousel-container']}>
      <div className={styles.carousel}>
        <button className={`${styles['carousel-button']} ${styles.prev}`} onClick={prevImage}>
          &#10094;
        </button>
        <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} className={styles['carousel-image']} />
        <button className={`${styles['carousel-button']} ${styles.next}`} onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

