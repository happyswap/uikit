import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 76 76" {...props}>
      <defs><clipPath id="a"><path d="M424 241h76v76h-76z"/></clipPath></defs><g fill="#FFF" clipPath="url(#a)" transform="translate(-424 -241)"><path d="M487.505 296.45v-42.955h-2.684c-10.964 0-16.67 1.781-21.479 5.371v42.955c4.809-3.586 10.512-5.371 21.479-5.371h2.684zM433.809 299.134v-40.271l-2.684 2.687v39.936h8.054c8.23 0 13.493 1.003 17.641 3.019h3.835c-4.975-4.703-16.108-5.371-24.162-5.371h-2.684z"/><path d="M436.495 253.495v42.955h2.684c10.964 0 16.67 1.785 21.479 5.371v-42.958c-4.809-3.586-10.512-5.37-21.479-5.37l-2.684.003zM490.191 258.863v40.271h-2.683c-8.055 0-19.187.665-24.163 5.37h3.836c4.147-2.015 9.414-3.019 17.64-3.019h8.055v-39.936z"/></g>
    </Svg>
  );
};

export default Icon;
