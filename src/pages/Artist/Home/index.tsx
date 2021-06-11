import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { MdDelete, MdPerson } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import ProviderCard from '../../../components/ProviderCard';
import AddArtistModal from '../CreateArtist';

import { Container, ArtistHeaderContainer } from './styles';

const Providers: React.FC = () => {
    const history = useHistory();

    return (
        <Container>
            <ArtistHeaderContainer>
                <h1>Artistas</h1>
                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/artists/create')}
                    >
                        <span>Adicionar</span>
                        <FaPlus />
                    </button>
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar artista" />
                    </div>
                </div>
            </ArtistHeaderContainer>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ana</td>
                        <td>analucia@gmail.com</td>
                        <td>(62) 9 98297558</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>Maria</td>
                        <td>mariasouza@gmail.com</td>
                        <td>(62) 9 98297953</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>Marcos</td>
                        <td>marcos158@gmail.com</td>
                        <td>(62) 9 98297258</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Providers;
