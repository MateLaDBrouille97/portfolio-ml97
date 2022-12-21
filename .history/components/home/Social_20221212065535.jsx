import React from 'react';
import { Icon } from '@iconify/react';

const Social = () => {
  
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/oto.mata33/" className="home__social-icon" target="_blank" rel="noreferrer">
         <Icon icon="uil:instagram" ></Icon>
        </a>
        <a href="https://ca.linkedin.com/" className="home__social-icon" target="_blank" rel="noreferrer">
         <Icon icon="uil:linkedin-alt"></Icon>
            
        </a>
        <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
        </a>
     
       
        
    </div>
  )
}

export default Social