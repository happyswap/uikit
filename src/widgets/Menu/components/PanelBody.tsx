import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import Accordion from "./Accordion";

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



      {links.map((entry,index) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if(index === 0){
          return (
            <div>
              <MenuEntry  key={entry.label} isPushed={isPushed} className={calloutClass}>

                <MenuA href={entry.href} target={entry.target} onClick={handleClick}>
                  {iconElement}
                  <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                </MenuA>
              </MenuEntry>
              <SubMenuContainer>
                {
                  entry?.items?.map((item) => (
                    <MenuEntry key={item.href} isPushed={isPushed}  secondary isActive={item.href === location.pathname} onClick={handleClick}>
                      {item.hashLink
                        ?<HashLink to={item.href}>{item.label}</HashLink>
                        : <MenuLink href={item.href} target={item.target}>{item.label}</MenuLink>
                      }
                    </MenuEntry>
                  ))}
              </SubMenuContainer>
            </div>
          )
        }


        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          // console.log('initialOpenState:', initialOpenState, entry );
          return (
            <div>

              <Accordion
                key={entry.label}
                isPushed={isPushed}
                pushNav={pushNav}
                icon={iconElement}
                label={entry.label}
                initialOpenState={initialOpenState}
                className={calloutClass}
              >

              {
                entry.items.map((item) => (
                  <MenuEntry key={item.href} isPushed={isPushed}  secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    {item.hashLink
                      ?<HashLink to={item.href}>{item.label}</HashLink>
                      : <MenuLink href={item.href} target={item.target}>{item.label}</MenuLink>
                    }
                  </MenuEntry>
                ))}

              </Accordion>

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
