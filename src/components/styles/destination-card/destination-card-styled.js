import styled from "styled-components";
import { h2, bodyText, myClamp } from "../Global";
import { Menu } from "../navbar-options/navbar-options.styled";

export const DestinationCard = styled.article`
  display: flex;
  flex-direction: column;
  & .destination__container {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1440px) {
      flex-direction: row;
      margin: 70px auto;
      gap: 161px;
    }
    & img {
      /* ${myClamp('width', 375, 1440, 170, 445)} */
      ${myClamp('width', 375, 1024, 170, 445)}
      align-self: center;
      margin-bottom: 26px;
      @media screen and (min-width: 768px) {
        margin-bottom: 53px;
      }
      @media screen and (min-width: 1440px) {
        margin-bottom: 0;
      }

    }
    & .card__wrapper {
        max-width: 573px;
        display: flex;
        flex-direction: column;
        align-self: center;
        @media screen and (min-width: 1440px) {
          align-items: flex-start;
          max-width: 445px;  
        }
      & .menu__wrapper {
        display: flex;
        justify-content: space-between;
        width: 63.3%;
        margin: 0 auto 20px;
        @media screen and (min-width: 768px){
          max-width: 285.5px;
          margin: 0 auto 32px;
        }
        @media screen and (min-width: 1440px) {
         margin-inline: 0; 
        }
      }
      & h2 {
        ${h2()}
        margin-bottom: 0.6rem;
      }
      & p {
        ${bodyText()}
        margin-bottom: 2rem;
        @media screen and (min-width: 768px){
          align-self: center;
          margin-bottom: 49px;
        }
        @media screen and (min-width: 1440px) {
          padding-inline: 0;  
          text-align: left;
        }
      }
      & hr {
        width: 86.7%;
        border-color: #383b4b;
        margin-bottom: 2rem;
        @media screen and (min-width: 768px){
          max-width: 573px;
        }
        @media screen and (min-width: 1440px) {
         margin-inline: 0; 
        }
      }

      & .bottom__wrapper{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 60%;
        justify-content: space-evenly;
        @media screen and (min-width: 768px) {
          flex-direction: row;
          max-width: 573px;
        }
        @media screen and (min-width: 1440px) {
          margin-inline: 0;
          gap: 4rem;
          width: 75%;
        }
      }
    }  
  }
`;
