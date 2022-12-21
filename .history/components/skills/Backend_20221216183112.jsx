import React from 'react';
import { Icon } from '@iconify/react';


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
                        {item.name==="DynamoDB"?<Icon icon="simple-icons:amazondynamodb" />:item.name==="PostGreSQL"? <Icon icon="akar-icons:postgresql-fill" />:item.name==="Node Js"? <Icon icon="simple-icons:nodedotjs" />:item.name==="C++/Java"?<Icon icon="bxl:java" />:item.name==="AWS Amplify"?<Icon icon="ion:logo-amplify"  />:<Icon icon="tabler:brand-python" />}
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
                       {item.name==="DynamoDB"?<Icon icon="simple-icons:amazondynamodb" />:item.name==="PostGreSQL"? <Icon icon="akar-icons:postgresql-fill" />:item.name==="Node Js"? <Icon icon="simple-icons:nodedotjs" />:item.name==="C++/Java"?<Icon icon="bxl:java" />:item.name==="AWS Amplify"?<Icon icon="ion:logo-amplify"  />:<Icon icon="tabler:brand-python" />}
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