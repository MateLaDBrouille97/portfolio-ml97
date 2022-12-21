import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
const aws = require('aws-sdk');

const WorkItems = (props) => {
    
    const {item}=props;
    const [work,setWork]=useState(null);
    const [toggleState,setToggleState]=useState(0);

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
    secretAccessKey: "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"
  });

 useEffect(()=>{
  const fetchImage = async()=>{
    const params = {
      Bucket: 'portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging',
      Key: item?.image ,
    };
    await s3.getSignedUrlPromise('getObject', params).then((i)=>setImage(i));
      
  }
 fetchImage();
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
             <p className="work__modal-description">
                      {work?.description}
                    </p>
            </div>
        </div>
    </div>
  )
}

export default WorkItems