// InfiniteImageScroller.js
import React, { useState } from 'react';

const InfiniteImageScroller = ({ images }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`image-scroller-container ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="image-scroller">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`scroller-img-${index}`} className="scroller-image" />
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageScroller;
