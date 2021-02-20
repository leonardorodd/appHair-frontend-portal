import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import { Container } from './styles';

interface IClientCardProps {
    nome: string;
    telefone: string;
    sexo: string;
    dataDeNascimento: string;
    clientIndex: number;
    deleteClient: (index: number) => void;
}

const ClientCard: React.FC<IClientCardProps> = ({
    nome,
    telefone,
    sexo,
    dataDeNascimento,
    clientIndex,
    deleteClient,
}) => {
    return (
        <Container>
            <div>
                <span>{nome}</span>
            </div>
            <div>
                <span>{telefone}</span>
            </div>
            <div>
                <span>{sexo}</span>
            </div>
            <div>
                <span>{dataDeNascimento}</span>
            </div>
            <div>
                <MdEdit />
                <MdDelete onClick={() => deleteClient(clientIndex)} />
            </div>
        </Container>
    );
};

export default ClientCard;
