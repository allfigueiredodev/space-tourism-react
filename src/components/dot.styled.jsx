import React from "react";
import styled from "styled-components";
import { white } from "./styles/Global";

export const DotStyle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff3a;
  &:hover {
    transform: scale(1.2)
  }
  &[data-active="true"]{
    background-color: ${white};
  } 
  @media screen and (min-width: 1440px) {
    width: 15px;
    height: 15px;
  }
`;

export default function Dot(props) {
  return (
      <DotStyle data-active={props['data-active']} id={props.id} onClick={props.onClick}>
          
      </DotStyle>
      
  )
} 