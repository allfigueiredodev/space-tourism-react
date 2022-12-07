import React from "react";
import { Menu } from "./styles/navbar-options/navbar-options.styled";

export default function NavbarMenu ({number, name}) {
    return (
        <Menu><strong>{number}</strong>{name}</Menu>
    )
}