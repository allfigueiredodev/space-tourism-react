import styled from "styled-components";
import {navText, white, gray} from "../Global";

export const Menu = styled.span `
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