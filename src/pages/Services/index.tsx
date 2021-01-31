import React from 'react';
import ProviderCard from '../../components/ProviderCard';
import AddProviderModal from './CreateService';

import {
    Container,
    ClientSearchContainer,
    ClientList,
    ClientListHeader,
} from './styles';

const Providers: React.FC = () => {
    return (
        <Container>
            <ClientSearchContainer>
                <h1>Serviços</h1>
                <div>
                    <AddProviderModal />
                    <div>
                        <input />
                        <button className="searchButton " type="button">
                            Pesquisar
                        </button>
                    </div>
                </div>
            </ClientSearchContainer>
            {/*  <ClientList>
                <ClientListHeader>
                    <h3>Fornecedor</h3>
                    <h3>CPF/CNPJ</h3>
                    <h3>Contato</h3>
                    <h3>Telefone</h3>
                </ClientListHeader>
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
                <ProviderCard
                    nome="Fulano da Silva"
                    cpfoucnpj="18.707.226/0001-92"
                    nomeContato="fulano"
                    telefone="(62) 35587807"
                />
            </ClientList> */}
        </Container>
    );
};

export default Providers;
