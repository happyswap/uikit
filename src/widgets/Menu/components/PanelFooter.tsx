import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";

import SocialLinks from "./SocialLinks";
import { FormattedText } from "../../../components/Text";


interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const TokenInfo = styled.div`
  padding: 0 24px;
  margin-bottom: 1px;
  border-bottom:  ${({ theme }) => `solid 1px ${theme.colors.menuLightBackground}`};
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSubtle};

  .title {    
    display: flex;
    font-weight: 600;
    justify-content: center;
    margin: 8px 0 10px;
  }
  .row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .cap{
    text-align: left;
  }
  .val {
    text-align: right;
  }
  
`;


const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  tokenInfo
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      {/*<SocialEntry>*/}
      {/*  /!*<CakePrice cakePriceUsd={cakePriceUsd} />*!/*/}
      {/*  /!* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> *!/*/}
      {/*</SocialEntry>*/}
      <TokenInfo>
        <div className='title'>Swappies (SWPY) information:</div>
        {
          tokenInfo.map((item) => (

        <div className='row'>
          <div className='cap'>{item.label}</div><div className='val'><FormattedText value={parseInt(item.value,10)} decimals={0}/></div>
        </div>
          ))}
      </TokenInfo>

      <SettingsEntry>
        {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
        <SocialLinks />
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
