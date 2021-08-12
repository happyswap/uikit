import React from "react";
import "../_styles/bootstrap.css";
import "./template-counter.css";
import "./logo.css";
import { IRippleLogoProps } from "./types";



const RippleLogo:React.FC<IRippleLogoProps> = ({...props}) => {
  const {size} = props;
  let class1="logo-wrapper align-items-center";
  if(size){
    class1= `${size } logo-wrapper align-items-center`;
  }

  return (
    <div className={class1}>
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
