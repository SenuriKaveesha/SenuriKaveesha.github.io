import React from 'react';
import './contacts.css';

const Contacts = () => {
  

  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>Contact me</h1>
      <span className='contactDesc'>Please contact me with the email below to discuss any work opportunities.</span>
      <form className='contactForm'>
        
        <a href={`mailto:senurikaveesha39@gmail.com`} className='emailLink'>
          Contact me via email.
        </a>
      </form>
    </div>
  );
};

export default Contacts;
