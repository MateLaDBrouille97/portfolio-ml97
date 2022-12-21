import React from 'react';
import "./scrollup";

const ScrollUp = () => {

    window.addEventListener("scroll",function(){
        const scrollUp = this.document.querySelector(".scrollup");
            //scroll higher than 560 viewport height
            //add show-scroll class to a tag with the scroll-top
        if(this.scrollY>=560)scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup">
        <i className="il uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp