import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
`;

export const GridItem = styled.div<{
  height?: number;
  width?: number;
}>`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `};
  margin: 1rem 0 1rem 1rem;
  overflow: hidden;
`;

export const GridItemImage = styled.img`
  height: 110px;
  width: 110px;
  object-fit: contain;
  border: 1px solid #e7e7e7;
  border-radius: 50%;
`;

export const DetailsContainer = styled.div`
  padding: 0.5rem 0 0 1rem;
`;
