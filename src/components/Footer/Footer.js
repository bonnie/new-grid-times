import React from "react";
import { Twitter, Facebook } from "react-feather";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";

import VisuallyHidden from "../VisuallyHidden";

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <TopRow>
          <nav>
            <TopNavList>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/press">Press Releases</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </TopNavList>
          </nav>
          <Social>
            <a href="/">
              <VisuallyHidden>Visit The Grid Times on Facebook</VisuallyHidden>
              <Facebook size={20} />
            </a>
            <a href="/">
              <VisuallyHidden>Visit The Grid Times on Twitter</VisuallyHidden>
              <Twitter size={20} />
            </a>
          </Social>
        </TopRow>
        <MainNavArea>
          <MainNavGroup>
            <MainNavHeading>Discover Content</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/pol">Politics</a>
              </li>
              <li>
                <a href="/wrl">World</a>
              </li>
              <li>
                <a href="/fin">Financial</a>
              </li>
              <li>
                <a href="/spo">Sports and Entertainment</a>
              </li>
              <li>
                <a href="/oped">Opinion and Editorial</a>
              </li>
            </MainNavList>
          </MainNavGroup>
          <MainNavGroup>
            <MainNavHeading>Regional Websites</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/us">New Grid United States</a>
              </li>
              <li>
                <a href="/eu">New Grid Europe</a>
              </li>
              <li>
                <a href="/asia">New Grid Asia</a>
              </li>
              <li>
                <a href="/mars">New Grid Mars and Beyond</a>
              </li>
              <li>
                <a href="/au">New Grid Australia</a>
              </li>
            </MainNavList>
          </MainNavGroup>
          <MainNavGroup>
            <MainNavHeading>Careers</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/pos">Open Positions</a>
              </li>
              <li>
                <a href="/team">Meet the team</a>
              </li>
              <li>
                <a href="/culture">Company Culture</a>
              </li>
            </MainNavList>
          </MainNavGroup>
          <MainNavGroup>
            <MainNavHeading>Legal and Privacy</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/🍪">Use of cookies</a>
              </li>
              <li>
                <a href="/manage">Manage cookies</a>
              </li>
              <li>
                <a href="/legal">Legal notice</a>
              </li>
              <li>
                <a href="/tos">Terms and Conditions</a>
              </li>
            </MainNavList>
          </MainNavGroup>
        </MainNavArea>
      </MaxWidthWrapper>
      <SubfooterWrapper>
        <MaxWidthWrapper>
          <Subfooter>
            <Logo href="/">New Grid Times</Logo>
            <Disclaimer>
              © 2021 Fake Company Ltd. All Rights Reserved
            </Disclaimer>
          </Subfooter>
        </MaxWidthWrapper>
      </SubfooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.gray[900]};
  font-family: ${(props) => props.theme.families["sans-serif"]};
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: ${(props) => props.theme.colors.gray[300]};
  font-size: 0.875rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[700]};
  padding: 24px 0;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    flex-direction: row;
    justify-content: center;
  }

  @media ${(props) => props.theme.queries.laptopAndUp} {
    justify-content: flex-end;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
  }

  path {
    stroke-width: 1.5px;
  }

  @media ${(props) => props.theme.queries.tabletAndUp} {
    margin-left: 48px;
  }
`;

const TopNavList = styled.ul`
  display: flex;
  gap: 16px;
`;

const MainNavArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0 48px;
  text-align: center;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    text-align: left;

    // world famous grid
    display: grid;
    padding: 16px;
    gap: 48px;
    grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
  }

  /* @media ${(props) => props.theme.queries.laptopAndUp} {
    justify-items: center;
    justify-content: space-evenly;
  } */
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    justify-content: space-around;
  }
`;

const MainNavGroup = styled.div`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: inline;
    align-self: flex-start;
    padding: 16px 8px 32px 8px;
  }
`;

const MainNavHeading = styled.h2`
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.weights.bold};
  color: ${(props) => props.theme.colors.gray[300]};
  margin-bottom: 8px;
`;

const MainNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubfooterWrapper = styled.div`
  background: ${(props) => props.theme.colors.offblack};
  padding: 8px 0px;
  /* Optical alignment */
  padding-bottom: 16px;
`;

const Subfooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    align-items: flex-start;
  }
`;

const Logo = styled.a`
  font-family: ${(props) => props.theme.families.logo};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.gray[100]};
`;

const Disclaimer = styled.p`
  margin-top: -4px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[500]};
`;

export default Footer;
