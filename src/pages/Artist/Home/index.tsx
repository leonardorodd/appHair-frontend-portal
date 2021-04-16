import React from 'react';
import { useHistory } from 'react-router-dom';

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

    return (
        <Container>
            <ClientSearchContainer>
                <h1>Artistas</h1>
                <div>
                    <div>
                        <button
                            type="button"
                            onClick={() => history.push('/artists/create')}
                        >
                            Adicionar
                        </button>
                    </div>
                    <div>
                        <input />
                        <button className="searchButton " type="button">
                            Pesquisar
                        </button>
                    </div>
                </div>
            </ClientSearchContainer>
            <ClientList />
        </Container>
    );
};

export default Providers;
