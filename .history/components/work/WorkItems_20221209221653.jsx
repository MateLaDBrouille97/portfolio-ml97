import React,{useState} from 'react';
import "work";
import Image from 'next/image';

const WorkItems = (props) => {
    const {item}=props;
    const [work,setWork]=useState(null);
    const [toggleState,setToggleState]=useState(0);
    const toggleTab=(index)=>{
        setToggleState(index);
    }

    const showWork=(work,index)=>{ 
        setWork(work);
        setToggleState(index);
    }
  return (
    <div>
        <div className="work__card" key={item?.id}>
        <Image src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item?.title}</h3>
        <span  className="work__button" onClick={()=>showWork(item,1)}>
            View Project <i className="bx bx-right-arrow-alt work__button-icon">
            </i>
        </span>
        
    </div>
    <div className={toggleState===1?"work__modal active-modal":"work__modal"}>
            <div className="work__modal-content">
            <i 
            onClick={()=>toggleTab(0)} 
            className="uil uil-times work__modal-close" ></i>
            <Image src={work?.image} alt="" className="work__modal-img" />
             <h3 className="work__modal-title">{work?.title} </h3>
             <p className="work__modal-description">
                      {work?.description}
                    </p>
            </div>
        </div>
    </div>
  )
}

export default WorkItems