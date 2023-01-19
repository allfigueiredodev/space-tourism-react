import React, {useState} from "react";
import Dot from "./dot.styled";
import PageTittle from "./styles/page-tittle/page-tittle.styled";
import { crewAvatar } from "../assets/crew/crewAvatar"
import styled from "styled-components";
import { h3, h4, bodyText } from "./styles/Global";
import { useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const CrewCard = styled.article.attrs({className: 'crew'})`
  display: flex;
  flex-direction: column;
  & .card__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    @media screen and (min-width: 768px) {
      max-width: 505px;
      position: absolute;
      bottom: -50px;    
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      gap: 4rem;
    }
    @media screen and (min-width: 1440px){
      flex-direction: row;
      max-width: 1137.5px;
      margin: 0 auto;
      bottom: -32;
      & .my-node-enter {
      transform: translateY(100%);
      }
      & .my-node-enter-active,
        .my-node-enter-done {
        transform: translateY(0%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms
      }
      & .my-node-exit {
        transform: translateY(0%);
      }
      & .my-node-exit-active,
        .my-node-exit-done {
        transform: translateY(100%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms;
      }
    }
    & .img__container {
      border-bottom: 1px solid #979797;
      background-clip: padding-box;
      display: flex;
      justify-content: center;
      width: 85%;
      max-width: 568px;
      margin: 0 auto 2rem;
      
      @media screen and (min-width: 768px) {
        margin-top: 20px;
        border: none;
        order: 4;
      }
      & img {
        width: 177px;
        height: 222px;
        @media screen and (min-width: 768px) {
          width: 456.37px;
          height: 572px;
        }
        @media screen and (min-width: 1440px) {
          width: 568.07px;
          height: 712px;
          
        }
      }
    }
    & .crew__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 1440px) {
        align-items: flex-start;
      & .crew-card-enter {
        transform: translateX(-200%);
      }
      & .crew-card-enter-active,
        .crew-card-enter-done {
        transform: translateX(0%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms
      }
      & .crew-card-exit {
        transform: translateX(0%);
      }
      & .crew-card-exit-active,
        .crew-card-exit-done {
        transform: translateX(-200%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms;
      }
      }
      
    }

    & .menu__wrapper {
      display: flex;
      justify-content: space-between;
      width: 23.5%;
      max-width: 88px;
      margin: 0 auto 20px;
      @media screen and (min-width: 768px){
        order: 3;
      }
      @media screen and (min-width: 1440px) {
      margin: 88px 0 20px 0px;
      & .dot-appear, .dot-enter  {
      opacity: 0;
      }
      & .dot-appear-active, .dot-appear-done {
        opacity: 1;
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
      }
      & .dot-enter-active, .dot-enter-done {
        opacity: 1;
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
      }
      & .dot-exit {
        opacity: 1;
      }
      & .dot-exit-active, .dot-exit-done {
        opacity: 0;
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
      }
      }
    }
    & h4 {
      ${h4("#ffffff70")}
      margin-bottom: 0.6rem;
      @media screen and (min-width: 1440px) {
      margin-bottom: 15px;
      }
    }
    & h3 {
      ${h3()}
      margin-bottom: 0.6rem;
      @media screen and (min-width: 1440px) {
      margin-bottom: 27px;
      }
    }
    & p {
      ${bodyText()}
      margin-bottom: 2rem;
      @media screen and (min-width: 1440px) {
        text-align: left;
        padding-inline: 0;
        max-width: 444px;

      }
    }
  }
`;

export default function CardCrew() {

  const [crewIndex, setCrewIndex] = useState(
  () => JSON.parse(localStorage.getItem("crewIndex")) || 0
  );
  
  const [info, setInfo] = useState({
    ids: [],
    name: ' ',
    role: ' ',
    bio: ' ',
    image: crewAvatar[0]
  })  

  async function crewHandler () {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json();
    setInfo(prev => ({
      ...prev,
      ids: data['crew'].map((crew, index) => index),
      name: data['crew'][crewIndex]['name'],
      role: data['crew'][crewIndex]['role'],
      bio: data['crew'][crewIndex]['bio'],
      image: [crewAvatar[crewIndex]]
    }))

  }

  useEffect(()=> {crewHandler()}, [crewIndex]);
  useEffect(() => {
    localStorage.setItem("crewIndex", JSON.stringify(crewIndex));
  }, [crewIndex]);

  const [isActive, setIsActive] = useState( 
    () =>
      JSON.parse(localStorage.getItem("crewState")) || [
        {id: 0, active: true},
        {id: 1, active: false},
        {id: 2, active: false},
        {id: 3, active: false},
      ]
  );

  function activate (e) {
    const selected = e.target.id;
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
        }      
    )})
    setCrewIndex(e.target.id)
  }

  useEffect(() => {
    localStorage.setItem("crewState", JSON.stringify(isActive));
  }, [isActive]);

  return (
    <CrewCard>
      <PageTittle pageIndex="02" tittle="meet your crew"></PageTittle>
      <div className="card__wrapper">
        <div className="img__container">
          <SwitchTransition >
            <CSSTransition key={crewIndex} timeout={500} classNames="my-node">
              <img src={info.image} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="crew__wrapper">
          <div className="menu__wrapper">
            {info.ids.map((i) => (
              <SwitchTransition mode="out-in">
                <CSSTransition key={isActive[i]} timeout={1000} classNames="dot" appear={true}>
                  <Dot
                    key={i}
                    id={i}
                    data-active={isActive[i]['active']}
                    onClick={activate}
                  ></Dot>
                </CSSTransition>
              </SwitchTransition> 
            ))}
          </div>

          <SwitchTransition >
            <CSSTransition key={crewIndex} timeout={500} classNames="crew-card">
              <div>
                <h4>{info.role}</h4>
                <h3>{info.name}</h3>
                <p>{info.bio}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </CrewCard>
  );
}