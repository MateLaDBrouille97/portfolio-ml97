import React,{useEffect, useState} from 'react';
import "./work";
import { workData,projectNav } from '../../public/WorkData';
import WorkItems from './WorkItems';

const Works = () => {
  
 const [item,setItem]=useState({name:"All"});
 const [projects,setProjects]=useState([]);
 const [active,setActive]=useState(0);

 useEffect(()=>{
  if(item.name==="all")
  {
    setProjects(workData);
  }else{
    const newProjects= workData.filter((project)=>{
      return project.category.toLowerCase()===item.name;
    })
    setProjects(newProjects);
  }
 },[item]);

 const handleClick =(e,index)=>{
  setItem({name:e.target.textContent.toLowerCase()});
  setActive(index);
 }

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
      <div className="work__filters">
      {projectNav.map((item,index)=>{
        return(
          <span onClick={(e)=>{handleClick(e,index)}} className={`${active===index?'active-work':''} work__item`} key={index}>{item.name}
          </span>
        )
        })}
    </div>
    <div className="work__container container grid">
      {projects.map((item,index)=>{
          return(
           <WorkItems item={item} key={item.id}/>
          )
      })}
    </div>
    </div>
  )
}

export default Works