import React from 'react';
import { Container, Main, MainDivision } from "./styles/feature";

export default function Feature({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Feature.Main = function FeatureMain( { children, ...restProps }) {
    return <Main {...restProps}>{children}</Main>
}


Feature.MainDivision = function FeatureMainDivision( { children, ...restProps }) {
    return <MainDivision {...restProps}>{children}</MainDivision>
}
