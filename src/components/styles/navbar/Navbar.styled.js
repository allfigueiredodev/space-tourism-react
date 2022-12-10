import styled from "styled-components";
import { white } from "../Global";

export const Header = styled.div`
  justify-content: space-between;
  padding: 1.5rem;
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

  & div {
    justify-content: space-evenly;
    width: 61.8%;
    height: auto;
    display: flex;
    background-color: #9797973f;
    backdrop-filter: blur(5px);
    @media screen and (max-width: 767px) {
      display: none;
    }
    @media screen and (min-width: 1440px) {
      max-width: 830px;
    }
    & ul {
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
