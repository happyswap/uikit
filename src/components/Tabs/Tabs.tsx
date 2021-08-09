import React, { useEffect, useState } from "react";

import {  TabsProps } from "./types";

import "./index.css";
import "../_styles/bootstrap.css";
import "../_styles/fadeIn.css";
import "../_styles/tabs-faq.css";
import "../_styles/animate.min.css"
import Tab from "./Tab";


// @ts-ignore
const Tabs: React.FC<TabsProps> = ({ onChange,...props }) => {
  const {delay,tabs}=props;
  const [active, setActive] = useState(0);
  const tabStyle = {
   // position: 'absolute',
  } as React.CSSProperties;
  useEffect(()=>{
    onChange(active);
  },[active])

  const handleClick = (e:any):false =>{
    const index = parseInt(e.target.id, 10);

    if (index !== active) {
      setActive(index);
    }
    return false;
  }

  return (

    <nav>
      <div className="tabs nav nav-pills nav-underline  animated fadeInUpShorter" data-animation="fadeInUpShorter"
           data-animation-delay={`${delay}s`} id="myTab" role="tablist" style={tabStyle}>

        { tabs.map((tabProps,i)=>{
          const {link,title}=tabProps;
          const isActive = i === active;

          return (
            <Tab link={link} title={title} isActive={isActive} key={i} index={i} onClick={handleClick}/>
          )
        })}

      </div>
    </nav>

  )
}

export default Tabs;

