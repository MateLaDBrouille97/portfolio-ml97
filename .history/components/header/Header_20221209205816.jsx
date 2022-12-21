import React,{useState} from 'react';
import "../../styles/header.css";
import Pic from "../../assets/Mur.jpg";
import { useUserContext } from '../../contexts/UserContext';
import Image from 'next/image'

const Header = () => {
/*==================== Show Scroll ====================== */
    window.addEventListener("scroll",function(){
        const header = this.document.querySelector(".header");
            //scroll higher than 200 viewport height
            //add scroll header class to a tag with the scroll-top
        if(this.scrollY>=80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
   /*==================== Toggle Menu ====================== */
    const [toggle,showMenu]=useState(false);
    const [activeNav,setActiveNav]= useState("#home");


    /* +++++++++++++++++++++++++++++++++++++++++++++++++ */

    const {dbUser,image}= useUserContext();


  return (
    
    <header className="header">
        <nav className="nav container">
            <div className="nav__logo-container">
                <div>
                   {image&& <Image src={image} alt="" className="nav__lg-img" />}
                </div>
                <a href="#home"
                onClick={()=>setActiveNav('#home')} 
                className={activeNav==="#home"? "nav__logo active-link":"nav__logo"}
                 >
                {dbUser?.lastName}
            </a>
            </div>
            
            
            <div className={toggle?"nav__menu show-menu":"nav__menu"}>
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" 
                        onClick={()=>setActiveNav('#home')} 
                        className={activeNav==="#home"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={()=>setActiveNav('#about')} 
                        className={activeNav==="#about"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-user nav__icon"></i> About 
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={()=>setActiveNav('#skills')} 
                        className={activeNav==="#skills"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} 
                        className={activeNav==="#portfolio"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={()=>setActiveNav('#services')} 
                        className={activeNav==="#services"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualification" onClick={()=>setActiveNav('#qualification')} 
                        className={activeNav==="#qualification"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-briefcase-alt nav__icon"></i> Qualifications
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={()=>setActiveNav('#contact')} 
                        className={activeNav==="#contact"? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-scenery nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                 <i className="uil uil-times nav__close" onClick={()=>showMenu(!toggle)}></i>
            </div>
            <div className="nav_toggle" onClick={()=>showMenu(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header