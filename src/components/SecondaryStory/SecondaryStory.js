import React from "react";
import styled from "styled-components/macro";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: ${(props) => props.theme.colors.gray[900]};

  &:not(first-of-type) {
    border-top: 1px solid ${(props) => props.theme.colors.gray[300]};
  }
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
