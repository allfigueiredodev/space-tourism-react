import React, {useContext} from "react";
import { Menu } from "./styles/navbar-options/navbar-options.styled";
import { PrimaryContext } from "../context";

export default function NavbarMenu ({number, name, id}) {
    const { primaryHandler } = useContext(PrimaryContext);
    return (
        <Menu id={id} onClick={primaryHandler}><strong>{number}</strong>{name}</Menu>
    )
}