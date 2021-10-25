import styled from "styled-components";

export const Root = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  margin-top: 5rem;
  border: 2px solid #e7e7e7;
`;
