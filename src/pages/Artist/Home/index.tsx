import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import ProviderCard from '../../../components/ProviderCard';
import AddArtistModal from '../CreateArtist';

import {
    Container,
    ClientSearchContainer,
    ClientList,
    ClientListHeader,
} from './styles';

const Providers: React.FC = () => {
    const history = useHistory();

    /*
    useEffect(() => {
        function resizeWindowEvent() {
            console.log('mudou');
        }

        window.addEventListener('resize', resizeWindowEvent);

        return () => {
            window.removeEventListener('resize', resizeWindowEvent);
        };
    }, []); */

    const [isMobile, setIsMobile] = useState(false);

    return (
        <Container>
            <ClientSearchContainer>
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
                        <input placeholder="Nome do artista" />
                        <button className="searchButton " type="button">
                            <span>Pesquisar</span>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </ClientSearchContainer>
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
                        <td>(62)998297558</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>Maria</td>
                        <td>mariasouza@gmail.com</td>
                        <td>(62)998297953</td>
                        <td>
                            <MdDelete onClick={() => ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>Marcos</td>
                        <td>marcos158@gmail.com</td>
                        <td>(62)998297258</td>
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
