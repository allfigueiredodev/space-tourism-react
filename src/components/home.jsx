import React from "react";
import { HomeCard } from "./styles/home-card/home-card.styled";
import { Button } from "./styles/button-explorer/button-explorer.styled";

export default function Home() {
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
      <Button>
        explore
      </Button> 
    </>
  );
}
