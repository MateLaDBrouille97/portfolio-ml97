import { createContext, useState, useEffect, useContext } from "react";
import {  DataStore } from "aws-amplify";
import { Skill } from "../models";
import { useUserContext } from "./UserContext";

const SkillsContext = createContext({});

const SkillsContextProvider = ({ children }) => {

 const {user}=useUserContext();
 const[skillsBE,setSkillsBE]=useState([]);
 const[skillsFE,setSkillsFE]=useState([]);

 useEffect(()=>{
  const fetchSkill =()=>{
    DataStore.query(Skill,(skill)=>skill.type.eq("BACKEND")).then(skills=>setSkillsBE(skills));
    DataStore.query(Skill,(skill)=>skill.type.eq("FRONTEND")).then(skills=>setSkillsFE(skills));
  }
  fetchSkill();
 },[])

 return (
    <SkillsContext.Provider value={{ skillsBE,skillsFE }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;

export const useSkillsContext = () => useContext(SkillsContext);