import React from 'react';
import Data from './Data';
import Social from './Social';
import ScrollDow from './ScrollDow';
import { useUserContext } from '../../contexts/UserContext';
import Image from 'next/image';


const Home = () => {

  const {dbUser,image}=useUserContext();
  
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
               <Social/>
              
                {image&&<Image src={image} alt="" className="home__img"/>}
               
              { dbUser &&<Data user={dbUser}/>}
            </div>
            <ScrollDow/>
        </div>

    </section>

  )
}

export default Home