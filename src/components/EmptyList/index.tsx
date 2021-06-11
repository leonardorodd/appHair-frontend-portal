import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

import { Container } from './styles';

interface IEmptyListProps {
    title: string;
    subtitle: string;
}

const EmptyList: React.FC<IEmptyListProps> = ({ title, subtitle }) => {
    return (
        <Container>
            <FaFolderOpen />
            <strong>{title}</strong>
            <span>{subtitle}</span>
        </Container>
    );
};

export default EmptyList;
