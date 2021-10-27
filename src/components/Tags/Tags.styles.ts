import styled, { css } from "styled-components";

export const Root = styled.div<{
  color: string;
  fontSize: number;
  fontWeight: number;
  capitalize: boolean;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  ${(props) =>
    props.capitalize &&
    css`
      text-transform: uppercase;
    `};
  font-family: Raleway;
`;
