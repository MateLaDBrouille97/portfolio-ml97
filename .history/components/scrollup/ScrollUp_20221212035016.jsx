import React,{useEffect} from 'react';
import { Icon } from '@iconify/react';

const ScrollUp = () => {



   
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll",function(){
          const scrollUp = this.document.querySelector(".scrollup");
              //scroll higher than 560 viewport height
              //add show-scroll class to a tag with the scroll-top
          if(this.scrollY>=560)scrollUp.classList.add("show-scroll");
          else scrollUp.classList.remove("show-scroll");
      })
  
      }
    }, []);
  return (
    <a href="#" className="scrollup">
        <Icon icon="uil:arrow-up scrollup__icon" className="uil uil-arrow-up "></Icon>
    </a>
  )
}

export default ScrollUp