import React from 'react';
import { Icon } from '@iconify/react';

const Social = () => {
  
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/oto.mata33/" className="home__social-icon icon-instagram" target="_blank" rel="noreferrer">
         <Icon icon="uil:instagram" ></Icon>
        </a>
        <a href="https://ca.linkedin.com/" className="home__social-icon icon-linkedIn" target="_blank" rel="noreferrer">
         <Icon icon="uil:linkedin"></Icon>       
        </a>
        <a href="https://github.com/LuckyMate97" className="home__social-icon icon-github" target="_blank" rel="noreferrer">
        <Icon icon="uil:github-alt"></Icon>
        </a>    
    </div>
  )
}

export default Social