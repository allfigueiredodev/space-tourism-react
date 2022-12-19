import styled from "styled-components";
import React from "react";
import {pageTittle } from "../Global";

const Tittle = styled.div `
${pageTittle()};
padding-top: 39px;
padding-bottom: 40px;
text-align: center;
@media screen and (min-width: 768px) {
    text-align: left;
    margin-left: 2.4375rem;
}    
@media screen and (min-width: 1440px) {
    margin-top: 4.75rem;
    margin-left: 10.4063rem;
}

& strong {
    color: #ffffff4f;
    font-weight: 700;
    padding-right: 11px;
}

`

export default function PageTittle ({tittle, pageIndex}) {
    return (
        <Tittle>
            <a><strong>{pageIndex}</strong>{tittle}</a>
        </Tittle>
    )
}