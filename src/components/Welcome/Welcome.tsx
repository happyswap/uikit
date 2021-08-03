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
                {/*<div className="ripples" />*/}
              </div>
              <div className="top-right-ripples">
                {/*<div className="ripples" />*/}
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
                        <img className="img-fluid" src="/images/theme-assets/what-is-crypto.png"
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
                      <img src="/images/theme-assets/problems-graphic.png" className="problems-img animated"
                           data-animation="fadeInUpShorter" data-animation-delay="0.6s"
                           alt="problems-graphic"/>
                    </div>
                  </div>
                </div>
                <div className="solutions mt-5">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 text-center move-lg-first">
                      <img src="/images/theme-assets/solutions-graphic.png" className="solutions-img animated"
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

          <section id="whitepaper" className="whitepaper section-padding bg-color">
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


          <section id="roadmap" className="roadmap section-padding bg-color">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    Roadmap</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    <strong>Implementation </strong>Sheet</h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">This is a list of cryptocurrencies. The number of
                    cryptocurrencies available over
                    <br className="d-none d-xl-block"/>the internet as of 7 January 2018 is over 1384 and
                      growing.</p>
                </div>
                <div className="row animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                  <div className="col-12">
                    <div className="roadmap-container">
                      <div className="swiper-container">
                        <div className="swiper-wrapper timeline">
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp completed">
                                <span className="date">November 2017</span>
                              </div>
                              <div className="status completed">
                                <span>Crypto Ico <br/>Platform idea</span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp completed">
                                <span className="date">January 2018</span>
                              </div>
                              <div className="status completed">
                                <span>Technical &amp; strategy <br/>devlopment</span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide active">
                            <div className="roadmap-info">
                              <div className="timestamp active">
                                <span className="date">May 2018</span>
                              </div>
                              <div className="status active">
                                <span>Ico Realease</span>
                                <span className="live">Live Now</span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp remaining">
                                <span className="date">August 2018</span>
                              </div>
                              <div className="status remaining">
                                <span>Beta version of <br/>Crypto Ico </span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp remaining">
                                <span className="date">November 2018</span>
                              </div>
                              <div className="status remaining">
                                <span>Software development kit <br/>for integrations</span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp remaining">
                                <span className="date">December 2018</span>
                              </div>
                              <div className="status remaining">
                                <span>Mobile apps for <br/>iOS &amp; Android</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-control">
                        <span className="prev-slide"></span>
                        <span className="next-slide"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="token-distribution" className="token-distribution section-padding bg-color">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    Token Distribution</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    <strong>Token</strong> Sale Stats</h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">The ICO usually takes place before the project is completed,
                    and helps fund the expenses <br className="d-none d-xl-block"/> undertaken by the founding
                      team until launch. For some of the larger projects.</p>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-xl-6 animated" data-animation="fadeInLeftShorter"
                       data-animation-delay="0.6s">
                    <div className="token-img">
                      <img className="img-fluid" src="/images/theme-assets/chart.png" alt="token-distribution"/>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-5 offset-xl-1 animated"
                       data-animation="fadeInRightShorter" data-animation-delay="0.6s">
                    <div className="content-area">
                      <h4>Details</h4>
                      <p className="mt-1">To calculate the number of tokens you’ll receive, you can follow the
                        following formula. Note that this applies to public presale contributions only.
                        If you participated through a syndicate or private presale,</p>
                      <p>To calculate the number of tokens you’ll receive, you can follow the following
                        formula. Note that this applies to public presale contributions only. If you
                        participated through a syndicate or private presale,</p>
                      <p><span>Symbol:</span> <strong className="grey-accent2">SWPY</strong></p>
                      <p><span>Initial Value:</span> <strong className="grey-accent2">1 ETH = 3177.38
                        SPWY</strong></p>
                      <p><span>Type:</span> <strong className="grey-accent2">BEP20</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="faq section-padding bg-color">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    FAQ</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    Frequently Asked <strong>Questions</strong></h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">Originally the term "FAQ" referred to the Frequently Asked
                    Question itself, and the
                    <br/>compilation of questions and answers was known as a "FAQ list" or some similar
                    expression.</p>
                </div>
                <div className="row">
                  <div className="col">
                    <nav>
                      <div className="nav nav-pills nav-underline mb-5 animated"
                           data-animation="fadeInUpShorter" data-animation-delay="0.5s" id="myTab"
                           role="tablist">
                        <a href="#general" className="nav-item nav-link active" id="general-tab"
                           data-toggle="tab" aria-controls="general" aria-selected="true" role="tab">General</a>
                        <a href="#ico" className="nav-item nav-link" id="ico-tab" data-toggle="tab"
                           aria-controls="ico" aria-selected="false" role="tab">Pre-ICO</a>
                        <a href="#token" className="nav-item nav-link" id="token-tab" data-toggle="tab"
                           aria-controls="token" aria-selected="false" role="tab">Tokens</a>
                        <a href="#client" className="nav-item nav-link" id="client-tab" data-toggle="tab"
                           aria-controls="client" aria-selected="false" role="tab">Client</a>
                        <a href="#legal" className="nav-item nav-link" id="legal-tab" data-toggle="tab"
                           aria-controls="legal" aria-selected="false" role="tab">Legal</a>
                      </div>
                    </nav>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="general" role="tabpanel"
                           aria-labelledby="general-tab">
                        <div id="general-accordion" className="collapse-icon accordion-icon-rotate">
                          <div className="card animated" data-animation="fadeInUpShorter"
                               data-animation-delay="0.1s">
                            <div className="card-header" id="headingOne">
                              <h5 className="mb-0">
                                <a className="btn-link" data-toggle="collapse"
                                   data-target="#collapseOne" aria-expanded="true"
                                   aria-controls="collapseOne">
                                  <span className="icon"/>
                                  Can I make payments directly from an exchange?
                                </a>
                              </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#general-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card animated" data-animation="fadeInUpShorter"
                               data-animation-delay="0.2s">
                            <div className="card-header" id="headingTwo">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#collapseTwo" aria-expanded="false"
                                   aria-controls="collapseTwo">
                                  <span className="icon"></span>
                                  When will SWPY be listed on exchanges?
                                </a>
                              </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                 data-parent="#general-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card animated" data-animation="fadeInUpShorter"
                               data-animation-delay="0.3s">
                            <div className="card-header" id="headingThree">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#collapseThree" aria-expanded="false"
                                   aria-controls="collapseThree">
                                  <span className="icon"></span>
                                  What is the SWPY Token a smart contract address?
                                </a>
                              </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                 data-parent="#general-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card animated" data-animation="fadeInUpShorter"
                               data-animation-delay="0.4s">
                            <div className="card-header" id="headingFour">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#collapseFour" aria-expanded="false"
                                   aria-controls="collapseFour">
                                  <span className="icon"></span>
                                  How can I create a crypto-wallet?
                                </a>
                              </h5>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                 data-parent="#general-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ico" role="tabpanel" aria-labelledby="ico-tab">
                        <div id="ico-accordion" className="collapse-icon accordion-icon-rotate">
                          <div className="card">
                            <div className="card-header" id="icoHeadingOne">
                              <h5 className="mb-0">
                                <a className="btn-link" data-toggle="collapse"
                                   data-target="#icoCollapseOne" aria-expanded="true"
                                   aria-controls="icoCollapseOne">
                                  <span className="icon"></span>
                                  Pityful a rethoric question ran over her cheek?
                                </a>
                              </h5>
                            </div>
                            <div id="icoCollapseOne" className="collapse show"
                                 aria-labelledby="icoHeadingOne" data-parent="#ico-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="icoHeadingTwo">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#icoCollapseTwo" aria-expanded="false"
                                   aria-controls="icoCollapseTwo">
                                  <span className="icon"></span>
                                  Which roasted parts of sentences fly into your mouth?
                                </a>
                              </h5>
                            </div>
                            <div id="icoCollapseTwo" className="collapse"
                                 aria-labelledby="icoHeadingTwo" data-parent="#ico-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="icoHeadingThree">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#icoCollapseThree" aria-expanded="false"
                                   aria-controls="icoCollapseThree">
                                  <span className="icon"></span>
                                  Collapsible Group Item #3
                                </a>
                              </h5>
                            </div>
                            <div id="icoCollapseThree" className="collapse"
                                 aria-labelledby="icoHeadingThree" data-parent="#ico-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="token" role="tabpanel" aria-labelledby="token-tab">
                        <div id="token-accordion" className="collapse-icon accordion-icon-rotate">
                          <div className="card">
                            <div className="card-header" id="tokenHeadingOne">
                              <h5 className="mb-0">
                                <a className="btn-link" data-toggle="collapse"
                                   data-target="#tokenCollapseOne" aria-expanded="true"
                                   aria-controls="tokenCollapseOne">
                                  <span className="icon"></span>
                                  Collapsible Group Item #1
                                </a>
                              </h5>
                            </div>
                            <div id="tokenCollapseOne" className="collapse show"
                                 aria-labelledby="tokenHeadingOne" data-parent="#token-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="tokenHeadingTwo">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#tokenCollapseTwo" aria-expanded="false"
                                   aria-controls="tokenCollapseTwo">
                                  <span className="icon"></span>
                                  Collapsible Group Item #2
                                </a>
                              </h5>
                            </div>
                            <div id="tokenCollapseTwo" className="collapse"
                                 aria-labelledby="tokenHeadingTwo" data-parent="#token-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="tokenHeadingThree">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#tokenCollapseThree" aria-expanded="false"
                                   aria-controls="tokenCollapseThree">
                                  <span className="icon"/>
                                  Collapsible Group Item #3
                                </a>
                              </h5>
                            </div>
                            <div id="tokenCollapseThree" className="collapse"
                                 aria-labelledby="tokenHeadingThree" data-parent="#token-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                        <div id="client-accordion" className="collapse-icon accordion-icon-rotate">
                          <div className="card">
                            <div className="card-header" id="clientHeadingOne">
                              <h5 className="mb-0">
                                <a className="btn-link" data-toggle="collapse"
                                   data-target="#clientCollapseOne" aria-expanded="true"
                                   aria-controls="clientCollapseOne">
                                  <span className="icon"/>
                                  Collapsible Group Item #1
                                </a>
                              </h5>
                            </div>
                            <div id="clientCollapseOne" className="collapse show"
                                 aria-labelledby="clientHeadingOne" data-parent="#client-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="clientHeadingTwo">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#clientCollapseTwo" aria-expanded="false"
                                   aria-controls="clientCollapseTwo">
                                  <span className="icon"/>
                                  Collapsible Group Item #2
                                </a>
                              </h5>
                            </div>
                            <div id="clientCollapseTwo" className="collapse"
                                 aria-labelledby="clientHeadingTwo" data-parent="#client-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="clientHeadingThree">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#clientCollapseThree" aria-expanded="false"
                                   aria-controls="clientCollapseThree">
                                  <span className="icon"/>
                                  Collapsible Group Item #3
                                </a>
                              </h5>
                            </div>
                            <div id="clientCollapseThree" className="collapse"
                                 aria-labelledby="clientHeadingThree"
                                 data-parent="#client-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="legal" role="tabpanel" aria-labelledby="legal-tab">
                        <div id="legal-accordion" className="collapse-icon accordion-icon-rotate">
                          <div className="card">
                            <div className="card-header" id="legalHeadingOne">
                              <h5 className="mb-0">
                                <a className="btn-link" data-toggle="collapse"
                                   data-target="#legalCollapseOne" aria-expanded="true"
                                   aria-controls="legalCollapseOne">
                                  <span className="icon"/>
                                  Collapsible Group Item #1
                                </a>
                              </h5>
                            </div>
                            <div id="legalCollapseOne" className="collapse show"
                                 aria-labelledby="legalHeadingOne" data-parent="#legal-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="legalHeadingTwo">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#legalCollapseTwo" aria-expanded="false"
                                   aria-controls="legalCollapseTwo">
                                  <span className="icon"></span>
                                  Collapsible Group Item #2
                                </a>
                              </h5>
                            </div>
                            <div id="legalCollapseTwo" className="collapse"
                                 aria-labelledby="legalHeadingTwo" data-parent="#legal-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="legalHeadingThree">
                              <h5 className="mb-0">
                                <a className="btn-link collapsed" data-toggle="collapse"
                                   data-target="#legalCollapseThree" aria-expanded="false"
                                   aria-controls="legalCollapseThree">
                                  <span className="icon"/>
                                  Collapsible Group Item #3
                                </a>
                              </h5>
                            </div>
                            <div id="legalCollapseThree" className="collapse"
                                 aria-labelledby="legalHeadingThree" data-parent="#legal-accordion">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact section-padding bg-color">
            <div className="container-fluid">
              <div className="container">
                <div className="heading text-center">
                  <h6 className="sub-title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                    Contact</h6>
                  <h2 className="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                    Contact<strong> Crypto ICO</strong></h2>
                  <div className="separator animated" data-animation="fadeInUpShorter"
                       data-animation-delay="0.3s">
                    <span className="large"></span>
                    <span className="medium"></span>
                    <span className="small"></span>
                  </div>
                  <p className="content-desc animated" data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s">Have questions? We’re happy to help.</p>
                </div>
                <div className="row">
                  <div className="col-md-12 col-xl-8 mx-auto">
                    <ul className="list-unstyled contact-info pb-5 mb-5">
                      <li className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">
                        <i className="ti-headphone"/>
                        <span className="ml-1">+44 0123 4567</span>
                      </li>
                      <li className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                        <i className="ti-email"/>
                        <span className="ml-1">info@yourcompany.com</span>
                      </li>
                      <li className="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">
                        <i className="ti-comment-alt"/>
                        <span className="ml-1">Join us on Telegram</span>
                      </li>
                    </ul>
                    <form action="#" method="post" acceptCharset="utf-8" className="text-center">
                      <input type="text" className="form-control animated" data-animation="fadeInUpShorter"
                             data-animation-delay="0.8s" name="name" placeholder="Your Name"/>
                        <input type="text" className="form-control animated" data-animation="fadeInUpShorter"
                               data-animation-delay="0.9s" name="mail" placeholder="Your Mail"/>
                                    <textarea rows={4} className="form-control animated" data-animation="fadeInUpShorter"
                                              data-animation-delay="1.0s" name="message"
                                              placeholder="Your Massage"/>
                          <button type="submit"
                                  className="btn btn-lg btn-glow btn-gradient-orange btn-round animated"
                                  data-animation="fadeInUpShorter" data-animation-delay="1.1s">Send Message
                          </button>
                    </form>
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
