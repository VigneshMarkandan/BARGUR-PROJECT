import React from 'react';
import InfiniteScroller from './InfiniteScroller';

const Marquee = () => {
  return (
    <div className='marquee-main'>
      <div className="marquee-container">
        <div className="marquee-left">
          <p>Milestones</p>
        </div>
        <InfiniteScroller />
      </div>
    </div>
  );
}

export default Marquee;
