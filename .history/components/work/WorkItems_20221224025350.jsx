import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';


const aws = require('aws-sdk');

const WorkItems = (props) => {
    
    const {item}=props;
    const [work,setWork]=useState(null);
    const [toggleState,setToggleState]=useState(0);
    const [techno,setTechno]=useState([]);

    const [image,setImage]=useState();
    const s3 = new aws.S3();

    const toggleTab=(index)=>{
        setToggleState(index);
    }

    const showWork=(work,index)=>{ 
        setWork(work);
        setToggleState(index);
    }


     /* Fetch Image */
  aws.config.update({
    accessKeyId: 'AKIAQK7EQ4DINBSQQM5L',
    secretAccessKey: "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",
  });

 useEffect(()=>{
  const fetchImage = async()=>{
    const params = {
      Bucket: 'portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging',
      Key: item?.image,
    };
    await s3.getSignedUrlPromise('getObject', params).then((i)=>setImage(i));
      console.log(params)
  }
 fetchImage();
 },[work])


useEffect(()=>{
  setTechno(item?.technologies);
},[work])

  return (
    <div>
        <div className="work__card" key={item?.id}>
        <Image src={image} alt="" className="work__img" width={330}  height={320}/>
        <h3 className="work__title">{item?.title}</h3>
        <span  className="work__button" onClick={()=>showWork(item,1)}>
            View Project <Icon icon="bx:right-arrow-alt"  className=" work__button-icon">
            </Icon>
        </span>
        
    </div>
    <div className={toggleState===1?"work__modal active-modal":"work__modal"}>
          <div className="work__modal-content">
            <Icon icon="uil:times"
            onClick={()=>toggleTab(0)} 
            className="work__modal-close" ></Icon>
            <Image src={image} alt="" className="work__modal-img" width={400} height={400}/>
             <h3 className="work__modal-title">{work?.title} </h3>
             <ul className="work__list grid">
              
                   {techno.map((item2,index)=>{
                    return(
                      <div className="skills__data" key={item2.id}>
                        {item2==="DynamoDB"?<Icon icon="simple-icons:amazondynamodb"  className='skills__card-icon' />:item2==="PostGreSQL"? <Icon icon="akar-icons:postgresql-fill"  className='skills__card-icon'/>:item2==="Node Js"? <Icon icon="simple-icons:nodedotjs"  className='skills__card-icon' />:item2==="C++/Java"?<Icon icon="bxl:java"  className='skills__card-icon'/>:item2==="AWS Amplify"?<Icon icon="ion:logo-amplify"  className='skills__card-icon' />:item2==="Python"?<Icon icon="tabler:brand-python"  className='skills__card-icon'/>:item2==="React Native"?<Icon icon="tabler:brand-react-native" className='skills__card-icon' />:item2==="Javascript"? <Icon icon="simple-icons:javascript"  className='skills__card-icon' />:item2==="HTML"? <Icon icon="akar-icons:html-fill"  className='skills__card-icon' />:item2==="Git"?<Icon icon="teenyicons:git-outline"  className='skills__card-icon' />:<Icon icon="el:css"  className='skills__card-icon'/>}
                        
                    </div>
                    )
                   })}
             </ul>
             <p className="work__modal-description">
                      {work?.description}
             </p>
             {work?.addressPost?<span href={work?.addressPost} className="work__button" target="_blank" rel="noreferrer">
             View Project &nbsp;<Icon icon="bx:right-arrow-alt" className=" work__button-icon2"></Icon>
             </span>:
             <span className="work__button" target="_blank" rel="noreferrer">
              Coming Soon   &nbsp; <Icon icon="ic:round-av-timer" className=" work__button-icon2"></Icon> 
             </span>} 
            </div>
        </div>
    </div>
  )
}

export default WorkItems