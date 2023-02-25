import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Qualification } from "../src/models";
import { useUserContext } from "./UserContext";
import React from 'react';

const QualiContext = createContext({});

const QualiContextProvider = ({ children }) => {

    const{dbUser}=useUserContext();
    const [edu,setEdu]=useState([]);
    const [exp,setExp]=useState([]);
    const [qual,setQual]=useState([]);

    useEffect(()=>{
        const fetchQual= async ()=>{
          await DataStore.query(Qualification,q=>q.userID.eq(dbUser?.id)).then(quals=>setQual(quals));
          const quals1=qual.filter(q=>q.type=="EDUCATION");setEdu(quals1);
          const quals2=qual.filter(q=>q.type=="EXPERIENCE");setExp(quals2);
          // await DataStore.query(Qualification,q=>q.type.eq("EDUCATION")).then(quals=>setEdu(quals));
          // await DataStore.query(Qualification,q=>q.type.eq("EXPERIENCE")).then(quals=>setExp(quals)); 
        }
        fetchQual();
    },[dbUser])

    

 return (
    <QualiContext.Provider value={{ edu,exp,setEdu,setExp,qual,setQual }}>
      {children}
    </QualiContext.Provider>
  );
};

export default QualiContextProvider;

export const useQualiContext = () => useContext(QualiContext);