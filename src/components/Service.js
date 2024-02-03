import React from 'react';
import { TbTruck } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./service.css"
const Service = () => {
  return (
    <section className='service-section'>
      <div className="service-section-box">
        <div className="service-delivary service-container">
        <TbTruck className='service-icon'/>
        <h2>Super Fast And Free Delivary</h2>
        </div>
        <div className="service-secondList">
            <div className="service-secondList-first-box service-container">
            <GiCheckedShield className='service-icon' />
            <h2>Non-Contact Shipping</h2>
            </div>
            <div className="service-secondList-second-box service-container">
                <MdSavings className='service-icon'/>
                <h2>Money-back Garanteed</h2>
            </div>
        </div>
        <div className="service-payment service-container">
            <RiSecurePaymentLine className='service-icon'/>
            <h2>Super Secure Payment System</h2>
        </div>
      </div>
    </section>
  )
}

export default Service
