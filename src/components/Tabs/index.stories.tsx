import React, { useState } from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import Faq from "./Faq";


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

    setActiveIndex(e);
  }

  return (

    <section id="faq" className="faq section-padding bg-color">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <h6 className="sub-title animated fadeInUpShorter" data-animation="fadeInUpShorter"
            data-animation-delay="0.2s">
            Tabs</h6>

          </div>
          <div className="row">
            <div className="col">

              <Tabs tabs={tabs} delay={delay} onChange={onChange} />
              <div className="tab-content">
              {
                tabs.map((tab,i)=>{
                  return(
                      <TabContent active={i===activeIndex} key={i}>
                        test {i} !{i===activeIndex}! +{activeIndex}+
                      </TabContent>
                  )
              })
              }
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );

}


export const FaqAcc: React.FC = () => {
  const props = {

    items:[
      {

        label:"Acc1",
        content:"Acc1 Text",

      },
      {

        label:"Acc2",
        content:"Acc2 Text",

      },
    ]
  }
  const { items} = props;


  return (



    <section id="faq" className="nav section-padding bg-color">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <h6 className="sub-title animated fadeInUpShorter" data-animation="fadeInUpShorter"
                data-animation-delay="0.2s">
              FAQ</h6>

          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="general" role="tabpanel" aria-labelledby="general-tab">
                  <Faq items={items}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
