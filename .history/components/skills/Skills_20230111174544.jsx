import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import DataBase from './DataBase';
import { useSkillsContext } from '../../contexts/SkillContext';

const Skills = () => {

  const {skillsBE,skillsFE}=useSkillsContext();
  
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">
           My Skills
      </h2>
      <span className="section__subtitle">My Technical Level
      </span>
      <div className="skills__container container grid">
        {skillsFE&&<Frontend skillsFE={skillsFE}/>}
        {skillsBE&&<Backend skillsBE={skillsBE}/>}
        {skillsBE&&<DataBase skillsBE={skillsBE}/>}
      </div>
    </section>
  )
}

export default Skills