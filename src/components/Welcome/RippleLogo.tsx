import React from "react";
import "../_styles/bootstrap.css";
import "./template-counter.css";


const RippleLogo:React.FC = () => {
  return (
    <div className="logo-wrapper align-items-center">
      <div className="crypto-logo">
        <div id="ripple" />
        <div id="ripple2" />
        <div id="ripple3" />
        <img src="/images/logo-big.png" className="crypto-logo-img rounded mx-auto d-block pulse2" alt="SWPY"/>
      </div>
    </div>
  )
}
export default RippleLogo;
