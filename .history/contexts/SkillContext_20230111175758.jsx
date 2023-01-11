import { createContext, useState, useEffect, useContext } from "react";
import {  DataStore } from "aws-amplify";
import { Skill } from "../src/models";
import { useUserContext } from "./UserContext";
import React from 'react';

const SkillsContext = createContext({});

const SkillsContextProvider = ({ children }) => {

 const {dbUser}=useUserContext();
 const[skillsBE,setSkillsBE]=useState([]);
 const[skillsFE,setSkillsFE]=useState([]);
 const[skillsDB,setSkillsDB]=useState([]);

 useEffect(()=>{
  const fetchSkill = async()=>{
    await DataStore.query(Skill,(skill)=>skill.type.eq("BACKEND")).then(skills=>setSkillsBE(skills));
    await DataStore.query(Skill,(skill)=>skill.type.eq("FRONTEND")).then(skills=>setSkillsFE(skills));
    await DataStore.query(Skill,(skill)=>skill.type.eq("DATABASE")).then(skills=>setSkillsDB(skills));
  }
  fetchSkill();
 },[])


 console.log(skillsDB)
 return (
    <SkillsContext.Provider value={{ skillsBE,skillsFE,skillsDB }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;

export const useSkillsContext = () => useContext(SkillsContext);