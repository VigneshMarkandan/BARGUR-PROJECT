import React from 'react'
import { video1 } from '../assets/video/Videos'
const VideoComponent = () => {
  return (
    <div className='video-component'>
      <video muted autoPlay loop poster="/sites/default/files/poster.webp" playsInline preload="none" className="relative w-full h-full" >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  )
}


export default VideoComponent