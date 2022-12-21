// import '../styles/globals.css';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Services from '../components/services/Services';
import Qualification from '../components/qualification/Qualification';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';
import Work from '../components/work/Work';
import UserContextProvider from '../contexts/UserContext';
import SkillsContextProvider from '../contexts/SkillContext';
import QualiContextProvider from '../contexts/QualificationContext';
import { Amplify } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
import ServiceContextProvider from '../contexts/ServiceContext';

Amplify.configure(awsconfig);


function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
     <SkillsContextProvider>
       <QualiContextProvider>
         <ServiceContextProvider>
        <>
        {/* <Header/> */}
        <main className='main'>
          {/* <Home/> */}
          <About/>
          {/* <Skills/> */}
          {/* <Work/> */}
          {/* <Services/> */}
          {/* <Qualification/> */}
          {/* <Testimonials/> */}
          {/* <Contact/>  */}
        </main>
        {/* <Footer/> */}
        {/* <ScrollUp/>  */}
       </>
       </ServiceContextProvider>
    </QualiContextProvider>
   </SkillsContextProvider>
  </UserContextProvider>
  
 );
}

export default MyApp
