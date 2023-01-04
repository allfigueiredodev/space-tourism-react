import React, {useContext} from "react";
import styled from "styled-components";
import {navText, white} from "./styles/Global";
import { PrimaryContext } from "../context";

export const Menu = styled.a `
    ${navText(white)};
    padding-left: 2rem;
    padding-top: 39px;
    padding-bottom: 40px;
    text-align: center;
    font-size: 1rem;    
    display: inline;
    text-transform: uppercase;
    color: ${white};
    & strong {
        color: ${white};
        text-transform: uppercase;
        font-weight: 700;
        padding-right: 11px;
    }
    @media screen and (min-width: 768px){
        &:active {
            border-bottom: 2px solid ${white};
        }
        &:hover {
            border-bottom: 2px solid #ffffff2a;
            background-clip: padding-box;
        }        
    }
    @media screen and (min-width: 1440px){
        display: inline;
    }
`
export default function NavbarMenu (props) {

    React.useEffect(() => {getSize()}, [])

    const [size, setSize] = React.useState(size);
    
    const {innerWidth} = window;

    function getSize() {
      if (innerWidth < 768 || innerWidth >= 1440) {
          setSize(true)
      } else {
          setSize(false)
      }
    }
  
    window.addEventListener('resize', getSize);

    const { primaryHandler } = useContext(PrimaryContext);
    
    return (
      <Menu id={props.id} onClick={primaryHandler}>
        {size && <strong>{props.number}</strong>}
        {props.name}
      </Menu>
    );
}  