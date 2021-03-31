import React from 'react';
import { MdDelete, MdEdit, MdHistory } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();

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
                <MdHistory onClick={() => history.push('/clients/history')} />
                <MdDelete onClick={() => deleteClient(clientIndex)} />
            </div>
        </Container>
    );
};

export default ClientCard;
