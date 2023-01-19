import React, {useContext} from "react";
import { Button } from "./styles/button-explorer/button-explorer.styled";
import styled from "styled-components";
import { h1, bodyText, gray, h5 } from "./styles/Global";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import { PrimaryContext } from "../context";

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

export default function Home() {

  const { primaryHandler } = useContext(PrimaryContext);

  return (
    <>
      <HomeCard>
        <h5>so, you want to travel to</h5>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </HomeCard>
      <Button to="destination" id="1" onClick={primaryHandler}>
        explore
      </Button> 
    </>
  );
}

