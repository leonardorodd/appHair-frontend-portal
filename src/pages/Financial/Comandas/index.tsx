import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { Table } from 'react-bootstrap';

/* import AddComandaModal from './CreateComanda';
 */ import Select from '../../../components/UnformFields/Select';
import Input from '../../../components/UnformFields/Input';
import {
    Container,
    ComandaHeaderContainer,
    CreateComandaForm,
    AddComandaMenu,
} from './styles';

const professionalsList = [
    { value: 1, label: 'Marcia' },
    { value: 2, label: 'Sergio' },
    { value: 3, label: 'Daniel' },
];

const servicesList = [
    { value: 1, label: 'Hidratação' },
    { value: 2, label: 'Cabelo' },
    { value: 3, label: 'Manícure e pedícure' },
];

export interface IFormData {
    nome: string;
    dataDeNascimento: string;
    sexo: string;
    email: string;
    numeroCPFouCNPJ: string;
    RG?: string;
    avatarImage?: string;
}

const Comandas: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleCreateComandaSubmit: SubmitHandler<IFormData> = async data =>
        '';

    return (
        <Container>
            <ComandaHeaderContainer>
                <h1>Comandas do dia</h1>
            </ComandaHeaderContainer>
            <CreateComandaForm onSubmit={() => ''} id="form">
                <AddComandaMenu>
                    <Select
                        label="Serviço"
                        name="servico"
                        classNamePrefix="react-select"
                        defaultValue={{
                            label: 'Selecione',
                            value: 0,
                        }}
                        options={professionalsList}
                        isSearchable={false}
                        blurInputOnSelect
                        openMenuOnFocus
                    />
                    <Select
                        label="Profissional"
                        name="profissional"
                        classNamePrefix="react-select"
                        defaultValue={{
                            label: 'Selecione',
                            value: 0,
                        }}
                        options={servicesList}
                        isSearchable={false}
                        blurInputOnSelect
                        openMenuOnFocus
                    />
                    <Input name="valor" label="Valor unitário" />
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="button"
                    >
                        Adicionar
                    </button>
                </AddComandaMenu>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Serviço/Produto</th>
                            <th>Profissional</th>
                            <th>Preço Unit.</th>
                            <th>Desconto</th>
                            <th>Preço total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hidratação</td>
                            <td>Marcia</td>
                            <td>R$ 50,00</td>
                            <th>R$ 25,00</th>
                            <th>R$ 25,00</th>
                        </tr>
                        <tr>
                            <td>Corte</td>
                            <td>Helena</td>
                            <td>R$ 50,00</td>
                            <th>R$ 25,00</th>
                            <th>R$ 25,00</th>
                        </tr>
                    </tbody>
                </Table>
            </CreateComandaForm>
        </Container>
    );
};
export default Comandas;
