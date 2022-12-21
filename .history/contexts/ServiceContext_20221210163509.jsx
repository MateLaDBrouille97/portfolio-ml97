import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Service } from "../src/models";
import { useUserContext } from "./UserContext";

const ServiceContext = createContext({});

const ServiceContextProvider = ({ children }) => {

    const {dbUser}=useUserContext();
    const [services,setServices]= useState([]);

    useEffect(()=>{
        const fetchService = async ()=>{
          await DataStore.query(Service,(s)=>s.userID.eq(dbUser.id)).then(services=>setServices(services))    
        }
        fetchService();
    },[dbUser]);


    return (
        <ServiceContext.Provider value={{services,setServices }}>
          {children}
        </ServiceContext.Provider>
      );
}

export default ServiceContextProvider;

export const useServiceContext = () => useContext(ServiceContext);
