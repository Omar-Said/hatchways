import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridItem = styled.div<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin-right: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 50%;
`;

export const Card = styled.div`
  border-bottom: 1px solid #e7e7e7;
  width: 500px;
`;
