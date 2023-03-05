import React,{useEffect, useState} from 'react';
import { useBlogContext } from '../../contexts/BlogContext';
import { usePortfolioContext } from '../../contexts/PortfolioContext';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { workData,projectNav } from '../../public/WorkData';
import BlogItem from './BlogItem';
// import WorkItems from './WorkItems';

const Posts = () => {
  
 const [item,setItem]=useState({name:"All"});
 const [blogPosts,setBlogPosts]=useState([]);
 
 const [active,setActive]=useState(0);
 const {data}=useBlogContext();

//  useEffect(()=>{
//   if(item.name==="all")
//   {
//     setProjects(data);
//   }else{
//     const newProjects= data.filter((project)=>{
//       return project.type.toLowerCase()===item.name;
//     })
//     setProjects(newProjects);
//   }
//   if(item.name==="data analysis"){
//     const newProjects= data.filter((project)=>{
//       return project.type.toLowerCase()==="science";
//     })
//     setProjects(newProjects);
//   }
//  },[item]);



//  const handleClick =(e,index)=>{
//   setItem({name:e.target.textContent.toLowerCase()});
//   setActive(index);
//  }

useEffect(()=>{
 setBlogPosts(data)
},[data])


 /**
  Dans le cas d'un bouton si on veut avoir un defilement dynamique c a dire savoir sur quel onglet on est 
  1-setItem({name:e.target.textContent}); => nom correspond mot present parametre par ciblage du text 
  2- on associe la modification de couleur de l'onglet avec index de projectNav 
      si 0 c'est all
      si 1 c'est web 
      etc...
  */

  return (
    <div>
      {/* <div className="work__filters">
      {projectNav.map((item,index)=>{
        return(
          <span onClick={(e)=>{handleClick(e,index)}} className={`${active===index?'active-work':''} work__item`} key={index}>{item.name}
          </span>
        )
        })}
    </div> */}

<Swiper 
       className="testimonial__container3 "
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
       
    
      {blogPosts.map((item,index)=>{
          return(
            <SwiperSlide 
            className="testimonial__container3" key={item.id}>
                 <BlogItem item={item} key={item.id}/>
            </SwiperSlide>
          
          )
      })
      }
    
      </Swiper>





    </div>
  )
}

export default Posts