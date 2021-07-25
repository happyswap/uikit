import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const Container = styled.div`
 
.flame{
  color: orange
}
 
`;


const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Container>
      {account ? (
        <Button
          className="flame"
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          className="flame"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </Container>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
