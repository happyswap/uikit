import React, { useState } from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Tabs from "./Tabs";
import { TabsProps } from "./types";
import TabContent from "./TabContent";


export default {
  title: "Components/Tabs",
  argTypes: {},
} as Meta;



export const Default: React.FC = () => {
  const props = {
    delay:1,
    tabs:[
      {

        link:"test",
        title:"Test",

      }, {

        link:"test2",
        title:"Test 2",

      },
    ]
  }
  const { tabs, delay } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = (e:any)=>{
    console.log('on cahnge',e)
    setActiveIndex(e);
  }

  return (
    <>
      <Tabs tabs={tabs} delay={delay} onChange={onChange} />
      {
        tabs.map((tab,i)=>{
          return(
          <TabContent active={i===activeIndex} key={i}>
            test {i} !{i===activeIndex}! +{activeIndex}+
          </TabContent>
          )
      })
      }

    </>
  );

}
