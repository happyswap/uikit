import React, { ReactNode, useState } from "react";
import { AccordeonProps } from "./types";



const Accordeon: React.FC<AccordeonProps> = ({
                                      label,
                                      content,
                                      isOpen = false,
                                       handleClick,
                                      index,

                                    }) => {


  let aClass="btn-link";
  if(isOpen){
    aClass+=" collapsed";
  }

  return (
      <div className="card animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="0.1s">
        <div className="card-header" id="headingOne" onClick={()=>handleClick(index)}>
          <h5 className="mb-0">
            <a className={aClass} data-toggle="collapse"  aria-expanded={isOpen?"true":"false"}
               aria-controls="collapseOne">
              <span className="icon"/>
              {label}
            </a>
          </h5>
        </div>
        {isOpen && <div  className="collapse show" aria-labelledby="headingOne" data-parent="#general-accordion">
          <div className="card-body">
            {content}
          </div>
        </div>
        }
      </div>

  );
};

export default Accordeon;
