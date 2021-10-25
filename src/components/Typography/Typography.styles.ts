import styled from "styled-components";

export const Root = styled.div<{ color: string }>`
  background: ${(props) => props.color};
`;
