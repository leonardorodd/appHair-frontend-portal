/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import EmptyList from '../../../components/EmptyList';
import AddServiceModal from '../CreateProduct';
import { Container, ProviderHeaderContainer } from './styles';

export interface IFormData {
    nome: string;
    marca: string;
    tipo: string;
    precoDeVenda: string;
}

const Clients: React.FC = () => {
    const initialData = [
        {
            nome: 'Revelador',
            marca: 'CADVEU',
            tipo: 'Cabelo',
            precoDeVenda: '21,60',
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
                <h1>Produtos</h1>
                <div>
                    <AddServiceModal />
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar produto" />
                    </div>
                </div>
            </ProviderHeaderContainer>
            {providersList.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Marca</th>
                            <th>Tipo do produto</th>
                            <th>Preço de venda</th>
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
                                <td>{provider.marca}</td>
                                <td>{provider.tipo}</td>
                                <td>{provider.precoDeVenda}</td>
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
                    title="Não foram encontrados produtos cadastrados"
                    subtitle='Adicione um novo produto clicando no botão "+"'
                />
            )}
        </Container>
    );
};

export default Clients;
