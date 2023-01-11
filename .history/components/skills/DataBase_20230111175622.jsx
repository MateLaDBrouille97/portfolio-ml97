import React from 'react';
import { Icon } from '@iconify/react';


// import DataFrontend from "../../assets/constants"
// const BackEnd = DataFrontend.DataBackend;


const DataBase = (props) => {

    const {skillsDB}=props;
    const secondColumnStart = Math.floor(skillsDB.length/ 2);

  return (
    <div className="skills__content">
        <h3 className="skills__title">Database </h3>
        <div className="skills__box" >
            <div className="skills__group">


            {skillsDB.slice(0,secondColumnStart).map((item,index)=>{
                    return(
                     <div className="skills__data" key={item.id}>
                        {
                        item.name==="DynamoDB"?<Icon icon="simple-icons:amazondynamodb"  className='skills__card-icon' />
                        :item.name==="PostGreSQL"? <Icon icon="akar-icons:postgresql-fill"  className='skills__card-icon'/>
                        :item.name==="Node Js"? <Icon icon="simple-icons:nodedotjs"  className='skills__card-icon' />
                        :item.name==="C++/Java"?<Icon icon="bxl:java"  className='skills__card-icon'/>
                        :item.name==="AWS Amplify"?<Icon icon="ion:logo-amplify"  className='skills__card-icon' />
                        :item.name==="Vercel"?<Icon icon="ion:logo-vercel" className='skills__card-icon'/>
                        :item.name==="Next.js"?<Icon  icon="tabler:brand-nextjs"  className='skills__card-icon'/>
                        :<Icon icon="tabler:brand-python"  className='skills__card-icon'/>}
                        <div >
                            <h3 className="skills__name" >{item.name}</h3>
                            <span className="skills__level">{item.level}</span>
                        </div>
                    </div>
                    )
                })}
                
            </div>
            <div className="skills__group">
            {skillsDB.slice(secondColumnStart).map((item,index)=>{
                    return(
                     <div className="skills__data" key={item.id}>
                        {
                        item.name==="DynamoDB"?<Icon icon="simple-icons:amazondynamodb"  className='skills__card-icon' />
                        :item.name==="PostGreSQL"? <Icon icon="akar-icons:postgresql-fill"  className='skills__card-icon'/>
                        :item.name==="Node Js"? <Icon icon="simple-icons:nodedotjs"  className='skills__card-icon' />
                        :item.name==="C++/Java"?<Icon icon="bxl:java"  className='skills__card-icon'/>
                        :item.name==="AWS Amplify"?<Icon icon="ion:logo-amplify"  className='skills__card-icon' />
                        :item.name==="Vercel"?<Icon icon="ion:logo-vercel" className='skills__card-icon'/>
                        :item.name==="Next.js"?<Icon  icon="tabler:brand-nextjs"  className='skills__card-icon'/>
                        :<Icon icon="tabler:brand-python"  className='skills__card-icon'/>}
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

export default DataBase