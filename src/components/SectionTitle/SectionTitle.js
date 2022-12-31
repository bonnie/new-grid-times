import React from "react";

import styled from "styled-components/macro";

const SectionTitle = ({ children, cornerLink }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
      {cornerLink && (
        <CornerLink href={cornerLink.href}>{cornerLink.content}</CornerLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.gray[900]};
  font-weight: ${(props) => props.theme.weights.bold};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CornerLink = styled.a`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.gray[900]};
  font-family: ${(props) => props.theme.families["sans-serif"]};
  font-weight: ${(props) => props.theme.weights.bold};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export default SectionTitle;
