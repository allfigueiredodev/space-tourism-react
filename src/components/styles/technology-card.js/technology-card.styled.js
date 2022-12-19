import styled from "styled-components";
import { h3, h4, bodyText, gray } from "../Global";

export const TechnologyCard = styled.article.attrs({className: 'technology'})`
  display: flex;
  flex-direction: column;
  & .technology__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 1440px) {
      padding-left: 165px;
      flex-direction: row;
      width: 90%;
      justify-content: space-between;
    }
    & picture {
      @media screen and (min-width: 1440px) {
        order: 3;
      }
      & img {
        width: 100vw;
        background-size: cover;
        margin-bottom: 34px;
        @media screen and (min-width: 1440px) {
          width: auto;
        }
      }
    }
    & .slider__wrapper {
      display: flex;
      justify-content: space-between;
      width: 152px;
      margin: 0 auto 20px;
      @media screen and (min-width: 768px) {
        width: 210px;
      }
      @media screen and (min-width: 1440px) {
        flex-direction: column;
        width: 80px;
        height: 296px;
        margin: 0;
      }
    }
    & .technology__card {
      @media screen and (min-width: 768px) {
        max-width: 59.7%;
        align-self: center;
      }
      @media screen and (min-width: 1440px) {
        max-width: 470px;
        margin-right: 6rem;
      }
      & h4 {
        ${h4(gray)}
        margin-bottom: 0.6rem;
        @media screen and (min-width: 768px) {
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 1440px) {
          text-align: left;
          font-size: 16px;
        }
      }
      & h3 {
        ${h3()}
        margin-bottom: 0.6rem;
        @media screen and (min-width: 768px) {
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 1440px) {
          text-align: left;
        }
      }
      & p {
        ${bodyText()}
        margin-bottom: 2rem;
        @media screen and (min-width: 768px) {
          padding-inline: 0.6rem;
        }
        @media screen and (min-width: 1440px) {
          text-align: left;
          line-height: 2rem;
          padding-inline: 0;
          margin-bottom: 0;
        }
      }
    }
  }
`;
