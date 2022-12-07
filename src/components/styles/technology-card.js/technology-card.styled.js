import styled from "styled-components";
import { h3, h4, bodyText, gray } from "../Global";

export const TechnologyCard = styled.article`
  display: flex;
  flex-direction: column;
    & img {
    width: 100vw;
    background-size: cover;
    margin-bottom: 34px;
    }
  & .slider__wrapper {
    display: flex;
    justify-content: space-between;
    width: 152px;
    margin: 0 auto 20px;
    @media screen and (min-width: 768px) {
        width: 210px;
    }
    @media screen and (min-width: 1440px){
        flex-direction: column;
        width: 80px;
        height: 304px; 
    }
  }
  & h4 {
    ${h4(gray)}
    margin-bottom: 0.6rem;
  }
  & h3 {
    ${h3()}
    margin-bottom: 0.6rem;
  }
  & p {
    ${bodyText()}
    margin-bottom: 2rem;
  }
`;
