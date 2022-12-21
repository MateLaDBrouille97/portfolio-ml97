import React from 'react';
import Data from './Data';
import Social from './Social';
import ScrollDow from './ScrollDow';
import { useUserContext } from '../../contexts/UserContext';
import Image from 'next/image';
const aws = require('aws-sdk');

const Home = () => {

  const {dbUser}=useUserContext();
   
  const [image,setImage]=useState();
  const [cv,setCV]= useState(null);
  const s3 = new aws.S3();


/* Fetch Image */
  aws.config.update({
    accessKeyId: 'AKIAQK7EQ4DINBSQQM5L',
    secretAccessKey: "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"
  });

 useEffect(()=>{
  const fetchImage=async()=>{
    const params = {
      Bucket: 'portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging',
      Key: dbUser?.image,
    };
    await s3.getSignedUrlPromise('getObject', params).then((i)=>setImage(i));
  }
 fetchImage();
 },[dbUser])

 
 useEffect(()=>{
  const fetchCV = async()=>{
    const params = {
      Bucket: 'portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging',
      Key: dbUser?.CV,
    };
    await s3.getSignedUrlPromise('getObject', params).then((cv)=>setCV(cv));     
  }
 fetchCV();
 },[dbUser])

  
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
               <Social/>
              
                {image&&<Image src={image} alt="" className="home__img" width={375} height={350}/>}
               
              { dbUser &&<Data user={dbUser}/>}
            </div>
            <ScrollDow/>
        </div>

    </section>

  )
}

export default Home