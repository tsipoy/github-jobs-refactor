import styled from "styled-components";

// Container, Form, Input, Title

export const Container = styled.div`
    padding-block-end: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #b9bdcf;
`;

export const Input = styled.input`

`;

export const InputText = styled.input`
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 16px;
`;

export const Label = styled.label`
  padding-block-end: 32px;
`;
