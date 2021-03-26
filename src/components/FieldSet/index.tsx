import React from 'react';
import { Container } from './styles';

interface Props {
    title: string;
    children?: React.ReactNode;
    bordered?: boolean;
}

const FieldSet: React.FC<Props> = ({ children, title }) => {
    return <Container title={title}>{children}</Container>;
};

export default FieldSet;
