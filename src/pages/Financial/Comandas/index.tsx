/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { MdInsertDriveFile, MdDelete, MdRemoveRedEye } from 'react-icons/md';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { Table } from 'react-bootstrap';
import AddComandaModal, { IFormData } from './CreateComanda';

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

const Comandas: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [date, setDate] = useState(new Date());
    const handleCreateComandaSubmit: SubmitHandler<IFormData> = async data =>
        '';
    const [comandasList, setComandasList] = useState<Array<IFormData> | null>(
        null,
    );

    return (
        <Container>
            <ComandaHeaderContainer>
                <h1>Comandas do dia</h1>
                <div>
                    <DatePicker
                        selected={date}
                        onChange={(selectedDate: Date) =>
                            selectedDate && setDate(selectedDate)}
                    />
                    <div>
                        <FaSearch />
                        <input placeholder="Pesquisar comanda" />
                    </div>
                </div>
            </ComandaHeaderContainer>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Número da comanda</th>
                        <th>Cliente</th>
                        <th>Profissional</th>
                        <th>Valor Pago</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1465</td>
                        <td>Marcia</td>
                        <td>Marcela</td>
                        <td>R$ 50,00</td>
                        <td>
                            <div>
                                <AddComandaModal
                                    saveComanda={comanda => {
                                    if (comandasList) {
                                        setComandasList([...comandasList, comanda]);
                                    } else {
                                        setComandasList([comanda]);
                                    }
                                }}
                                />
                                <MdDelete />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1465</td>
                        <td>Marcia</td>
                        <td>Marcela</td>
                        <td>R$ 50,00</td>
                        <td>
                            <div>
                                <AddComandaModal
                                    saveComanda={comanda => {
                                    if (comandasList) {
                                        setComandasList([...comandasList, comanda]);
                                    } else {
                                        setComandasList([comanda]);
                                    }
                                }}
                                />
                                <MdDelete />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1465</td>
                        <td>Marcia</td>
                        <td>Marcela</td>
                        <td>R$ 50,00</td>
                        <td>
                            <div>
                                <AddComandaModal
                                    saveComanda={comanda => {
                                    if (comandasList) {
                                        setComandasList([...comandasList, comanda]);
                                    } else {
                                        setComandasList([comanda]);
                                    }
                                }}
                                />
                                <MdDelete />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>

            {/*        <CreateComandaForm onSubmit={() => ''} id="form">
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
            </CreateComandaForm> */}
        </Container>
    );
};
export default Comandas;
