import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import CakePrice from "./components/CakePrice";


const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PinnedBack = styled.div`
  position: fixed;
  height : 100vh;
  color : #FFFFFF;
  z-index : 0;
  background :         linear-gradient(to right, #A34FFE, #5934FC);
  position: fixed;
  width:100%;
  
  .d-none {
    display : none !important;
  }

  .d-md-block {
    display : block !important;
  }
  
  .bg-ripple-animation {
    overflow : hidden;
    position : absolute;
    z-index : 1;
    top : 0;
    right : 0;
    left : 0;
    bottom : 0;
  }
  
  .left-bottom-ripples {
    margin-bottom : -80vh;
    margin-left : -80vh;
    width : 160vh;
    height : 160vh;
    position : absolute;
    left : 0;
    bottom : 0;
  }
  .top-right-ripples {
  margin-top : -80vh;
  margin-right : -80vh;
  width : 160vh;
  height : 160vh;
  position : absolute;
  top : 0;
  right : 0;
}

.ripples {
  width : 100%;
  height : 100%;
  text-align : center;
}
.ripples:before {
  content : '';
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 100%;
  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  border : 0.5px solid white;
  border-radius : 50%;
  opacity : 0;
  -webkit-transform : scale(1);
     -moz-transform : scale(1);
      -ms-transform : scale(1);
       -o-transform : scale(1);
          transform : scale(1);
  -webkit-animation-name : k1;
     -moz-animation-name : k1;
       -o-animation-name : k1;
          animation-name : k1;
  -webkit-animation-duration : 6s;
     -moz-animation-duration : 6s;
       -o-animation-duration : 6s;
          animation-duration : 6s;
  -webkit-animation-delay : 0s;
     -moz-animation-delay : 0s;
       -o-animation-delay : 0s;
          animation-delay : 0s;
  -webkit-animation-iteration-count : infinite;
     -moz-animation-iteration-count : infinite;
       -o-animation-iteration-count : infinite;
          animation-iteration-count : infinite;
  -webkit-animation-timing-function : linear;
     -moz-animation-timing-function : linear;
       -o-animation-timing-function : linear;
          animation-timing-function : linear;
}
.ripples:after {
  content : '';
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 100%;
  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);
  border : 0.5px solid white;
  border-radius : 50%;
  opacity : 0;
  -webkit-animation-name : k1;
     -moz-animation-name : k1;
       -o-animation-name : k1;
          animation-name : k1;
  -webkit-animation-duration : 6s;
     -moz-animation-duration : 6s;
       -o-animation-duration : 6s;
          animation-duration : 6s;
  -webkit-animation-delay : 3s;
     -moz-animation-delay : 3s;
       -o-animation-delay : 3s;
          animation-delay : 3s;
  -webkit-animation-iteration-count : infinite;
     -moz-animation-iteration-count : infinite;
       -o-animation-iteration-count : infinite;
          animation-iteration-count : infinite;
  -webkit-animation-timing-function : linear;
     -moz-animation-timing-function : linear;
       -o-animation-timing-function : linear;
          animation-timing-function : linear;
}
  
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.headBackground};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 5px 4px #6666;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
 // overflow: auto;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Roboto',Helvetica,Arial,sans-serif;
  font-size:12px;
  font-weight: 600;
  color:${({ theme }) => theme.colors.secondary};
  background:${({ theme }) => theme.colors.gradients.orange};
  margin-left: 12px;
  width: 120px;
  justify-content: center;
  
`

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
  tokenInfo
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    // window.addEventListener("scroll", throttledHandleScroll);
    // return () => {
    //   window.removeEventListener("scroll", throttledHandleScroll);
    // };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <PinnedBack>

        <div className="bg-ripple-animation d-md-block">
          <div className="left-bottom-ripples">
            <div className="ripples" />
          </div>
          <div className="top-right-ripples">
            <div className="ripples" />
          </div>
        </div>
      </PinnedBack>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/images/logo.png"}
        />
        <Flex>
          <CakePrice isDark cakePriceUsd={cakePriceUsd} />
          <ComingSoon >Coming Soon</ComingSoon>
          {/*<UserBlock account={account} login={login} logout={logout} />*/}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          tokenInfo={tokenInfo}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
