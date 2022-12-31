import React from "react";
import styled from "styled-components/macro";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: ${(props) => props.theme.colors.gray[900]};
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
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
