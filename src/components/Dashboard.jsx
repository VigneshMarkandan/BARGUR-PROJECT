import React from 'react';
import '../assets/dashboard.css';
import alum from '../assets/img/alumni.png';
import media from '../assets/img/media.png';
import placement from '../assets/img/placement.png';
import std from '../assets/img/stdcorn.png';
import gallery from '../assets/img/gallery.png';
import life from '../assets/img/life.png';
import PhotoGallery from './PhotoGallery';


const sections = [
  { name: 'Alumni', icon: alum },
  { name: 'Media', icon: media },
  { name: 'Placement', icon: placement },
  { name: 'Student Corner', icon: std },
  { name: 'Gallery', icon: gallery },
  { name: `Life @ IIM 
        Tiruchirapalli`, icon: life }
];

const Dashboard = () => {
  return (
    <div className='totaldashboard'>
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Highlights</h2>
      <div className="dashboard">
        <div className="dashboard-grid">
          {sections.map((section, index) => (
            <div key={index} className="dashboard-item">
              <img src={section.icon} alt={section.name} />
              <p>{section.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <PhotoGallery/>
    </div>
  );
};

export default Dashboard;
