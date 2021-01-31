import React from 'react';

import { Container } from './styles';

interface IClientCardProps {
    nome: string;
    telefone: string;
    ultimoServico: string;
    ticketMedio: string;
}

const ClientCard: React.FC<IClientCardProps> = ({
    nome,
    telefone,
    ultimoServico,
    ticketMedio,
}) => {
    return (
        <Container>
            <span>{nome}</span>
            <span>{telefone}</span>
            <span>{ultimoServico}</span>
            <span>{ticketMedio}</span>
        </Container>
    );
};

export default ClientCard;
