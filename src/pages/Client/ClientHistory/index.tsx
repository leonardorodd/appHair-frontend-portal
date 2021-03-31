import React, { useRef } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import AddSkills from './AddSkills';
import FieldSet from '../../../components/FieldSet';

import AvatarInput from '../../../components/UnformFields/AvatarInput';
import {
    Container,
    ClientHistoryContainer,
    PageTitle,
    CardsContainer,
    Card,
} from './styles';

const ClientHistory: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    return (
        <Container>
            <PageTitle>
                <p>Histórico do Cliente</p>
            </PageTitle>
            <ClientHistoryContainer onSubmit={() => ''} id="form" ref={formRef}>
                <AvatarInput name="avatarImage" label="Fulano da Silva" />
                <div>
                    <CardsContainer>
                        <Card>
                            <p>Saldo</p>
                            <div>R$ 50,00</div>
                        </Card>
                        <Card>
                            <p>Ticket Médio</p>
                            <div>R$195,00</div>
                        </Card>
                        <Card>
                            <p>Taxa de comparecimento</p>
                            <div>15,38 %</div>
                        </Card>
                        <Card>
                            <p>Profissional querido</p>
                            <div>Fernanda</div>
                        </Card>
                        <Card>
                            <p>Dia da semana preferido</p>
                            <div>Terça-Feira</div>
                        </Card>
                    </CardsContainer>
                </div>
                <AddSkills />
                <FieldSet title="Próxima visita">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Profissional</th>
                                <th>Duração</th>
                                <th>Valor total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>31/03/2021</td>
                                <td>Fernanda</td>
                                <td>45min</td>
                                <td>R$ 40,00</td>
                            </tr>
                            <tr>
                                <td>02/04/2021</td>
                                <td>Cleiton</td>
                                <td>50min</td>
                                <td>R$ 120,00</td>
                            </tr>
                        </tbody>
                    </Table>
                </FieldSet>
                <FieldSet title="Histórico de visitas">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Horário</th>
                                <th>Comanda</th>
                                <th>Profissional</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                onClick={() =>
                                    // eslint-disable-next-line prettier/prettier
                                    history.push('/clients/history/service')}
                            >
                                <td>30/03/2021</td>
                                <td>15:30h</td>
                                <td>1</td>
                                <td>Fernanda</td>
                                <td>R$ 120,00</td>
                            </tr>
                            <tr>
                                <td>30/02/2021</td>
                                <td>16:30h</td>
                                <td>1</td>
                                <td>Fernanda</td>
                                <td>R$ 120,00</td>
                            </tr>
                            <tr>
                                <td>30/01/2021</td>
                                <td>17:30h</td>
                                <td>1</td>
                                <td>Fernanda</td>
                                <td>R$ 120,00</td>
                            </tr>
                        </tbody>
                    </Table>
                </FieldSet>
            </ClientHistoryContainer>
        </Container>
    );
};

export default ClientHistory;
