import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useBlogContext } from '../../contexts/BlogContext';
import { BlogPost } from '../../src/models';

const Blog = () => {
const {data}= useBlogContext();
console.log(data)
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">Most recent posts</span>
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
        {data&&data.map((item,index)=>{
          return(
              <SwiperSlide className="testimonial__card" key={item.id}>
                  <BlogPost item={item}/>
              </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Blog