import styled from "styled-components";
import { h1, bodyText, gray, h5 } from "../Global";
import bgMobile from "../../../assets/home/background-home-mobile.jpg";
import bgTablet from "../../../assets/home/background-home-tablet.jpg";
import bgDesktop from "../../../assets/home/background-home-desktop.jpg";

export const HomeCard = styled.div.attrs({className: 'home'})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 81px;
  @media screen and (min-width: 768px) {
    margin-top: 106px;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 165px;
    top: 387px;
    align-items: flex-start;
    max-width: 450px;
  }
  & h5 {
    ${h5(gray)}
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
  & h1 {
    ${h1()}
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
  & p {
    ${bodyText()}
    margin-bottom: 2rem;
    margin-inline: auto;
    max-width: 465px;
    @media screen and (min-width: 1440px){
      padding-inline: 0;
      text-align: left;
      line-height: 32px;
    }
  }
`;
