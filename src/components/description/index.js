import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Link,
  Text,
  TextSmall,
  Image,
  BigTitle,
  DescriptionContent,
  DescriptionWrapper,
  Type,
  CompanyName,
  ImageContainer,
  JobNameWrapper,
  CompanyWrapper,
} from "./styles/description";

export default function Description({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Description.BigTitle = function DescriptionBigTitle({
  src,
  children,
  ...restProps
}) {
  return (
    <BigTitle {...restProps} src={src}>
      {children}
    </BigTitle>
  );
};

Description.DescriptionContent = function DescriptionDescriptionContent({
  src,
  children,
  ...restProps
}) {
  return (
    <DescriptionContent {...restProps} src={src}>
      {children}
    </DescriptionContent>
  );
};

Description.DescriptionWrapper = function DescriptionDescriptionWrapper({
  src,
  children,
  ...restProps
}) {
  return (
    <DescriptionWrapper {...restProps} src={src}>
      {children}
    </DescriptionWrapper>
  );
};

Description.Title = function DescriptionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Description.SubTitle = function DescriptionSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Description.Link = function DescriptionLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Description.Text = function DescriptionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Description.TextSmall = function DescriptionTextSmall({
  children,
  ...restProps
}) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Description.ImageContainer = function DescriptionImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Description.Image = function DescriptionImage({ src, children, ...restProps }) {
  return <Image {...restProps} src={src} />;
};

Description.Type = function DescriptionType({ children, ...restProps }) {
  return <Type {...restProps}>{children}</Type>;
};

Description.CompanyWrapper = function DescriptionCompany({ children, ...restProps }) {
  return <CompanyWrapper {...restProps}>{children}</CompanyWrapper>;
};

Description.JobNameWrapper = function DescriptionJobNameWrapper({ children, ...restProps }) {
  return <JobNameWrapper {...restProps}>{children}</JobNameWrapper>;
};

Description.CompanyName = function DescriptionCompanyName({
  children,
  ...restProps
}) {
  return <CompanyName {...restProps}>{children}</CompanyName>;
};
