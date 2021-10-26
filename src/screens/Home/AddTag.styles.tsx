import styled, { css } from "styled-components";

export const Input = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  width: 60%;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  border-bottom: 2px solid #e7e7e7;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
  &::placeholder {
    color: #c2c2c2;
  }
`;
