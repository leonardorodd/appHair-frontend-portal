/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import EmptyList from '../../../components/EmptyList';
import { convertToBrasilianDateFormat } from '../../../utils/dateUtils';
import AddProviderModal, { IFormData } from '../CreateProvider';

import { Container, ProviderHeaderContainer } from './styles';

const Clients: React.FC = () => {
    const initialData = [
        {
            nome: 'Matheus da Silva',
            dataDeNascimento: '10/10/1995',
            sexo: 'Masculino',
            contato: 'Fulano',
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
            contato: 'Fulano',
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
            contato: 'Fulano',
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
            contato: 'Fulano',
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
    const [providersList, setProvidersList] = useState<Array<IFormData>>(
        initialData,
    );

    function searchProvider(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <Container>
            <ProviderHeaderContainer>
                <h1>Fornecedores</h1>
                <div>
                    <AddProviderModal />
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar fornecedor" />
                    </div>
                </div>
            </ProviderHeaderContainer>
            {providersList.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF/CNPJ</th>
                            <th>Contato</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {providersList.map((provider, index) => (
                            /* Object.values(client).some(value =>
		                    value
		                        .toLocaleUpperCase()
		                        .startsWith(searchTerm.toLocaleUpperCase()),
		                ) ? ( */
                            <tr>
                                <td>{provider.nome}</td>
                                <td>{provider.numeroCPFouCNPJ}</td>
                                <td>{provider.contato}</td>
                                <td>{provider.whatsapp}</td>
                                <td>
                                    <MdDelete
                                        onClick={() => {
                                            const updatedProviderList = providersList.filter(
                                                (_, providerIndex) =>
                                                    providerIndex !== index,
                                            );

                                            setProvidersList(
                                                updatedProviderList,
                                            );
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <EmptyList
                    title="Não foram encontrados fornecedores cadastrados"
                    subtitle='Adicione um novo fornecedor clicando no botão "+"'
                />
            )}
        </Container>
    );
};

export default Clients;
