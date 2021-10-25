import styled from "styled-components";

export const Root = styled.div<{
  color: string;
  fontSize: number;
  fontWeight: number;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  font-family: "Raleway";
`;
