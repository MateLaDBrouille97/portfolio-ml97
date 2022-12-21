import React from 'react';
import "../../styles/testimonials.css";
import {Data} from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
          <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper className="testimonial__container"
       loop={true}
       grabCursor={true}
       spaceBetween={10}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         576: {
           slidesPerView: 2,
           
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 48,
         },
         
       }}
       modules={[Pagination]}>
        {Data.map((item,index)=>{
          return(
              <SwiperSlide 
             
        
              className="testimonial__card" key={item.id}>
                   <img src={item.image} alt="" className="testimonial__img" />
                   <h3 className="testimonial__name"> {item.title}</h3>
                   <p className="testimonial__description">{item.description}</p>
              </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials