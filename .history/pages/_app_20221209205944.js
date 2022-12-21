import '../styles/App.css';
import Header from "../components/header/Header"
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
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import ServiceContextProvider from './contexts/ServiceContext';

Amplify.configure(awsconfig);


function App() {
 
  return (
     <UserContextProvider>
      <SkillsContextProvider>
        <QualiContextProvider>
          <ServiceContextProvider>
         <>
         <Header/>
         <main className='main'>
           <Home/>
           <About/>
           <Skills/>
           <Work/>
           <Services/>
           <Qualification/>
           <Testimonials/>
           <Contact/> 
         </main>
         <Footer/>
         <ScrollUp/> 
        </>
        </ServiceContextProvider>
     </QualiContextProvider>
    </SkillsContextProvider>
   </UserContextProvider>
   
  );
}


// const signUpConfig = {
//   header: 'My Customized Sign Up',
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: 'Full name',
//       key: 'name',
//       required: true,
//       displayOrder: 1,
//       type: 'string',
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       displayOrder: 2,
//       type: 'string',
//     },
//     {
//       label: 'Username',
//       key: 'preferred_username',
//       required: true,
//       displayOrder: 3,
//       type: 'string',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 4,
//       type: 'password',
//     },

//   ]
// }


export default App;
