/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { OptionTypeBase } from 'react-select';
import { Table } from 'react-bootstrap';
import Input from '../../../components/UnformFields/Input';
import Select from '../../../components/UnformFields/Select';
import { Container, AddSkillModal } from './styles';
import Exceptions from './Exceptions';
import CheckBox from '../../../components/UnformFields/CheckBox';

const CardOperator: React.FC = () => {
    const finalizadoraOptions = [
        { value: 1, label: 'Dinheiro' },
        { value: 2, label: 'PIX' },
        { value: 3, label: 'Transferência' },
        { value: 4, label: 'Débito' },
        { value: 5, label: 'Crédito' },
        { value: 6, label: 'Voucher' },
        { value: 7, label: 'Permuta' },
    ];

    const [show, setShow] = useState(false);
    const [
        currentPaymentForm,
        setCurrentPaymentForm,
    ] = useState<OptionTypeBase>(finalizadoraOptions[0]);

    const cardPaymentOptions = [
        { value: 1, label: '1x (á vista)' },
        { value: 2, label: '2x' },
        { value: 3, label: '3x' },
        { value: 4, label: '4x' },
        { value: 5, label: '5x' },
        { value: 6, label: '6x' },
        { value: 1, label: '7x' },
        { value: 2, label: '8x' },
        { value: 3, label: '9x' },
        { value: 4, label: '10x' },
        { value: 5, label: '11x' },
        { value: 6, label: '12x' },
    ];

    const cardTransactions = [
        { value: 1, label: 'Crédito' },
        { value: 2, label: 'Débito' },
    ];

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    return (
        <Container>
            <button
                className="fibre-button fibre-button--default"
                type="button"
                onClick={handleShow}
            >
                Adicionar forma de pag.
            </button>
            <AddSkillModal
                show={show}
                onHide={handleClose}
                size="lg"
                className="baseModalStyle"
                backdrop="static"
            >
                <AddSkillModal.Header>
                    <AddSkillModal.Title>
                        <p>Inclusão de forma de pagamento</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <div className="twoFieldsGroup">
                        <Select
                            label="Finalizadora"
                            name="finalizadora"
                            classNamePrefix="react-select"
                            defaultValue={finalizadoraOptions[0]}
                            options={finalizadoraOptions}
                            onChange={option => {
                                option && setCurrentPaymentForm(option);
                            }}
                            isSearchable={false}
                            blurInputOnSelect
                            openMenuOnFocuss
                        />
                        {currentPaymentForm.value === 5 && (
                            <Select
                                label="Parcelamento"
                                name="Parcelamento"
                                classNamePrefix="react-select"
                                defaultValue={cardPaymentOptions[0]}
                                options={cardPaymentOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        )}
                        <Input
                            textTransform="lowercase"
                            name="descricao"
                            label="Descrição"
                        />
                    </div>
                    <div className="twoFieldsGroup">
                        <Input
                            textTransform="lowercase"
                            name="acrescimo"
                            label="Acréscimo"
                        />
                        <Input
                            textTransform="lowercase"
                            name="desconto"
                            label="Desconto"
                        />
                    </div>
                    {currentPaymentForm.value === 5 && (
                        <>
                            <CheckBox
                                label="Bloquear rateio baseado na carência do cartão"
                                name="SS"
                            />
                            <CheckBox
                                label="Bloquear pagamento do rateio aos artistas"
                                name="SS"
                            />
                            <CheckBox
                                label="Adicionar exceções ao bloqueio de pagamento do rateio"
                                name="SS"
                            />
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Artista</th>
                                    </tr>
                                </thead>
                                <tbody />
                            </Table>
                        </>
                    )}
                    {(currentPaymentForm.value === 6 ||
                        currentPaymentForm.value === 7) && (
                        <CheckBox label="Bloquear por senha" name="SS" />
                    )}
                </AddSkillModal.Body>
                <AddSkillModal.Footer>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="button"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="submit"
                        form="form"
                    >
                        Confirmar
                    </button>
                </AddSkillModal.Footer>
            </AddSkillModal>
        </Container>
    );
};

export default CardOperator;
