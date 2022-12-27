import React, {useState, useEffect} from "react";
// IF IMAGES DOESN`T WORK WITH REQUIRE(), INSERT ".default" AFTER REQUIRE() OR USE THE PUBLIC FOLDER INSTEAD
// import images from "../techImages"
import { Slider } from "../components/styles/slider/slider.styled";
import { TechnologyCard } from "./styles/technology-card.js/technology-card.styled";
import PageTittle from "./styles/page-tittle/page-tittle.styled";

export default function CardTechnology() {
  const [technologyIndex, setTechnologyIndex] = useState('0');
  const [info, setInfo] = React.useState({
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

  return (
    <>
      <TechnologyCard>
        <PageTittle pageIndex="03" tittle="space launch 101"></PageTittle>
        <div className="technology__wrapper">
          <picture>
            <source media="(min-width: 1440px)" srcSet={info.imagePortrait} />
            <img src={info.imageLandscape} alt="" />
          </picture>

          <div className="slider__wrapper">
            {info.ids.map(i => (<Slider key={i} id={i} onClick={(e)=> {setTechnologyIndex(e.target.id)}}>{i + 1}</Slider>))}
          </div>
          <div className="technology__card">
            <h4>the terminology...</h4>
            <h3>{info.title}</h3>
            <p>
              {info.description}
            </p>
          </div>
        </div>
      </TechnologyCard>
    </>
  );
}