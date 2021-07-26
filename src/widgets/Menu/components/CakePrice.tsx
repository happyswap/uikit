import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { Logo2Icon } from "../icons";

interface Props {
  cakePriceUsd?: number;
  isDark:boolean
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  border:${({ theme }) => `solid 1px ${theme.colors.backgroundDisabled}`};
  border-radius: 20px;
  padding-left: 2px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
  .price{
    margin: 2px 10px;
  }
  
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink href="https://dex.guru/token/0x0BbFaB36fFC86Ce9de5f5e8C27665D894508b958-bsc" target="_blank">
      <Logo2Icon className="logo" isDark/>
      <Text color="borderColor" className="price" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
