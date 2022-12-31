import React from "react";
import styled from "styled-components/macro";
import format from "date-fns/format";

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>{format(new Date(), "EEEE, MMMM do, yyyy")}</TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: ${(props) => props.theme.families.logo};
  font-size: 3rem;
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.weights.medium};
  margin-top: -1rem;
`;

export default Logo;
