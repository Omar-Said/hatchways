import styled, { css } from "styled-components";

export const Root = styled.div<{
  color: string;
  fontSize: number;
  fontWeight: number;
  capitalize: boolean;
  textAlignCenter: boolean;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  ${(props) =>
    props.capitalize &&
    css`
      text-transform: uppercase;
    `};
  ${(props) =>
    props.textAlignCenter &&
    css`
      text-align: center;
      width: 100%;
      height: 50px;
      padding-top: 1rem;
    `};
  font-family: Raleway;
`;
