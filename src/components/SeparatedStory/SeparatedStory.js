import styled from "styled-components";

const SeparatedStory = styled.a`
  &:not(:first-of-type) {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${(props) => props.theme.colors.gray[300]};
  }
`;

export default SeparatedStory;
