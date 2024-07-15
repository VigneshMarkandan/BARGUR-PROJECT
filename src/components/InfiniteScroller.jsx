// InfiniteScroller.js
import React, { useState } from 'react';


const InfiniteScroller = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`scroller-container ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="scroller-text">
        <p style={{'padding':'0','margin':'0'}}>
        NBA Accreditation is granted for EEE and Mech Branches fromAcademic year 2021-22 to 2022-2023 (upto 30.06.2022)  .
        </p>
      </div>
    </div>
  );
};

export default InfiniteScroller;
