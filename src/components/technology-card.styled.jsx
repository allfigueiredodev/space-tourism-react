import React, {useState, useEffect, useRef} from "react";
// IF IMAGES DOESN`T WORK WITH REQUIRE(), INSERT ".default" AFTER REQUIRE() OR USE THE PUBLIC FOLDER INSTEAD
// import images from "../techImages"
import { Slider } from "./styles/slider/slider.styled";
import PageTittle from "./styles/page-tittle/page-tittle.styled";
import styled from "styled-components";
import { h3, h4, bodyText, gray } from "./styles/Global";
import { CSSTransition, SwitchTransition} from "react-transition-group";

export const TechnologyCard = styled.article.attrs({className: 'technology'})`
  display: flex;
  flex-direction: column;
  & .slider-appear, .slider-enter  {
  opacity: 0;
  }
  & .slider-appear-active, .slider-appear-done {
    opacity: 1;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
  }
  & .slider-enter-active, .slider-enter-done {
    opacity: 1;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
  }
  & .slider-exit {
    opacity: 1;
  }
  & .slider-exit-active, .slider-exit-done {
    opacity: 0;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
  }

  & .technology__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 1440px) {
      padding-left: 165px;
      flex-direction: row;
      width: 90%;
      justify-content: space-between;
      & .my-node-enter {
        transform: translateY(188%);
      }
      & .my-node-enter-active,
        .my-node-enter-done {
        transform: translateY(0%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 350ms
      }
      & .my-node-exit {
        transform: translateX(0%);
      }
      & .my-node-exit-active,
        .my-node-exit-done {
        transform: translateX(278%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 600ms;
      }
    }
    & picture {
      @media screen and (min-width: 1440px) {
        order: 3;
      & .my-node-enter {
        transform: translateY(132%);
      }
      & .my-node-enter-active,
        .my-node-enter-done {
        transform: translateY(0%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 350ms
      }
      & .my-node-exit {
        transform: translateX(0%);
      }
      & .my-node-exit-active,
        .my-node-exit-done {
        transform: translateX(100%);
        transition: all cubic-bezier(0.22, 1, 0.36, 1) 350ms;
      }
      }
      & img {
        width: 100vw;
        background-size: cover;
        margin-bottom: 34px;
        @media screen and (min-width: 1440px) {
          width: auto;
        }
      }
    }
    & .slider__wrapper {
      display: flex;
      justify-content: space-between;
      width: 152px;
      margin: 0 auto 20px;
      @media screen and (min-width: 768px) {
        width: 210px;
      }
      @media screen and (min-width: 1440px) {
        flex-direction: column;
        width: 80px;
        height: 296px;
        margin: 0;
      }
  }
    & .technology__card {
        @media screen and (min-width: 768px) {
          max-width: 59.7%;
          align-self: center;
        }
        @media screen and (min-width: 1440px) {
        max-width: 470px;
        margin-right: 6rem;
      }
      & h4 {
        ${h4(gray)}
        margin-bottom: 0.6rem;
        @media screen and (min-width: 768px) {
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 1440px) {
          text-align: left;
          font-size: 16px;
        }
      }
      & h3 {
        ${h3()}
        margin-bottom: 0.6rem;
        @media screen and (min-width: 768px) {
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 1440px) {
          text-align: left;
        }
      }
      & p {
        ${bodyText()}
        margin-bottom: 2rem;
        @media screen and (min-width: 768px) {
          padding-inline: 0.6rem;
        }
        @media screen and (min-width: 1440px) {
          text-align: left;
          line-height: 2rem;
          padding-inline: 0;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default function CardTechnology() {

  const [technologyIndex, setTechnologyIndex] = useState(
    () => JSON.parse(localStorage.getItem("techIndex")) || 0
  );

  const [info, setInfo] = useState({
    ids: [],
    title: ' ',
    description: ' ',
    imageLandscape: ' ',
    imagePortrait: ' '
  })

  async function techHandler () {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json()
    setInfo(prev => ({
      ...prev,
      ids: data['technology'].map((tech, index) => index) ,
      title: data['technology'][technologyIndex]['name'],
      description: data['technology'][technologyIndex]['description'],
      imageLandscape: data['technology'][technologyIndex]['images']['landscape'],
      imagePortrait: data['technology'][technologyIndex]['images']['portrait']
    }))
  }

  useEffect(()=> {techHandler()}, [technologyIndex])
  useEffect(() => {
    localStorage.setItem("techIndex", JSON.stringify(technologyIndex));
  }, [technologyIndex]);

  const [isActive, setIsActive] = useState(() => 
    JSON.parse(localStorage.getItem("techState")) || [
      { id: 0, active: true },
      { id: 1, active: false },
      { id: 2, active: false },
    ]
  );

  function activate (e) {
    const selected = e.target.id
    setIsActive(planets => {
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
    setTechnologyIndex(e.target.id);
  }

  useEffect(() => {
    localStorage.setItem("techState", JSON.stringify(isActive));
  }, [isActive]);

  return (
    <>
      <TechnologyCard>
        <PageTittle pageIndex="03" tittle="space launch 101"></PageTittle>
        <div className="technology__wrapper">
            <picture>
              <source media="(min-width: 1440px)" srcSet={info.imagePortrait} />
        <SwitchTransition mode="out-in">
          <CSSTransition  key={technologyIndex} timeout={350} classNames="my-node">
              <img src={info.imageLandscape} alt="" />
          </CSSTransition>
        </SwitchTransition>  
            </picture>
       
            <div className="slider__wrapper">
              {info.ids.map((i) => (
          <SwitchTransition mode="out-in">
          <CSSTransition key={isActive[i]} timeout={1000} classNames="slider" appear={true}>
                <Slider
                  key={i}
                  id={i}
                  data-active={isActive[i]['active']}
                  onClick={activate}
                >
                  {i + 1}
                </Slider>
          </CSSTransition>
          </SwitchTransition>  
              ))}
            </div>

          <SwitchTransition mode="out-in">
              <CSSTransition key={technologyIndex} timeout={350} classNames="my-node">
                <div className="technology__card">
                  <h4>the terminology...</h4>
                  <h3>{info.title}</h3>
                  <p>{info.description}</p>
                </div>
              </CSSTransition>
          </SwitchTransition>  
        </div>
      </TechnologyCard>
    </>
  );
}