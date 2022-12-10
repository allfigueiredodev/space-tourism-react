import styled from "styled-components";
import { h3, h4, bodyText } from "../Global";

export const CrewCard = styled.article`
  display: flex;
  flex-direction: column;
  & .card__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    @media screen and (min-width: 768px) {
      max-width: 505px;
      position: absolute;
      bottom: -50px;    
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      gap: 4rem;
    }
    @media screen and (min-width: 1440px){
      flex-direction: row;
      max-width: 1137.5px;
      margin: 0 auto;
      bottom: -32;
    }
    & .img__container {
      border-bottom: 1px solid #979797;
      background-clip: padding-box;
      display: flex;
      justify-content: center;
      width: 85%;
      max-width: 568px;
      margin: 0 auto 2rem;
      @media screen and (min-width: 768px) {
        margin-top: 20px;
        border: none;
        order: 4;
      }
      & img {
        width: 177px;
        height: 222px;
        @media screen and (min-width: 768px) {
          width: 456.37px;
          height: 572px;
        }
        @media screen and (min-width: 1440px) {
          width: 568.07px;
          height: 712px;
        }
      }
    }
    & .crew__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 1440px) {
        align-items: flex-start;
      }
      
    }

    & .menu__wrapper {
      display: flex;
      justify-content: space-between;
      width: 23.5%;
      max-width: 88px;
      margin: 0 auto 20px;
      @media screen and (min-width: 768px){
        order: 3;
      }
      @media screen and (min-width: 1440px) {
        margin: 88px 0 20px 0px;
      }
    }
    & h4 {
      ${h4("#ffffff70")}
      margin-bottom: 0.6rem;
      @media screen and (min-width: 1440px) {
      margin-bottom: 15px;
      }
    }
    & h3 {
      ${h3()}
      margin-bottom: 0.6rem;
      @media screen and (min-width: 1440px) {
      margin-bottom: 27px;
      }
    }
    & p {
      ${bodyText()}
      margin-bottom: 2rem;
      @media screen and (min-width: 1440px) {
        text-align: left;
        padding-inline: 0;
        max-width: 444px;

      }
    }
  }
`;
