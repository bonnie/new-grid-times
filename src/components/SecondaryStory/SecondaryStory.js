import React from "react";
import styled from "styled-components/macro";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <Wrapper href={`/story/${id}`}>
      <Article>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  &:not(:first-of-type) {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${(props) => props.theme.colors.gray[300]};
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: ${(props) => props.theme.colors.gray[900]};
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.weights.bold};
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
`;

export default SecondaryStory;
