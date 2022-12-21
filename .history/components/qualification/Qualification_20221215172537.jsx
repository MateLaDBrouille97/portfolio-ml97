import React, { useState,useEffect } from "react";

// import qualification from '../../assets/qualifications';
import { useQualiContext } from "../../contexts/QualificationContext";

// const qualifications=qualification.qualifData;
// const qualifEdu=qualifications.filter((item,index)=>item.type==="Education");
// const qualifExp=qualifications.filter((item,index)=>item.type==="Experience");

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(()=>{
    setToggleState(1);
  },[])

  const { edu, exp } = useQualiContext();

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 0
                ? "qualification__button qualification-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(0)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 0
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {edu.map((item, index) => {
              return (
             
                <div className="qualification__data" key={item.id}>
                  <div>
                    <h3 className="qualification__title">{item.name}</h3>
                    <span className="qualification__subtitle">
                      {item.Institute}
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>{" "}
                      {item.calendarBegin} - {item.calendarEnd}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {exp.map((item, index) => {
              return (
                
                <div className="qualification__data" key={item.id}>
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">{item.name}</h3>
                    <span className="qualification__subtitle">
                      {item.Institute}
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>{" "}
                      {item.calendarBegin} - {item.calendarEnd}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
