import React from "react";
import { Menu } from "./styles/destination-options/destination-options.styled";

export default function DestinationMenu ({planet}){
    return (
            <>
                <Menu>{planet}</Menu>
            </>
    )
}