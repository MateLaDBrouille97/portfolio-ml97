import React from 'react';
import "./skills";

// import DataFrontend from "../../assets/constants"
// const BackEnd = DataFrontend.DataBackend;


const Backend = (props) => {

    const {skillsBE}=props;
    const secondColumnStart = Math.floor(skillsBE.length / 2);

  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">


            {skillsBE.slice(0,secondColumnStart).map((item,index)=>{
                    return(
                     <div className="skills__data" key={item.id}>
                        <i className="bx bx-badge-check"></i>
                        <div >
                            <h3 className="skills__name" >{item.name}</h3>
                            <span className="skills__level">{item.level}</span>
                        </div>
                    </div>
                    )
                })}
                
            </div>
            <div className="skills__group">
            {skillsBE.slice(secondColumnStart).map((item,index)=>{
                    return(
                     <div className="skills__data" key={item.id}>
                        <i className="bx bx-badge-check"></i>
                        <div >
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

export default Backend