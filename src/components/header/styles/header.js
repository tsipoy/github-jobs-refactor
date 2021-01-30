import styled from "styled-components";

// Container, Form, Input, Button, Title

// export const Background  = styled.div `
//     background-image: url(/backgroundImg.png);
//     background-repeat: no-repeat;
//     padding-block-end: 41px;
//     padding-block-start: 42px;
//     padding-inline-end: 13px;
//     padding-inline-start: 13px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     border-radius: 8px;
// `;

export const Container  = styled.div `
    padding-block-end: 29px;     
`; 

export const Title  = styled.h1 `
    
`; 
export const Form  = styled.form `
    background-image: url(/backgroundImg.png);
    background-repeat: no-repeat;
    padding-block-end: 41px;
    padding-block-start: 42px;
    padding-inline-end: 13px;
    padding-inline-start: 13px;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: 900px) {
    form {
      margin: auto;
      max-width: 900px;
    }
  }
    
`; 
export const Input  = styled.input `
    padding: 10px;
    border-radius: 8px;
    border: none;
`; 
export const Button  = styled.button `
    background-color: #1e86ff;
    border-radius: 4px;
    color: white;
    line-height: 19px;
    padding-block-start: 14px;
    padding-block-end: 14px;
    padding-inline-end: 27px;
    padding-inline-start: 27px;
    border: none;   
`; 
