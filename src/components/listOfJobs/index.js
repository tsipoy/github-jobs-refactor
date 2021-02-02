import React from "react";

import {
  Container,
  Title,
  ImageContainer,
  Image,
  Link,
  Text,
  AllJobsWrapper,
  Type,
  CompanyName,
  TextWrapper,
  CompanyAbout
} from "./styles/listOfJobs";

export default function ListOfJobs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ListOfJobs.Title = function ListOfJobsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ListOfJobs.Image = function ListOfJobsImage({ src, children, ...restProps }) {
  return <Image {...restProps} src={src} />;
};

ListOfJobs.CompanyAbout = function ListOfJobsCompanyAbout({ children, ...restProps }) {
  return <CompanyAbout {...restProps}>{children}</CompanyAbout>;
};

ListOfJobs.ImageContainer = function ListOfJobsImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

ListOfJobs.Link = function ListOfJobsLink({ href, children, ...restProps }) {
  return (
    <Link {...restProps} href={href}>
      {children}
    </Link>
  );
};

ListOfJobs.Text = function ListOfJobsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ListOfJobs.AllJobsWrapper = function ListOfJobsAllJobsWrapper({
  children,
  ...restProps
}) {
  return <AllJobsWrapper {...restProps}>{children}</AllJobsWrapper>;
};

ListOfJobs.Type = function ListOfJobsType({ children, ...restProps }) {
  return <Type {...restProps}>{children}</Type>;
};

ListOfJobs.CompanyName = function ListOfJobsCompanyName({
  children,
  ...restProps
}) {
  return <CompanyName {...restProps}>{children}</CompanyName>;
};

ListOfJobs.TextWrapper = function ListOfJobsTextWrapper({
  children,
  ...restProps
}) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};
