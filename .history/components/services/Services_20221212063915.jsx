/* eslint-disable react/jsx-key */
import React,{useState} from "react";
// import Data from "../../assets/services";
import { useServiceContext } from "../../contexts/ServiceContext";
import { Icon } from '@iconify/react';
// const data = Data.servicesData;
// const name =Data.servicesName;

const Services = () => {
    const [serviceName,setServiceName]=useState(null);
    const [toggleState,setToggleState]=useState(0);
    const [serviceData,setServiceData]=useState([]);
   const {services}=useServiceContext();

    const toggleTab=(index)=>{
        setToggleState(index);
    }

    const showService=(service,index)=>{
        setServiceName(service);
        setServiceData(service.serviceData);
        setToggleState(index);
    }
        


  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        {services.map((item1,index)=>{
            return(
              <div>
                 <div className="services__content" >
                <div>
                 
                  {item1.firstName==="User Interface"?<Icon icon="uil:web-grid" className=" services__icon"></Icon>:item1.firstName==="User Experience"?
                        <Icon icon="uil:arrow" className=" services__icon"></Icon>:item1.firstName==="Database"?<Icon icon="uil:database"  className=" services__icon"></Icon>
                    :<Icon icon="uil:edit" className="services__icon"></Icon>}
                  <h3 className="services__title">
                  {item1.firstName} <br/> {item1.lastName}
                  </h3>
                </div>
      
                <span className="services__button" onClick={()=>showService(item1,1)}>
                  View More
                  <Icon icon="uil:arrow-right"  className="uil uil-arrow-right services__button-icon"></Icon>
                </span>
                
              </div>
              <div className={toggleState===1? "services__modal active-modal":"services__modal"}>
                  <div className="services__modal-content" >
                    <Icon icon="uil:times" onClick={()=>toggleTab(0)} className=" services__modal-close" ></Icon>
                       
                    <h3 className="services__modal-title">{serviceName?.firstName} {serviceName?.lastName}</h3>
                    <p className="services__modal-description">
                      {serviceName?.description}
                    </p>
                    <ul className="services__modal-services grid">
                      {serviceData.map((item) => {
                        return (
                          <span className="services__modal-button" key={item.id}>
                            <Icon icon="uil:check-circle" style={{fontSize: "50px", strokeWidth: "30",  stroke: "white" }} className="services__modal-icon"></Icon>
                            <p className="services__modal-info">{item}</p>
                          </span>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
               
            )
        })}
       
      
       
      </div>
    </section>
  );
};

export default Services;
