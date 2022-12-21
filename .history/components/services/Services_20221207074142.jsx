import React,{useState} from "react";
import "./services.css";
import Data from "../../assets/services";
import { useServiceContext } from "../../contexts/ServiceContext";

const data = Data.servicesData;
const name =Data.servicesName;

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
                 <div className="services__content">
                <div>
                 
                  {item1.firstName==="User Interface"?<i className="uil uil-web-grid services__icon"></i>:item1.firstName==="User Experience"?
                        <i className="uil uil-arrow services__icon"></i>:item1.firstName==="Database"?<i className="uil uil-database services__icon"></i>
                    :<i className="uil uil-edit services__icon"></i>}
                  <h3 className="services__title">
                  {item1.firstName} <br/> {item1.lastName}
                  </h3>
                </div>
      
                <span className="services__button" onClick={()=>showService(item1,1)}>
                  View More
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                
              </div>
              <div className={toggleState===1? "services__modal active-modal":"services__modal"}>
                  <div className="services__modal-content" >
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close" ></i>
                       
                    <h3 className="services__modal-title">{serviceName?.firstName} {serviceName?.lastName}</h3>
                    <p className="services__modal-description">
                      {serviceName?.description}
                    </p>
                    <ul className="services__modal-services grid">
                      {serviceData.map((item, index) => {
                        return (
                          <li className="services__modal-services" key={item.id}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">{item}</p>
                          </li>
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
