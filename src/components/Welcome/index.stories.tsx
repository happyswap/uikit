
import React from "react";

import Welcome from "./Welcome";


export default {
  title: "Components/Welcome",
  component: Welcome,
  argTypes: {},
};



export const Default: React.FC = () => {
  return (
    <>
      <Welcome/>
    </>
  );
};

