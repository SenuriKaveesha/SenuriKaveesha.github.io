// Intro.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Intro.css';
import bg from '../../assets/bg.png';
import btnImg from '../../assets/contact.png';
import cvPdf from '../../assets/Senuri_Kaveesha_CV.pdf'; // Replace with the actual path to your PDF file

const Intro = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Senuri_Kaveesha_CV.pdf'; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='intro'>
    
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>
          I'm <span className='introName'>Senuri Kaveesha</span> <br /> Undergraduate at Sliit
        </span>
        <p className='introPara'>
          I'm eager to start a path of academic and professional development since I'm enthusiastic
          <br></br> about data science and want to use my degree to have a good impact on the
          information technology industry.
        </p>
        <div className='introLinks'>
          <button className='btn' onClick={handleDownloadCV}>
            <img src={btnImg} alt='Download CV' className='btnImg' />
            Download CV
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='LinksSM'>
          <a
            href='https://www.linkedin.com/in/senuri-kaveesha-1a1832215/'
            target='_blank'
            rel='noopener noreferrer'
            className='linkedinLink'
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>

          <a
            href='https://github.com/SenuriKaveesha'
            target='_blank'
            rel='noopener noreferrer'
            className='linkedinLink'
          >
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
        </div>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
};

export default Intro;
