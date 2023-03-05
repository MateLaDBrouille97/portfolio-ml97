import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useBlogContext } from '../../contexts/BlogContext';
import { BlogPost } from '../../src/models';
import Posts from './Posts';

const Blog = () => {
const {data}= useBlogContext();
const [blogPost,setBlogPost]=useState([]);

useEffect(()=>{
    setBlogPost(data)
},[data])



  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">Most recent posts</span>
        <Posts/>
    </section>
  )
}

export default Blog