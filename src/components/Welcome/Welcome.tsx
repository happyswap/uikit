import React from "react";
import "./index.css";
import "./template-counter.css";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WelcomeProps{}



const Welcome: React.FC<WelcomeProps> = ({  ...props }) => {
  return (
    <div className="content-wrapper" {...props}>
      <div className="content-body">
        <main>
          <section className="head-area" id="head-area" data-midnight="white">
            <div className="bg-banner" />
            <div className="head-content container-fluid d-flex">
              <div className="container">
                <div className="clock-counter animated" data-animation="fadeInUpShorter"
                     data-animation-delay="2.1s">
                  <div className="clock ml-0 mt-4" />
                  <div className="message" />
                </div>
                <div className="banner-wrapper">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="banner-content">
                        <h1 className="animated" id="joinText" data-animation="fadeInUpShorter" data-animation-delay="1.5s">Join the future of algorithmic<br/>crypto trading
                          strategies
                        </h1>






                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 move-first animated" data-animation="zoomIn"
                         data-animation-delay="2s">
                      <div className="logo-wrapper ml-5 pl-5 align-items-center">
                        <div className="crypto-logo">
                          <div id="ripple" />
                          <div id="ripple2" />
                          <div id="ripple3" />
                          <img src="/images/logo-big.png"
                               className="crypto-logo-img rounded mx-auto d-block pulse2" alt="SWPY"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-ripple-animation d-none d-md-block">
              <div className="left-bottom-ripples">
                <div className="ripples" />
              </div>
              <div className="top-right-ripples">
                <div className="ripples" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Welcome;
