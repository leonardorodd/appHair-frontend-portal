import React, { useState } from 'react';
import Input from '../../../../components/UnformFields/Input';
import Select from '../../../../components/UnformFields/Select';
import DatePicker from '../../../../components/UnformFields/DatePicker';
import { Container, AddSkillModal } from './styles';

const CardOperator: React.FC = () => {
    const [show, setShow] = useState(false);

    const admOptions = [
        { value: 1, label: 'Cielo' },
        { value: 2, label: 'Stone' },
        { value: 3, label: 'Pagseguro' },
        { value: 4, label: 'GetNet' },
        { value: 5, label: 'Rede' },
        { value: 6, label: 'Safra' },
    ];

    const brandOptions = [
        { value: 1, label: 'Amex' },
        { value: 2, label: 'Elo' },
        { value: 3, label: 'Hiper' },
        { value: 4, label: 'Mastercard' },
        { value: 5, label: 'Safra' },
        { value: 6, label: 'Visa' },
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
                Exceções
            </button>
            <AddSkillModal
                show={show}
                onHide={handleClose}
                size="sml"
                className="baseModalStyle"
                backdrop="static"
            >
                <AddSkillModal.Header>
                    <AddSkillModal.Title>
                        <p>Inclusão de taxas</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <div className="treeFieldsgroup">
                        <Select
                            label="Administradora"
                            name="administradora"
                            classNamePrefix="react-select"
                            defaultValue={{
                                label: 'Selecione',
                                value: 0,
                            }}
                            options={admOptions}
                            isSearchable={false}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        <Select
                            label="Bandeira"
                            name="bandeira"
                            classNamePrefix="react-select"
                            defaultValue={{
                                label: 'Selecione',
                                value: 0,
                            }}
                            options={brandOptions}
                            isSearchable={false}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        <Select
                            label="Operação"
                            name="operacao"
                            classNamePrefix="react-select"
                            defaultValue={{
                                label: 'Selecione',
                                value: 0,
                            }}
                            options={cardTransactions}
                            isSearchable={false}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                    </div>
                    <div className="treeFieldsgroup">
                        <Input
                            textTransform="lowercase"
                            name="email"
                            label="Taxa da operação"
                        />
                        <Input
                            textTransform="lowercase"
                            name="email"
                            label="Taxa de antecipação de crédito"
                        />
                        <Input
                            textTransform="lowercase"
                            name="email"
                            label="Qtde dias a compensar"
                        />
                    </div>
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
