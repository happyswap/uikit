import React, { useEffect, useState } from "react";



import "./index.css";
import "../_styles/bootstrap.css";
import "../_styles/fadeIn.css";
import "../_styles/tabs-faq.css";
import "../_styles/animate.min.css"

import Accordeon from "./Accordeon";
import { AccordeonProps, FaqProps } from "./types";



const Faq: React.FC<FaqProps> = ({ ...props }) => {

  const [active, setActive] = useState(-1);

  const handleClick= (index:any):false =>{
    if (index !== active) {
      setActive(index);
    }
    return false;
  }

  const {items}=props;


  return (

    <div  className="collapse-icon accordion-icon-rotate">
      { items.map((item:AccordeonProps,i:number)=>{
        const {label,content}=item;
        return (
          <Accordeon isOpen={i===active} label={label}  content={content} key={i} index={i} handleClick={handleClick}/>
        )
      })}
    </div>

  )
}

export default Faq;
