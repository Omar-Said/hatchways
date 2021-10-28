import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, #root  {
  height: 100%;
  width: 100%;
  font-family: Raleway;
  margin: 0;
  background-color: #efefef;
}

input {
  font-family: Raleway;
  padding-left: 1rem;
}
*,
*::before,
*::after {
  box-sizing: border-box; }
`;
