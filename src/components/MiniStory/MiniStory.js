import React from "react";
import styled from "styled-components/macro";

const MiniStory = ({ id, image, title }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Title>{title}</Title>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    width: 220px;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 220 / 132;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.weights.bold};
  line-height: 1.3;
  color: ${(props) => props.theme.colors.gray[900]};
`;

export default MiniStory;
