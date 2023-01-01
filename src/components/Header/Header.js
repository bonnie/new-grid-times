import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <Wrapper>
      <Side>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <UserButton>
              <button>
                <User size={24} />
              </button>
            </UserButton>
          </Row>
        </SuperHeader>
      </Side>
      <MainHeader>
        <Logo />
      </MainHeader>
      <Side>
        <SubscribeLogin>
          <Button>Subscribe</Button>
          <LoginLink>Already a subscriber?</LoginLink>
        </SubscribeLogin>
      </Side>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Side = styled.div`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    flex: 1;
    max-width: 160px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: ${(props) => props.theme.colors.gray[900]};
  color: white;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    color: ${(props) => props.theme.colors.gray[900]};
    background: transparent;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    position: absolute;
    top: 55px;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UserButton = styled(ActionGroup)`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeLogin = styled.div`
  display: none;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }
`;

const LoginLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  font-size: calc(14 / 16) rem;
  margin-top: 8px;
`;

export default Header;
