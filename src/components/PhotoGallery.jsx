import React from 'react';
import '../assets/photogallery.css';

// Example images (replace with actual image paths)
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png'
import img6 from '../assets/img/img6.png'
import img7 from '../assets/img/img7.png'
import img8 from '../assets/img/img8.png'
import img9 from '../assets/img/img9.png'

const images = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 6' },
  { src: img7, alt: 'Image 7' },
  { src: img8, alt: 'Image 8' },
  { src: img9, alt: 'Image 9' } 
];

const PhotoGallery = () => {
  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default PhotoGallery;

