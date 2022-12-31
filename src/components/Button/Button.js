import styled from "styled-components/macro";

const Button = styled.button`
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: ${(props) => props.theme.weights.bold};
  font-family: ${(props) => props.theme.families["sans-serif"]};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`;

export default Button;
