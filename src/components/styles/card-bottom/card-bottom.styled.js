import styled from "styled-components";
import { subheading1, subheading2 } from "../Global";

export const Bottom = styled.div `
        text-align: center;
        margin-bottom: 2rem;
        @media screen and (min-width: 1440px) {
         text-align: left; 
        }
    & span:first-child {
        display: block;
        padding-bottom: 0.75rem;
        ${subheading2()}
    }
    & span:nth-child(2) {
        display: block;
        ${subheading1()};        
    }
`