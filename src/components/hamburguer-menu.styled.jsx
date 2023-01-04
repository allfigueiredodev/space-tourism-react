import React, {useContext} from "react";
import { Divide as M } from "hamburger-react";
import { white } from "./styles/Global";
import { PrimaryContext } from "../context";
import styled from "styled-components";

export const BurgerContainer = styled.div.attrs({className: "hamburger__wrapper"})`
  position: relative; 
  bottom: 4.2rem;
  left: 81%;
  display: inline-block;
`;

export default function Hamburger() {

  const { setIsOpen } = useContext(PrimaryContext);

  return (
    <BurgerContainer>
      <M        
        color={white}
        size={24}
        label="Show menu"
        onToggle={(toggled) => {
          if (toggled) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      />
    </BurgerContainer>
  );
}