import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Qualification } from "../models";
import { useUserContext } from "./UserContext";

const QualiContext = createContext({});

const QualiContextProvider = ({ children }) => {

    const{dbUser}=useUserContext();

    
    const [edu,setEdu]=useState([]);
    const [exp,setExp]=useState([]);
    const [qual,setQual]=useState([]);

    useEffect(()=>{
        const fetchQual= ()=>{
          DataStore.query(Qualification,q=>q.type.eq("EDUCATION")).then(quals=>setEdu(quals));
          DataStore.query(Qualification,q=>q.type.eq("EXPERIENCE")).then(quals=>setExp(quals));
          DataStore.query(Qualification,q=>q.userID.eq(dbUser.id)).then(quals=>setQual(quals));

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