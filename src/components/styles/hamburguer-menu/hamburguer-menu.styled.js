import styled from "styled-components";
import { white } from "../Global";

export const Lines = styled.div`
    position: relative;
    bottom: 3.4rem;
    left: 87%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 24px;
    height: 21px;
    & div {
      background-color: ${white};
      width: 24px;
      height: 3px;
      @media screen and (min-width: 768px){
        display: none;
      }
    }
  `;
