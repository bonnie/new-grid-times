import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 0px;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  padding: 16px;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
`;

const SportsSection = styled.section`
  overflow: auto;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    margin-left: var(--grid-border-spacer);
    padding-left: var(--grid-border-spacer);
    border-left: var(--grid-border);
  }
`;

const SportsStories = styled.div`
  display: grid;
  padding: 16px;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));

  @media ${(props) => props.theme.queries.tabletAndUp} {
    display: flex;
    gap: 16px;
  }
`;

export default SpecialtyStoryGrid;
