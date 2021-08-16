import React from "react";
import styled from "styled-components";

import { PanelProps, PushedProps } from "../types";

import { FormattedText } from "../../../components/Text";


interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;



const TPInfo = styled.div`
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
  .title sup {
    font-size: 8px;
    padding-top: 5px;
    margin-right: 0.5em;
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


const PanelTreepoints: React.FC<Props> = ({
  treePointsData
}) => {


  return (


      <TPInfo>
        <div className='title'>CO<sup>2</sup> information</div>

        {treePointsData.planted &&
        <div className='row'>
          <div className='cap'>Tree Planted:</div>
          <div className='val'><FormattedText value={treePointsData.planted} decimals={0} /></div>
        </div>
        }
        {treePointsData.carbon &&
        <div className='row'>
          <div className='cap'>Carbon offset:</div>
          <div className='val'>{treePointsData.carbon}</div>
        </div>
        }



      </TPInfo>
  );
};

export default PanelTreepoints;
