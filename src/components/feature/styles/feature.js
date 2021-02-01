import styled from "styled-components";

export const Container = styled.div `
    padding-inline-start: 12px;
    padding-inline-end: 12px;

    @media(min-width: 900px) {
        margin: auto;
        max-width: 1100px;
    }

`;

export const Main = styled.div `
    @media(min-width: 900px) {
    display: grid;
    grid-template-columns: 30% 70%;
    }
`;

export const MainDivision = styled.div `
    
`;