import styled from "styled-components";

// Container, Title, Image, Link, Text

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  box-shadow: 0px 6px 22px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding-block-end: 23px;
  padding-block-start: 23px;
  margin-block-end: 50px;
  padding: 16px;
  word-wrap: break-word;

  @media (min-width: 900px) {
    padding-block-end: 0;
    margin-inline-start: 23px;
  }
`;

export const AllJobsWrapper = styled.div`
  padding-inline-start: 16px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const CompanyName = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Link = styled.div``;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;    
`;


export const Text = styled.p`
  padding-inline-end: 16px;
  color: #b9bdcf;
`;

export const Type = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  border: 1px solid #334680;
  box-sizing: border-box;
  border-radius: 4px;
  max-width: fit-content;
  padding-block-start: 6px;
  padding-block-end: 6px;
  padding-inline-end: 8px;
  padding-inline-start: 8px;
  margin-block-start: 20px;
`;


