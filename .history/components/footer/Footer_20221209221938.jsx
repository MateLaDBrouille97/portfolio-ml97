import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import "./footer";

const Footer = () => {

const {dbUser}=useUserContext();

  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">{dbUser?.lastName}</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#ownership" className="footer__link">Ownerships</a>
                </li>
            </ul>
            <div className="footer__social">

              <a href="https://www.instagram.com/oto.mata33/" className="footer__social-link" target="_blank" rel="noreferrer">
               <i className="bx bxl-instagram"></i>
              </a>

              <a href="https://www.linkedin.com/" className="footer__social-link color-link1" target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin"></i>
              </a>

              <a href="https://github.com/" className="footer__social-link color-link2" target="_blank" rel="noreferrer">
                 <i className="bx bxl-github"></i>
              </a>
     
            </div>
            <span className="footer__copy">&#169; Manuel LABRIDY All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer