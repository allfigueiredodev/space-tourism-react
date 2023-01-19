import React, {useEffect, useState} from "react";
import DestinationMenu from "./destination-options.styled";
import CardBottom from "./card-bottom.styled";
import {planets} from "../assets/destination/planets.js";
import PageTittle from "./styles/page-tittle/page-tittle.styled";
import styled from "styled-components";
import { h2, bodyText, myClamp, white } from "./styles/Global";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const DestinationCard = styled.article.attrs({className: 'destination'})`
  display: flex;
  flex-direction: column;
  & .destination__container {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1440px) {
      flex-direction: row;
      margin: 70px auto;
      gap: 161px;
      & .my-node-enter {
        transform: translateX(-200%);
      }
      & .my-node-enter-active,
        .my-node-enter-done {
        transform: translateX(0%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms
      }
      & .my-node-exit {
        transform: translateX(0%);
      }
      & .my-node-exit-active,
        .my-node-exit-done {
        transform: translateX(-200%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms;
      }
    }
    & img {
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
          & .destination-card-enter {
          transform: translateY(150%);
        }
        & .destination-card-enter-active,
          .destination-card-enter-done {
          transform: translateY(0%);
          transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms
        }
        & .destination-card-exit {
          transform: translateY(0%);
        }
        & .destination-card-exit-active,
          .destination-card-exit-done {
          transform: translateY(150%);
          transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms;
        }
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

export default function CardDestination() {

  const [destinationIndex, setDestinationIndex] = useState(
    () => JSON.parse(localStorage.getItem("destinationIndex")) || 0
  );
  const [info, setInfo] = useState({
    ids: [],
    allDestinations: [],
    planetImage: planets[0],
    title: ' ',
    description: ' ',
    distance: ' ',
    travel: ' '
   })
  
  async function destinationHandler() {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json();
    setInfo((prev) => ({ ...prev,
        ids: data['destinations'].map((dest, index) => index),
        allDestinations: data['destinations'].map(dest => dest.name),
        planetImage: planets[destinationIndex],  
        title: data['destinations'][destinationIndex]['name'],
        description: data['destinations'][destinationIndex]['description'],
        distance: data['destinations'][destinationIndex]['distance'],
        travel: data['destinations'][destinationIndex]['travel']
    }))
}

useEffect(() => {destinationHandler()}, [destinationIndex])

useEffect(() => {
  localStorage.setItem("destinationIndex", JSON.stringify(destinationIndex));
}, [destinationIndex]);

function activate (e) {
  const selected = e.target.id
  setIsActive(
    planets => {
      return planets.map((planet) => {
          if (selected == planet.id && planet.active === true) {
            return planet
          } else if (selected != planet.id && planet.active === true) {
            return {...planet, active: !planet.active}
          } else if (selected != planet.id && planet.active === false) {
            return planet
          } else if (selected == planet.id && planet.active === false) {
            return {...planet, active: !planet.active}
          }
      })      
  }
  )
  setDestinationIndex(selected)
}

const [isActive, setIsActive] = useState(
  () =>
    JSON.parse(localStorage.getItem("menuState")) || [
      { id: 0, active: true },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
    ]
);

useEffect(() => {
  localStorage.setItem("menuState", JSON.stringify(isActive));
}, [isActive]);

  return (
    <DestinationCard>
      <PageTittle pageIndex="01" tittle="pick your destination"></PageTittle>
      <div className="destination__container">
      <SwitchTransition >
        <CSSTransition key={destinationIndex} timeout={500} classNames="my-node">
          <img src={info.planetImage} alt={`${info.title} planet image`} />
        </CSSTransition>
      </SwitchTransition>
        <div className="card__wrapper">
          <div className="menu__wrapper">
            {info.ids.map((el) => (
              <DestinationMenu
                key={el}
                id={el}
                data-active={isActive[el]['active']} 
                onClick={activate}
                planet={info.allDestinations[el]}
              ></DestinationMenu>
            ))}
          </div>
          <SwitchTransition >
            <CSSTransition key={destinationIndex} timeout={500} classNames="destination-card">
          <div>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <hr />
            <div className="bottom__wrapper">
              <CardBottom
                subheading2="Avg. distance"
                subheading1={info.distance}
              ></CardBottom>
              <CardBottom
                subheading2="Est. travel time"
                subheading1={info.travel}
              ></CardBottom>
            </div>
          </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </DestinationCard>
  );
}