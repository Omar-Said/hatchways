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
  justifySelf?: boolean;
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
  ${(props) =>
    props.justifySelf &&
    css`
      margin-left: auto;
      color: #aaaaaa;
      font-size: 5rem;
      margin-right: 1rem;
      margin-top: 0;
      justify-self: start;
    `};
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

export const TestContainer = styled.div`
  margin-top: 1rem;
`;
