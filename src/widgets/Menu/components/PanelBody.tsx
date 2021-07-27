import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  background-image: url(/images/background-left-bottom-quatter.png);
  background-position: left 0px top 350px;
    background-repeat: no-repeat;
`;

const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  margin-bottom: 1em
`;

const MenuA =styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
`



const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          console.log('initialOpenState:', initialOpenState, entry );
          return (
            <div>
            <MenuEntry  key={entry.label} className={calloutClass}>

              <MenuA href={entry.href} target={entry.target} onClick={handleClick}>
                {iconElement}
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              </MenuA>
            </MenuEntry>
              <SubMenuContainer>
              {
                entry.items.map((item) => (
                  <MenuEntry key={item.href}   secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href} target={item.target}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
              </SubMenuContainer>
            </div>

          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} target={entry.target} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
