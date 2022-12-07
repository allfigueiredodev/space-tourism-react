import styled from "styled-components";
import {navText, white} from "../Global";

export const Menu = styled.a `
    ${navText(white)};
    padding-top: 39px;
    padding-bottom: 40px;
    text-align: center;    
    
    & strong {
        color: #ffffff4f;
        font-weight: 700;
        padding-right: 11px;
        display: none;
        @media screen and (min-width: 1440px){
            display: inline;
        }
    }
    @media screen and (min-width: 768px){
        &:active {
            border-bottom: 2px solid ${white};
        }
        &:hover {
            border-bottom: 2px solid #ffffff2a;
            background-clip: padding-box;
        }        
    }
`