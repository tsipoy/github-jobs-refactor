import React from 'react'

import { Container, Form, Input, InputText, Title, Label } from "./styles/searchJobs"

export default function SearchJobs({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}


SearchJobs.Title = function SearchJobsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

SearchJobs.Form = function SearchJobsForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
};


SearchJobs.Input = function SearchJobsInput({children, ...restProps}) {
    return <Input {...restProps} />
};

SearchJobs.InputText = function SearchJobsInputText({children, ...restProps}) {
    return <InputText {...restProps} />
};


SearchJobs.Label = function SearchJobsLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
};