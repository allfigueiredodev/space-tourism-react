import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { universeBlack, h1, bodyText, h3, h2, h4, white } from "./styles/Global";

export const Error = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  background-color: ${universeBlack};
  & h1 {
    ${h1()}
  }
  & p {
    ${h4(white)}
  }
  & p > i {
    ${h3()}
  } 
`

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Error id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Error>
  );
}