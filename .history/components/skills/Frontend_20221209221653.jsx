import React from 'react';
import "skills";
// import DataFrontend from "../../assets/constants"

// const frontEnd = DataFrontend.DataFrontend;


const Frontend = (props) => {

    const {skillsFE}=props;
    const secondColumnStart = Math.floor(skillsFE.length / 2);

  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
         <div className="skills__group">
                {skillsFE.slice(0,secondColumnStart).map((item,index)=>{
                    return(        
                     <div className="skills__data" key={index}>
                        <i className="bx bx-badge-check"></i>
                        <div key={item.id}>
                            <h3 className="skills__name" >{item.name}</h3>
                            <span className="skills__level">{item.level}</span>
                        </div>
                    </div>
                    )
                })}
          </div>   
          <div className="skills__group">
                {skillsFE.slice(secondColumnStart).map((item,index)=>{
                    return(        
                     <div className="skills__data" key={index}>
                        <i className="bx bx-badge-check"></i>
                        <div key={item.id}>
                            <h3 className="skills__name" >{item.name}</h3>
                            <span className="skills__level">{item.level}</span>
                        </div>
                    </div>
                    )
                })}
          </div>          
         </div>
    </div>
  )
}

export default Frontend