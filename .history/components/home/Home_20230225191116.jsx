import React from 'react';
import Data from './Data';
import Social from './Social';
import ScrollDow from './ScrollDow';
import { useUserContext } from '../../contexts/UserContext';
import Image from 'next/image';


const Home = () => {

  const {dbUser,image,avatar}=useUserContext();
  
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
               <Social/>
                {image&&<Image src={avatar} alt="" className="home__img" width={375} height={350}/>}              
              { dbUser &&<Data user={dbUser}/>}
            </div>
            <ScrollDow/>
        </div>
    </section>

  )
}

export default Home