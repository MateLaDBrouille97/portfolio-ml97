import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { PortfolioPost } from "../src/models";
import { useUserContext } from "./UserContext";
import React from 'react';

const PortfolioContext = createContext({});

const PortfolioContextProvider = ({ children }) => {

    const{dbUser}=useUserContext();
    const userId="6a4ad658-8482-4df0-a5a1-4e8d757782f2"
    const[portfolioApp,setPortfolioApp]=useState([]);
    const[portfolioWeb,setPortfolioWeb]=useState([]);
    const[portfolioSci,setPortfolioSci]=useState([]);
    const [data,setData]= useState([]);

    useEffect(()=>{
        const fetchPort= () => {
          DataStore.query(PortfolioPost,p=>p.userID.eq(userId)).then(ports=>setData(ports));
          const folio1 =data.filter(d=>d?.type=="APP");setPortfolioApp(folio1);
          const folio2 =data.filter(d=>d?.type=="WEB");setPortfolioWeb(folio2);
          const folio3 =data.filter(d=>d?.type=="SCIENCE");setPortfolioSci(folio3);
          // DataStore.query(PortfolioPost,p=>p.type.eq("APP")).then(port=>setPortfolioApp(port));
          // DataStore.query(PortfolioPost,p=>p.type.eq("WEB")).then(port=>setPortfolioWeb(port));
          // DataStore.query(PortfolioPost,p=>p.type.eq("SCIENCE")).then(port=>setPortfolioSci(port));
          
        }
        fetchPort();
    },[dbUser])

    console.log(data)

 return (
    <PortfolioContext.Provider 
       value={{
        portfolioApp,
        portfolioWeb,
        setPortfolioApp,
        setPortfolioWeb,
        portfolioSci,
        setPortfolioSci,
        data,
        setData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;

export const usePortfolioContext = () => useContext(PortfolioContext);