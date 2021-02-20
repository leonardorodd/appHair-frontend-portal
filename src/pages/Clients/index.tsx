/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import ClientCard from '../../components/ClientCard';
import { convertToBrasilianDateFormat } from '../../utils/dateUtils';
import AddClientModal, { IFormData } from './CreateClient';

import {
    Container,
    ClientSearchContainer,
    ClientList,
    ClientListHeader,
} from './styles';

const Clients: React.FC = () => {
    const initialData = [
        {
            nome: 'Matheus da Silva',
            dataDeNascimento: '10/10/1995',
            sexo: 'Masculino',
            email: 'matheus@hotmail.com',
            numeroCPFouCNPJ: '702.415.258.85',
            RG: '61.24.258',
            avatarImage: '',
            endereco: {
                cep: '74.425.580',
                logradouro: 'Rua Fulano',
                numero: 's/n',
                bairro: 'Ciclano',
                complemento: 'quadra 10 lote 20',
                cidade: 'Goiânia',
                estado: 'Goiás',
            },
            whatsapp: '(64)992855445',
            instagram: '',
            twitter: '',
            facebook: '',
            porcentagemDescontoProdutos: '',
            porcentagemDescontoServicos: '',
            indocadoPor: '',
            idArtista1: '',
            idArtista2: '',
            coloracaoCabelo: 'castanho',
            tipoDePele: 'morena',
            tipoDeUnha: '',
        },
        {
            nome: 'Matheus da Silva',
            dataDeNascimento: '10/10/1995',
            sexo: 'Masculino',
            email: 'matheus@hotmail.com',
            numeroCPFouCNPJ: '702.415.258.85',
            RG: '61.24.258',
            avatarImage: '',
            endereco: {
                cep: '74.425.580',
                logradouro: 'Rua Fulano',
                numero: 's/n',
                bairro: 'Ciclano',
                complemento: 'quadra 10 lote 20',
                cidade: 'Goiânia',
                estado: 'Goiás',
            },
            whatsapp: '(64)992855445',
            instagram: '',
            twitter: '',
            facebook: '',
            porcentagemDescontoProdutos: '',
            porcentagemDescontoServicos: '',
            indocadoPor: '',
            idArtista1: '',
            idArtista2: '',
            coloracaoCabelo: 'castanho',
            tipoDePele: 'morena',
            tipoDeUnha: '',
        },
        {
            nome: 'Matheus da Silva',
            dataDeNascimento: '10/10/1995',
            sexo: 'Masculino',
            email: 'matheus@hotmail.com',
            numeroCPFouCNPJ: '702.415.258.85',
            RG: '61.24.258',
            avatarImage: '',
            endereco: {
                cep: '74.425.580',
                logradouro: 'Rua Fulano',
                numero: 's/n',
                bairro: 'Ciclano',
                complemento: 'quadra 10 lote 20',
                cidade: 'Goiânia',
                estado: 'Goiás',
            },
            whatsapp: '(64)992855445',
            instagram: '',
            twitter: '',
            facebook: '',
            porcentagemDescontoProdutos: '',
            porcentagemDescontoServicos: '',
            indocadoPor: '',
            idArtista1: '',
            idArtista2: '',
            coloracaoCabelo: 'castanho',
            tipoDePele: 'morena',
            tipoDeUnha: '',
        },
        {
            nome: 'Matheus da Silva',
            dataDeNascimento: '10/10/1995',
            sexo: 'Masculino',
            email: 'matheus@hotmail.com',
            numeroCPFouCNPJ: '702.415.258.85',
            RG: '61.24.258',
            avatarImage: '',
            endereco: {
                cep: '74.425.580',
                logradouro: 'Rua Fulano',
                numero: 's/n',
                bairro: 'Ciclano',
                complemento: 'quadra 10 lote 20',
                cidade: 'Goiânia',
                estado: 'Goiás',
            },
            whatsapp: '(64)992855445',
            instagram: '',
            twitter: '',
            facebook: '',
            porcentagemDescontoProdutos: '',
            porcentagemDescontoServicos: '',
            indocadoPor: '',
            idArtista1: '',
            idArtista2: '',
            coloracaoCabelo: 'castanho',
            tipoDePele: 'morena',
            tipoDeUnha: '',
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [clientsList, setClientsList] = useState<Array<IFormData>>(
        initialData,
    );

    function searchClient(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <Container>
            <ClientSearchContainer>
                <h1>Clientes</h1>
                <div>
                    <AddClientModal
                        saveClient={clientData => {
                            /*                             console.log(clientData);
                             */ setClientsList([...clientsList, clientData]);
                        }}
                    />
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
                    <div>
                        <span>Nome</span>
                    </div>
                    <div>
                        <span>Telefone</span>
                    </div>
                    <div>
                        <span>Sexo</span>
                    </div>
                    <div>
                        <span>Data de Nascimento</span>
                    </div>
                    <div>
                        <span>Ações</span>
                    </div>
                </ClientListHeader>
                {clientsList.length > 0 ? (
                    clientsList.map((client, index) => (
                        /* Object.values(client).some(value =>
                            value
                                .toLocaleUpperCase()
                                .startsWith(searchTerm.toLocaleUpperCase()),
                        ) ? ( */
                        <ClientCard
                            clientIndex={index}
                            key={index}
                            nome={client.nome}
                            telefone={client.whatsapp}
                            sexo={client.sexo}
                            deleteClient={() => {
                                const updatedClientList = clientsList.filter(
                                    (_, clientIndex) => clientIndex !== index,
                                );

                                setClientsList(updatedClientList);
                            }}
                            dataDeNascimento={convertToBrasilianDateFormat(
                                new Date(client.dataDeNascimento),
                            )}
                        />
                    ))
                ) : (
                    <h1>sem clientes</h1>
                )}
            </ClientList>
        </Container>
    );
};

export default Clients;
