import React from 'react';
import { Icon } from '@iconify/react';

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
                        {item.name==="React Native"?<Icon icon="tabler:brand-react-native" />:item.name==="Javascript"? <Icon icon="simple-icons:javascript" />:item.name==="HTML"? <Icon icon="akar-icons:html-fill" />:item.name==="Git"?<Icon icon="teenyicons:git-outline" />:<Icon icon="el:css" />}
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
                       {item.name==="React Native"?<Icon icon="tabler:brand-react-native" />:item.name==="Javascript"? <Icon icon="simple-icons:javascript" />:item.name==="HTML"? <Icon icon="akar-icons:html-fill" />:item.name==="Git"?<Icon icon="teenyicons:git-outline" />:<Icon icon="el:css" />}
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