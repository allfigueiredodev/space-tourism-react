import React, {forwardRef} from "react";
import styled from "styled-components";
import {navText, white, gray} from "./styles/Global";

export const Menu = styled.a `
    ${navText()};
    color: ${gray};
    padding-bottom: 8px;  
    text-decoration: none;
    @media screen and (min-width: 768px){
        padding-bottom: 12px;
        &[data-active="true"]{
            border-bottom: 2px solid ${white};
        }
        &:hover {
            border-bottom: 2px solid #ffffff2a;
            background-clip: padding-box;
        }        
    }
`

function DestinationMenu (props, ref) {
    return (
      <Menu data-active={props['data-active']} ref={ref} className={props.className} id={props.id} onClick={props.onClick}>{props.planet}</Menu>
    );
}

export default forwardRef(DestinationMenu);  