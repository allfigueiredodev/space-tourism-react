import React from "react";
import { Menu } from "./styles/destination-options/destination-options.styled";

export default function DestinationMenu ({planet, id , onClick}){
    return (
            <>
                <Menu id={id} onClick={onClick}>{planet}</Menu>
            </>
    )
}