
import React from "react";

import Welcome from "./Welcome";
import RippleLogo from "./RippleLogo";


export default {
  title: "Components/Welcome",
  component: Welcome,
  argTypes: {},
};



export const Default: React.FC = () => {
  return (
    <>
      <Welcome count={12600032}/>
    </>
  );
};

export const RippleLogoShow: React.FC = () => {
  return (
    <>
      <RippleLogo />
    </>
  );
};

export const RippleLogoSizeShow: React.FC = () => {
  return (
    <>
      <RippleLogo size="large" />
      <RippleLogo size="middle" />
      <RippleLogo size="small" />
    </>
  );
};

