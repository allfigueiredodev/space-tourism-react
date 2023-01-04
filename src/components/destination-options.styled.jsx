import React from "react";
import styled from "styled-components";
import {navText, white, gray} from "./styles/Global";

export const Menu = styled.a `
    ${navText()};
    color: ${gray};
    padding-bottom: 8px;  
    @media screen and (min-width: 768px){
        padding-bottom: 12px;
        &:active {
            border-bottom: 2px solid ${white};
        }
        &:hover {
            border-bottom: 2px solid #ffffff2a;
            background-clip: padding-box;
        }        
    }
`

export default function DestinationMenu({ planet, id, onClick }) {
    return (
      <Menu id={id} onClick={onClick}>
        {planet}
      </Menu>
    );
  }