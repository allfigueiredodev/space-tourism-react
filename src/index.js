import React, {createRef} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PrimaryProvider } from "./context";
import {
  createBrowserRouter,
  RouterProvider, 
  useLocation
} from "react-router-dom";
import ErrorPage from "./components/error-page.styled";
import Home from "./components/home-card.styled"
import CardCrew from "./components/crew-card.styled";
import CardDestination from "./components/destination-card.styled"
import CardTechnology from "./components/technology-card.styled";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    nodeRef: createRef(),
    children: [
      { index: true, element: <Home />, nodeRef: createRef()},
      {
        path: "destination",
        element: <CardDestination />,
        nodeRef: createRef()
      },
      {
        path: "crew",
        element: <CardCrew />,
        nodeRef: createRef()
      },
      {
        path: "technology",
        element: <CardTechnology />,
        nodeRef: createRef()
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimaryProvider>
          <RouterProvider router={router} />
    </PrimaryProvider>
  </React.StrictMode>
);
