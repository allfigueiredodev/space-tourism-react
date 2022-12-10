import styled from "styled-components";
import { white } from "../Global";

export const DotStyle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff3a;
  &:active{
    background-color: ${white};
  } 
  @media screen and (min-width: 1440px) {
    width: 15px;
    height: 15px;
  }
`;
