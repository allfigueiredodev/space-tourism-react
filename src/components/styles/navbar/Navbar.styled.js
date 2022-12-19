import styled from "styled-components";
import { white } from "../Global";

export const Header = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 0 1.5rem 1.5rem;
  display: flex;
  margin: 0 auto;  
  @media screen and (min-width: 768px) {
    padding: 0 0 0 2.4375rem;
  }
  @media screen and (min-width: 1440px) {
    padding: 2.5rem 0 0 3.4375rem;
  }
  & img {
    width: 40px;
    height: 40px;
    align-self: center;
    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
      padding-block: 1.5rem;
    }
  }

  & .line-1 {
    height: 1px;
    background: #979797;
    align-self: center;
    max-width: 473px;
    position: relative;
    left: 3rem;
    z-index: 1;
    @media screen and (max-width: 1439px) {
      display: none;
    }
  }

  & .nav__menu {
      width: 67.8%;
      height: 100vh;
      background-color: #97979714;
      backdrop-filter: blur(30px);
      display: none;
      justify-content: flex-start;
      padding-top: 6rem;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 0;
      @media screen and (min-width: 767px) {
        width: 61.8%;
        height: 100%;
        max-height: 96px;
        padding-top: 0;
        display: flex;
      }
      & ul {
      justify-content: space-evenly;
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      height: 25.8%;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        height: 100%;
        align-items: center;
      }
      @media screen and (min-width: 1440px) {
        max-width: 830px;
      }
      & li {
        list-style: none;
        & span {
          text-transform: uppercase;
          color: ${white};
          & strong {
            color: ${white};
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
