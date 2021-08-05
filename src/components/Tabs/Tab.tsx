import React from "react";

import { TabProps } from "./types";
import "./index.css";
import "../_styles/bootstrap.css";
import "../_styles/fadeIn.css";
import "../_styles/tabs-faq.css";
import "../_styles/animate.min.css"

const Tab: React.FC<TabProps> = ({ ...props }) => {
  const {link, title, index, isActive, onClick}=props;
  // useEffect(()=>{
  // })

  let classes="nav-item nav-link show";
  if(isActive){
    classes+=" active";
  }

  return (
    <a href={`#${link}`} className={classes}  id={`${index}-tab`} data-toggle="tab"
       aria-controls="general" aria-selected="true" role="tab"
         onClick={onClick}
    >{ title }</a>
  )
}

export default Tab;

