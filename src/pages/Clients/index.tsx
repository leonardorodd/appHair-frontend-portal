/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import ClientCard from '../../components/ClientCard';
import AddClientModal from './CreateClient';
import {
    Container,
    ClientSearchContainer,
    ClientList,
    ClientListHeader,
} from './styles';

type IClientListProps = {
    nome: string;
    telefone: string;
    ultimoServico: string;
    ticketMedio: string;
};

const Clients: React.FC = () => {
    const clients: Array<IClientListProps> = [
        {
            nome: 'Kamillah',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Gabriel',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Marcos',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Manuela',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '150',
        },
        {
            nome: 'Camila',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Paulo',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Joana',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Maria',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Kleber',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Marta',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
        {
            nome: 'Leonardo',
            telefone: '35589885',
            ultimoServico: '10/11/2020',
            ticketMedio: '250',
        },
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const [clientsList, setClientsList] = useState(clients);

    function searchClient(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <Container>
            <ClientSearchContainer>
                <h1>Clientes</h1>
                <div>
                    <AddClientModal />
                    <div>
                        <input onChange={searchClient} />
                        <button className="searchButton " type="button">
                            Pesquisar
                        </button>
                    </div>
                </div>
            </ClientSearchContainer>
            <ClientList>
                <ClientListHeader>
                    <h3>Nome</h3>
                    <h3>Telefone</h3>
                    <h3>Último Serviço</h3>
                    <h3>Ticket Médio</h3>
                </ClientListHeader>
                {clientsList.length > 0 ? (
                    clientsList.map(client =>
                        Object.values(client).some(value =>
                            value
                                .toLocaleUpperCase()
                                .startsWith(searchTerm.toLocaleUpperCase()),
                        ) ? (
                            <ClientCard
                                key={client.nome}
                                nome={client.nome}
                                telefone={client.telefone}
                                ultimoServico={client.ultimoServico}
                                ticketMedio={`R$ ${client.ticketMedio}`}
                            />
                        ) : (
                            []
                        ),
                    )
                ) : (
                    <h1>sem clientes</h1>
                )}
            </ClientList>
        </Container>
    );
};

export default Clients;
