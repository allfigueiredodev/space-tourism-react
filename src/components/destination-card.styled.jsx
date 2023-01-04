import React from "react";
import DestinationMenu from "./destination-options.styled";
import CardBottom from "./card-bottom.styled";
import {planets} from "../assets/destination/planets.js";
import PageTittle from "./styles/page-tittle/page-tittle.styled";
import styled from "styled-components";
import { h2, bodyText, myClamp } from "./styles/Global";

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

  const [destinationIndex, setDestinationIndex] = React.useState(
    () => JSON.parse(localStorage.getItem("destinationIndex")) || 0
  );
  const [info, setInfo] = React.useState({
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

React.useEffect(() => {destinationHandler()}, [destinationIndex])
React.useEffect(() => {
  localStorage.setItem("destinationIndex", JSON.stringify(destinationIndex));
}, [destinationIndex]);

  return (
    <DestinationCard>
      <PageTittle pageIndex="01" tittle="pick your destination"></PageTittle>
      <div className="destination__container">
        <img src={info.planetImage} alt={`${info.title} planet image`} />
        <div className="card__wrapper">
          <div className="menu__wrapper">
            {info.ids.map((el) => (
              <DestinationMenu
                key={el}
                id={el}
                onClick={(e)=> {setDestinationIndex(e.target.id)}}
                planet={info.allDestinations[el]}
              ></DestinationMenu>
            ))}
          </div>
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
      </div>
    </DestinationCard>
  );
}