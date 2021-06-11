/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import EmptyList from '../../../components/EmptyList';
import AddServiceModal from '../CreateService';
import { Container, ProviderHeaderContainer } from './styles';

export interface IFormData {
    nome: string;
    valor: string;
    categoria: string;
    tempoDeExecucao: string;
}

const Clients: React.FC = () => {
    const initialData = [
        {
            nome: 'Botox capilar',
            valor: 'R$ 350,00',
            categoria: 'Cabelo',
            tempoDeExecucao: '02:45:00',
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
                <h1>Serviços</h1>
                <div>
                    <AddServiceModal />
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar serviço" />
                    </div>
                </div>
            </ProviderHeaderContainer>
            {providersList.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Tempo</th>
                            <th>Categoria</th>
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
                                <td>{provider.valor}</td>
                                <td>{provider.tempoDeExecucao}</td>
                                <td>{provider.categoria}</td>
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
                    title="Não foram encontrados serviços cadastrados"
                    subtitle='Adicione um novo serviço clicando no botão "+"'
                />
            )}
        </Container>
    );
};

export default Clients;
