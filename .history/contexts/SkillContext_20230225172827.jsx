import { createContext, useState, useEffect, useContext } from "react";
import {  DataStore } from "aws-amplify";
import { Skill } from "../src/models";
import { useUserContext } from "./UserContext";
import React from 'react';

const SkillsContext = createContext({});
const userId="6a4ad658-8482-4df0-a5a1-4e8d757782f2"
const SkillsContextProvider = ({ children }) => {

 const {dbUser}=useUserContext();
 const[skillsBE,setSkillsBE]=useState([]);
 const[skillsFE,setSkillsFE]=useState([]);
 const[skillsDB,setSkillsDB]=useState([]);
 const [data,setData]=useState([]);

 useEffect(()=>{
  const fetchSkill = async()=>{
    await DataStore.query(Skill,u=>u.userID.eq(userId)).then(ports=>setData(ports));
    const skills1 =data.filter(d=>d?.type=="BACKEND");setSkillsBE(skills1);
    const skills2 =data.filter(d=>d?.type=="FRONTEND");setSkillsFE(skills2);
    const skills3 =data.filter(d=>d?.type=="DATABASE");setSkillsDB(skills3);
    // await DataStore.query(Skill,(skill)=>skill.type.eq("BACKEND")).then(skills=>setSkillsBE(skills));
    // await DataStore.query(Skill,(skill)=>skill.type.eq("FRONTEND")).then(skills=>setSkillsFE(skills));
    // await DataStore.query(Skill,(skill)=>skill.type.eq("DATABASE")).then(skills=>setSkillsDB(skills));
  }
  fetchSkill();
 },[])

console.log(data);
 
 return (
    <SkillsContext.Provider value={{ skillsBE,skillsFE,skillsDB }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;

export const useSkillsContext = () => useContext(SkillsContext);