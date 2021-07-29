import React, { useEffect } from "react";
import "./bootstrap.css";

import "./flipclock-style.css";
// eslint-disable-next-line import/extensions
import "./flipclock.js";
import "./index.css";
import "./template-counter.css";
import { WelcomeProps } from "./types";

const Welcome: React.FC<WelcomeProps> = ({  ...props }) => {

  const date=60000;
  useEffect(()=>{

      /* FlipClock Counter */
      let clock;
      clock = (window as any).$('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
          stop: () => {
            (window as any).$('.message').html('The clock has stopped!')
          }
        }
      });
      clock.setTime(date);
      clock.setCountdown(true);
      clock.start();

  })

  return (
    <div className="content-wrapper" {...props}>
      <div className="content-body">
        <main>
          <section className="head-area" id="head-area" data-midnight="white">
            <div className="bg-banner" />
            <div className="head-content container-fluid d-flex">
              <div className="container">

                <div className="banner-wrapper">
                  <div className="row align-items-center justify-content-center">
                    <div className="banner-content">
                      <h1 className="animated" id="joinText" data-animation="fadeInUpShorter" data-animation-delay="1.5s">Welcome to HAPPYSWAP
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="clock-counter animated" data-animation="fadeInUpShorter" data-animation-delay="2.1s">
                  <div className="clock ml-0 mt-4" />
                  <div className="message" />
                </div>

                <div className="banner-wrapper">
                  <div className="row align-items-center justify-content-center">
                      <h1 className="animated h1-roboto" id="OpenSoon" data-animation="fadeInUpShorter" data-animation-delay="1.7s">We are opening soon!</h1>
                  </div>
                </div>

                <div className="banner-wrapper">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="banner-content advantages-list">
                        <div className="h3-advantages-list">Our Key Advantages</div>
                        <ul>
                          <li><span className="points">No deposit fees for most vaults</span></li>
                          <li><span className="points">Up to 100% fee reward for most token price</span></li>
                          <li><span className="points">Competitive yields</span></li>
                          <li><span className="points">CO<sup>2</sup> positive service <a href="#CO-friendly" className="read-more">Read more</a></span></li>
                          <li><span className="points">Improve yield by stacking NFTs <span className="soon">Coming soon</span></span></li>
                        </ul>
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


          <section className="about section-padding" id="about">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    What is Crypto ICO</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    About <strong>Crypto ICO</strong></h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">Crypto ICO aims to disrupt the cryptotrading industry by
                    lowering the barrier
                    <br className="d-none d-xl-block"/> to creating algorithmic trading models.</p>
                </div>
                <div className="content-area">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 animated" data-animation="fadeInLeftShorter"
                         data-animation-delay="0.5s">
                      <h4 className="title">We built a platform for <br className="d-none d-xl-block"/> The crypto
                        trading Industry</h4>
                      <h6 className="pt-4 pb-2">Cryptocurrency exchanges or digital currency exchanges (DCE)
                        are businesses that allow customers to trade cryptocurrencies or digital
                        currencies for other assets.</h6>
                      <p>Cryptocurrency exchanges or digital currency exchanges (DCE) are businesses that
                        allow customers to trade cryptocurrencies or digital currencies for other
                        assets</p>
                      <p>Creators of digital currencies are often independent of the DCEs that trade the
                        currency.[6] In one type of system, digital currency providers (DCP), are
                        businesses that keep and administer accounts.</p>
                    </div>
                    <div className="col-md-12 col-lg-6 animated" data-animation="fadeInRightShorter"
                         data-animation-delay="0.5s">
                      <div className="position-relative what-is-crypto-img float-xl-right">
                        <img className="img-fluid" src="theme-assets/images/what-is-crypto.png"
                             alt="What is Crypto?"/>
                          <div className="play-video text-center">
                            <a href="#"
                               className="play rounded-circle btn-gradient-orange btn-glow video-btn"
                               data-toggle="modal" data-src="https://www.youtube.com/embed/UXAJu3zS4bU"
                               data-target="#ico-modal"><i className="ti-control-play"></i></a>
                            <span className="mt-2 d-none d-md-block">How it works</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section id="problem-solution" className="problem-solution section-padding bg-color">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    Solutions</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    Problems &amp; <strong>Solutions</strong></h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">More than $40 million in assets were placed under restraint
                    pending forfeiture, and more than 30 <br className="d-none d-xl-block"/> Liberty Reserve
                      exchanger domain names were seized.</p>
                </div>
                <div className="problems">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="heading mb-4">
                        <h4 className="title animated" data-animation="fadeInUpShorter"
                            data-animation-delay="0.2s">Problems</h4>
                        <div className="separator animated" data-animation="fadeInUpShorter"
                             data-animation-delay="0.3s">
                          <span className="large"></span>
                          <span className="medium"></span>
                          <span className="small"></span>
                        </div>
                      </div>
                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                        Different pieces of the new Internet are born as building blocks, but there’s no
                        way for them to work together.</p>

                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                        Even interoperating new technologies with old centralised resources can prove
                        useful in making the paradigm shift from Web 2 to Web 3 happen. Now we own our
                        data, we can prove that we own what we have and have created it on different
                        platforms, but how do we put it together into a whole new cohesive
                        framework.</p>
                    </div>
                    <div className="col-md-12 col-lg-6 text-center">
                      <img src="theme-assets/images/problems-graphic.png" className="problems-img animated"
                           data-animation="fadeInUpShorter" data-animation-delay="0.6s"
                           alt="problems-graphic"/>
                    </div>
                  </div>
                </div>
                <div className="solutions mt-5">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 text-center move-lg-first">
                      <img src="theme-assets/images/solutions-graphic.png" className="solutions-img animated"
                           data-animation="fadeInUpShorter" data-animation-delay="0.6s"
                           alt="problems-graphic"/>
                    </div>
                    <div className="col-md-12 col-lg-6 move-first">
                      <div className="heading mb-4">
                        <h4 className="title animated" data-animation="fadeInUpShorter"
                            data-animation-delay="0.2s">Solutions</h4>
                        <div className="separator animated" data-animation="fadeInUpShorter"
                             data-animation-delay="0.3s">
                          <span className="large"></span>
                          <span className="medium"></span>
                          <span className="small"></span>
                        </div>
                      </div>
                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                        Decentralized cryptocurrency is produced by the entire cryptocurrency system
                        collectively, at a rate which is defined when the system is created and which is
                        publicly known.</p>

                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">In
                        centralized banking and economic systems such as the Federal Reserve System,
                        corporate boards or governments control the supply of currency by printing units
                        of fiat money or demanding additions to digital banking ledgers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="whitepaper" className="whitepaper section-padding">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    Whitepaper</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    <strong>Documents,</strong> Terms &amp; Conditions</h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">Terms of service are rules by which one must agree to abide
                    in order to use a service.
                    <br className="d-none d-xl-block"/>Terms of service can also be merely a disclaimer,
                      especially regarding the use of websites.</p>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-5">
                    <div className="whitepaper-img">
                      <a href="/doc.html">
                        <img className="img-fluid animated" data-animation="fadeInUpShorter"
                             data-animation-delay="0.6s" src="/images/whitepaper.png"
                             alt="whitepaper"/>
                          <div className="title"> Some title text</div>
                          <div className="desc"> Description for ico and some more text an more ..</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-7">
                    <div className="content-area">
                      <h4 className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                        Whitepaper</h4>
                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">A
                        white paper is an authoritative report or guide that informs readers concisely
                        about a complex issue and presents the issuing body&apos;s philosophy on the matter.
                        It is meant to help readers understand an issue, solve a problem, or make a
                        decision.</p>
                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">The
                        initial British term concerning a type of government-issued document has
                        proliferated, taking a somewhat new meaning in business. In business, a white
                        paper is closer to a form of marketing presentation, a tool meant to persuade
                        customers and partners and promote a product or viewpoint, White papers may be
                        considered grey literature.</p>
                      <p className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">
                        Since the early 1990s, the term &quot;white paper&quot;, or &quot;whitepaper&quot;, has been applied
                        to documents used as marketing or sales tools in business.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



        </main>
      </div>
    </div>
  );
};
export default Welcome;
