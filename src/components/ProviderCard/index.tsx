import React from 'react';

import { Container } from './styles';

interface IProviderCardProps {
    nome: string;
    cpfoucnpj: string;
    nomeContato: string;
    telefone: string;
}

const ProviderCard: React.FC<IProviderCardProps> = ({
    nome,
    cpfoucnpj,
    nomeContato,
    telefone,
}) => {
    return (
        <Container>
            <span>{nome}</span>
            <span>{cpfoucnpj}</span>
            <span>{nomeContato}</span>
            <span>{telefone}</span>
        </Container>
    );
};

export default ProviderCard;
