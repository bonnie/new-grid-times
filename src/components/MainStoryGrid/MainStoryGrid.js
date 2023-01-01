import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --grid-gap: 48px;
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: var(--grid-gap) 0px;
  margin-bottom: var(--grid-gap);

  @media ${(props) => props.theme.queries.tabletOnly} {
    grid-template-areas:
      "main-story secondary-stories"
      "opinion-stories opinion-stories"
      "advertisement advertisement";
    grid-template-columns: 2fr 1fr;

    // is there a better way than hard-coding where it goes?
    // since the grid template areas are hard-coded too, I don't
    // feel so bad...
    section:nth-of-type(2) {
      margin-left: var(--grid-border-spacer);
      padding-left: var(--grid-border-spacer);
      border-left: var(--grid-border);
    }
  }
  @media ${(props) => props.theme.queries.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 1fr 1fr 272px;

    // is there a better way than hard-coding where it goes?
    // since the grid template areas are hard-coded too, I don't
    // feel so bad...
    section:nth-of-type(1),
    section:nth-of-type(2) {
      margin-right: var(--grid-border-spacer);
      padding-right: var(--grid-border-spacer);
      border-right: var(--grid-border);
    }

    section:nth-of-type(4) {
      margin-top: calc(var(--grid-border-spacer) - var(--grid-gap));
      padding-top: var(--grid-border-spacer);
      border-top: var(--grid-border);
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  a:not(:last-of-type) article {
    margin-bottom: var(--grid-border-spacer);
    padding-bottom: var(--grid-border-spacer);
    border-bottom: var(--grid-border);
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media ${(props) => props.theme.queries.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    a:not(:last-of-type) article {
      --grid-border-spacer: 0;
      border-bottom: none;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
