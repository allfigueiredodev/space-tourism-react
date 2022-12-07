import styled from "styled-components";
import { white, universeBlack } from "../Global";

export const Slider = styled.a `
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: transparent;
    border: 1px solid #ffffff2a;
    border-radius: 50%;
    color: ${white};
    line-height: 40px;
    &:hover {
        border-color: ${white};
    }
    &:active {
        background-color: ${white};
        color: ${universeBlack};
    }
    @media screen and (min-width: 768px){  
    width: 60px;
    height: 60px;
    line-height: 60px;
    }
    @media screen and (min-width: 1440px){
    width: 80px;
    height: 80px;
    line-height: 80px;
    }
`