import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .logo {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    
  }
  .logo span:first-child{
    font-weight: 600;
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoWithText className="desktop-icon" isDark={isDark} /> <div className="logo"><span>HAPPY</span><span>SWAP</span></div>
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Happyswap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Happyswap home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
