import React from "react";

import { Container, Title, Image, Link, Text, AllJobsWrapper, Type, CompanyName, TextWrapper } from "./styles/listOfJobs"

export default function ListOfJobs({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

ListOfJobs.Title = function ListOfJobsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

ListOfJobs.Image = function ListOfJobsImage({src, children, ...restProps}) {
    return <Image {...restProps} src={src} />
};

ListOfJobs.Link = function ListOfJobsLink({ to, children, ...restProps}) {
    return <Link {...restProps} to={to}>{children}</Link>
};

ListOfJobs.Text = function ListOfJobsText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

ListOfJobs.AllJobsWrapper = function ListOfJobsAllJobsWrapper({children, ...restProps}) {
    return <AllJobsWrapper {...restProps}>{children}</AllJobsWrapper>
};


ListOfJobs.Type = function ListOfJobsType({children, ...restProps}) {
    return <Type {...restProps}>{children}</Type>
};

ListOfJobs.CompanyName = function ListOfJobsCompanyName({children, ...restProps}) {
    return <CompanyName {...restProps}>{children}</CompanyName>
};

ListOfJobs.TextWrapper = function ListOfJobsTextWrapper({children, ...restProps}) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>
};