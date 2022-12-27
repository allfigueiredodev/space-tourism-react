import React from "react";
import { CrewCard } from "./styles/crew-card/crew-card.styled";
import Dot from "./dot";
import PageTittle from "./styles/page-tittle/page-tittle.styled";
import { crewAvatar } from "../assets/crew/crewAvatar"

export default function CardCrew() {

  const [crewIndex, setCrewIndex] = React.useState(0);
  const [info, setInfo] = React.useState({
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

  React.useEffect(()=> {crewHandler()}, [crewIndex]);

  return (
    <CrewCard>
      <PageTittle pageIndex="02" tittle="meet your crew"></PageTittle>
      <div className="card__wrapper">
        <div className="img__container">
          <img src={info.image} alt="" />
        </div>
        <div className="crew__wrapper">
          <div className="menu__wrapper">
            {info.ids.map(i => (<Dot key={i} id={i} onClick={(e)=> {setCrewIndex(e.target.id)}}></Dot>))}
          </div>
          <h4>{info.role}</h4>
          <h3>{info.name}</h3>
          <p>
            {info.bio}
          </p>
        </div>
      </div>
    </CrewCard>
  );
}