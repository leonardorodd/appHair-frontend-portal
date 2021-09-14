/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select, { OptionTypeBase } from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import compareAsc from 'date-fns/compareAsc';
import CheckBox from '../../../components/UnformFields/CheckBox';

import {
    Container,
    CommissionHeaderContainer,
    GroupSelectContainer,
    CheckBoxContainer,
    CommissionPaymentContainer,
    CommissionPaymentForm,
    RescissionPaymentForm,
} from './styles';

const filterOptions = [
    { value: 1, label: 'individual' },
    { value: 2, label: 'grupo' },
];

const ComissionOptions = [
    { value: 1, label: 'Processar Comissão' },
    { value: 2, label: 'Processar Rescisão' },
];

interface IArtistComission {
    nome: string;
    valorDisponivel: string;
    valorBloqueado: string;
    valorTotal: string;
}

const artistsGroup = [
    { value: 1, label: 'Diário' },
    { value: 2, label: 'Semanal' },
    { value: 3, label: 'Quinzenal' },
    { value: 4, label: 'Mensal' },
];

const Comissões: React.FC = () => {
    const [endDate, setEndDate] = useState(new Date());
    const [paymentDate, setPaymentDate] = useState(new Date());
    const [showPaymentButton, setShowPaymentButton] = useState(false);
    const [filterType, setFilterType] = useState(filterOptions[0]);
    const [selectedArtists, setSelectedArtists] = useState<
        Array<IArtistComission>
    >([]);
    const [currentForm, setCurrentForm] = useState<OptionTypeBase>(
        ComissionOptions[0],
    );
    const [artistsList, setArtistsList] = useState<Array<IArtistComission>>([
        {
            nome: 'Fulano1',
            valorDisponivel: '550',
            valorBloqueado: '150',
            valorTotal: '700',
        },
        {
            nome: 'Fulano2',
            valorDisponivel: '580',
            valorBloqueado: '150',
            valorTotal: '600',
        },
        {
            nome: 'Fulano3',
            valorDisponivel: '550',
            valorBloqueado: '150',
            valorTotal: '700',
        },
        {
            nome: 'Fulano4',
            valorDisponivel: '550',
            valorBloqueado: '150',
            valorTotal: '700',
        },
        {
            nome: 'Fulano5',
            valorDisponivel: '550',
            valorBloqueado: '150',
            valorTotal: '700',
        },
    ]);

    return (
        <Container>
            <CommissionHeaderContainer>
                <h1>Comissões</h1>
                <div>
                    <div>
                        <strong>Data limite:</strong>
                        <DatePicker
                            selected={endDate}
                            onChange={(selectedDate: Date) =>
                                // eslint-disable-next-line prettier/prettier
                                selectedDate && setEndDate(selectedDate)}
                        />
                    </div>
                    <div>
                        <div>
                            <strong>Filtrar artistas por:</strong>
                            <Select
                                label="Tipo"
                                classNamePrefix="react-select"
                                defaultValue={filterOptions[0]}
                                options={filterOptions}
                                onChange={value =>
                                    value && setCurrentForm(value)
                                }
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                        {filterType.value === 1 ? (
                            <div>
                                <FaSearch />
                                <input placeholder="Artista" />
                            </div>
                        ) : (
                            <GroupSelectContainer>
                                <Select
                                    label="Tipo"
                                    classNamePrefix="react-select"
                                    defaultValue={artistsGroup[0]}
                                    options={artistsGroup}
                                    /* onChange={value =>
                                    value && setSearchType(value)
                                } */
                                    blurInputOnSelect
                                    openMenuOnFocus
                                />
                            </GroupSelectContainer>
                        )}
                    </div>
                </div>
            </CommissionHeaderContainer>
            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            <div />
                        </th>
                        <th>Artista</th>
                        <th>Valor Disponível (R$)</th>
                        <th>Valor Bloqueado (R$)</th>
                        <th>Valor Total (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {artistsList.map((artist, index) => (
                        <tr>
                            <td>
                                <CheckBoxContainer onSubmit={() => ''}>
                                    <CheckBox
                                        name="SS"
                                        onChangeCallback={() => {
                                            if (
                                                selectedArtists.includes(artist)
                                            ) {
                                                const updatedArtistList = selectedArtists.filter(
                                                    (_, artistIndex) =>
                                                        artistIndex !== index,
                                                );

                                                setSelectedArtists(
                                                    updatedArtistList,
                                                );
                                            } else {
                                                setSelectedArtists([
                                                    ...selectedArtists,
                                                    artist,
                                                ]);
                                            }
                                        }}
                                    />
                                </CheckBoxContainer>
                            </td>
                            <td>{artist?.nome}</td>
                            <td>{artist?.valorDisponivel}</td>
                            <td>{artist?.valorBloqueado}</td>
                            <th>{artist?.valorTotal}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <CommissionPaymentContainer>
                {selectedArtists.length > 0 && (
                    <>
                        <Select
                            label="Tipo"
                            classNamePrefix="react-select"
                            defaultValue={ComissionOptions[0]}
                            options={ComissionOptions}
                            onChange={value => value && setCurrentForm(value)}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        {currentForm.value === 1 ? (
                            <CommissionPaymentForm onSubmit={() => ''}>
                                <div>
                                    <strong>Data de pagamento:</strong>
                                    <DatePicker
                                        selected={paymentDate}
                                        onChange={(selectedDate: Date) =>
                                            selectedDate &&
                                            setPaymentDate(selectedDate)
                                        }
                                    />
                                </div>
                                {compareAsc(
                                    new Date().setHours(0, 0, 0, 0),
                                    paymentDate.setHours(0, 0, 0, 0),
                                ) === 0 && (
                                    <CheckBox
                                        name="SS"
                                        label="Pagamento já realizado"
                                    />
                                )}
                                <button
                                    className="fibre-button"
                                    type="submit"
                                    form="form"
                                >
                                    Fechar comissões
                                </button>
                            </CommissionPaymentForm>
                        ) : (
                            <RescissionPaymentForm onSubmit={() => ''}>
                                <div>
                                    <strong>Processar até a data:</strong>
                                    <DatePicker
                                        selected={paymentDate}
                                        onChange={(selectedDate: Date) =>
                                            selectedDate &&
                                            setPaymentDate(selectedDate)
                                        }
                                    />
                                </div>
                                <button
                                    className="fibre-button"
                                    type="submit"
                                    form="form"
                                >
                                    Confirmar rescisão
                                </button>
                            </RescissionPaymentForm>
                        )}
                    </>
                )}
                {console.log(selectedArtists)}
            </CommissionPaymentContainer>
        </Container>
    );
};

export default Comissões;
