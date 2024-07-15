import React, { useState } from 'react';
import '../assets/program.css';
import mba from '../assets/img/mba.png';
import mbahr from '../assets/img/mbahr.png';
import pgpbm from '../assets/img/pgpbm.png';
import phd from '../assets/img/phd.png';
import exphd from '../assets/img/exphd.png';

const programs = [
  {
    category: 'BE',
    programs: [
      { name: 'CSE', image: mba, description: 'The Four-years full-time under Graduate Programme in Engineering is the flagship programme of Government College of Engineering  .' },
      { name: 'ECS', image: mbahr, description: 'The Four-years full-time under Graduate Programme in Engineering is the flagship programme of Government College of Engineering ' },
    ],
  },
  {
    category: 'BE',
    programs: [
      { name: "EEE", image: pgpbm, description: 'The Four-years full-time under Graduate Programme in Engineering is the flagship programme of Government College of Engineering .' },
    ],
  },
  {
    category: 'BE',
    programs: [
      { name: 'MECH', image: phd, description: 'The Four-years full-time under Graduate Programme in Engineering is the flagship programme of Government College of Engineering .' },
    ],
  },
  {
    category: 'BE',
    programs: [
      { name: 'CIVIL', image: exphd, description: 'The Four-years full-time under Graduate Programme in Engineering is the flagship programme of Government College of Engineering ' },
    ],
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState({
    category: 'PGPM',
    program: "MBA",
    image: mba,
    description: 'The Four-years full-time under Graduate Programme in Engineering is the flagship programme of Government College of Engineering ',
  });

  const handleProgramClick = (category, program, image, description) => {
    setSelectedProgram({ category, program, image, description });
  };

  return (
    <div className="programmes-container">
      <h1 className="main-heading"> Government College Of Engineering-Bargur Highlights</h1>
      <div className="programmes-sidebar">
        {programs.map((section) => (
          <div key={section.category}>
            <div className="programmes-category">{section.category}</div>
            <ul>
              {section.programs.map((prog) => (
                <li
                  key={prog.name}
                  className={selectedProgram.program === prog.name ? 'active' : ''}
                  onClick={() =>
                    handleProgramClick(section.category, prog.name, prog.image, prog.description)
                  }
                >
                  {prog.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="programmes-content">
        <img src={selectedProgram.image} alt={selectedProgram.program} className="programmes-image" />
        <div className="programmes-text">
          <h2>B.E. (MECHANICAL ENGINEERING)  </h2>
          <p>{selectedProgram.description}</p>
          <div className="programmes-buttons">
            <button className="read-more-button">READ MORE</button>
            <button className="admission-button">ADMISSION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
