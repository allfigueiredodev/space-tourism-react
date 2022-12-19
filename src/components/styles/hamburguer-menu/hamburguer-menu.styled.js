import styled from "styled-components";

export const BurgerContainer = styled.div.attrs({className: "hamburger__wrapper"})`
  position: relative; 
  bottom: 4.2rem;
  left: 81%;
  display: inline-block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
