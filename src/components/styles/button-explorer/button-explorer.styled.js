import styled from "styled-components";
import { white, universeBlack, myClamp } from "../Global";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  margin: 0 auto;
  background-color: ${white};
  text-decoration: none;
  border-radius: 50%;
  color: ${universeBlack};
  width: clamp(9.375rem, 6.6461rem + 11.6432vw, 17.125rem);
  height: clamp(9.375rem, 6.6461rem + 11.6432vw, 17.125rem);
  display: block;
  cursor: pointer;
  text-align: center;
  line-height: clamp(9.375rem, 6.6461rem + 11.6432vw, 17.125rem);
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  ${myClamp('font-size', 375, 768, 20, 32)}
  text-transform: uppercase;
  @media screen and (min-width: 1440px){
      position: absolute;
      top: 495px;
      right: 165px;
    &:hover {
      box-shadow: 0 0 0 88px #FFFFFF1a;
    }    
  }
`;
