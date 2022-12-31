import React from "react";
import styled from "styled-components/macro";

import SeparatedStory from "../SeparatedStory";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <SeparatedStory href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </SeparatedStory>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[900]};

  @media ${(props) => props.theme.queries.tabletOnly} {
    display: block;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 2rem;

  @media ${(props) => props.theme.queries.tabletOnly} {
    margin-left: 0;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.weights.medium};
  color: ${(props) => props.theme.colors.gray[700]};
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.weights.bold};
  line-height: 1.3;
`;

export default OpinionStory;
