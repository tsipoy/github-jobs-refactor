import React from 'react'

import { Container, Form, Input, Button, Title } from "./styles/header"

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

// export default function Header({ bg = true, children, ...restProps }) {
// 	return bg ? <Background {...restProps}>{children}</Background> : children;
// }

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Header.Form = function HeaderForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
};

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

Header.Button = function HeaderButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
};

Header.Input = function HeaderInput({children, ...restProps}) {
    return <Input {...restProps} />
};


