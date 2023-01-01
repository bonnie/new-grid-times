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
          {/* assuming max opinion story count of 4 */}
          {OPINION_STORIES.map((story, index) =>
            index < 4 ? <OpinionStory key={story.id} {...story} /> : null
          )}
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
  margin-bottom: 48px;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
  }

  @media ${(props) => props.theme.queries.laptopAndUp} {
    --grid-gap: 0;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    margin-right: var(--grid-border-spacer);
    padding-right: var(--grid-border-spacer);
    border-right: var(--grid-border);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    margin-right: var(--grid-border-spacer);
    padding-right: var(--grid-border-spacer);
    border-right: var(--grid-border);
  }
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

  @media ${(props) => props.theme.queries.laptopAndUp} {
    margin-top: var(--grid-border-spacer);
    padding-top: var(--grid-border-spacer);
    border-top: var(--grid-border);
  }
`;

export default MainStoryGrid;
