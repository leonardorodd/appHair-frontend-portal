/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import Input from '../../../components/UnformFields/Input';
import TextArea from '../../../components/UnformFields/TextArea';
import CheckBox from '../../../components/UnformFields/CheckBox';
import MaskedInput from '../../../components/UnformFields/InputMaskd';
import FieldSet from '../../../components/FieldSet';
import Select from '../../../components/UnformFields/Select';

import {
    Container,
    CreateClientModal,
    CreateClientForm,
    SectionButton,
    WeekSchedule,
} from './styles';

interface CheckboxOption {
    id: string;
    value: string;
    label: string;
}

const CreateClient: React.FC = () => {
    const [show, setShow] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const [showCommissionContainer, setShowCommissionContainer] = useState(
        false,
    );
    const [
        showDiferentPriceContainer,
        setShowDiferentPriceContainer,
    ] = useState(false);

    const comissionOptions = [
        { value: 1, label: 'Comissão única' },
        { value: 2, label: 'Por profissional' },
    ];

    const groupOptions = [
        { value: 1, label: 'Assessoria de Noivas' },
        { value: 2, label: 'Barba' },
        { value: 3, label: 'Cabelo' },
        { value: 4, label: 'Depilação' },
        { value: 5, label: 'Estética corporal' },
        { value: 6, label: 'Estética facial' },
        { value: 7, label: 'Manícure e pedícure' },
        { value: 3, label: 'Maquiagem' },
        { value: 4, label: 'Massagem' },
        { value: 5, label: 'Podologia' },
        { value: 6, label: 'Sobrancelha' },
        { value: 7, label: 'Tatuagem' },
    ];

    const checkboxOnlineScheduleptions: CheckboxOption[] = [
        { id: 'agendamentoOnline', value: 'true', label: 'Agendamento online' },
    ];

    const checkboxCanFitIn: CheckboxOption[] = [
        {
            id: 'posibilitaEncaixe',
            value: 'true',
            label: 'Possibilita encaixe',
        },
    ];

    const checkboxDiferentPrice: CheckboxOption[] = [
        {
            id: 'precoDiferenciado',
            value: 'true',
            label: 'Preço Diferenciado',
        },
    ];

    interface IAddress {
        cep: string;
        logradouro: string;
        numero: string;
        bairro: string;
        complemento: string;
        cidade: string;
        estado: string;
    }

    interface IFormData {
        numeroCPFouCNPJ: string;
        razaoSocial: string;
        contato: string;
        telefone: string;
        email: string;
        celular: string;
        observacoes: string;
        endereco: IAddress;
    }

    function handleClose() {
        setShowDiferentPriceContainer(false);
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    const handleCreateClientSubmit: SubmitHandler<IFormData> = data => {
        console.log(data);
    };

    return (
        <Container>
            <button
                className="fibre-button fibre-button--default"
                type="button"
                onClick={handleShow}
            >
                Novo Serviço
            </button>
            <CreateClientModal
                show={show}
                onHide={handleClose}
                className="baseModalStyle"
                backdrop="static"
                size="xl"
            >
                <CreateClientModal.Header>
                    <CreateClientModal.Title>
                        {/*  <MdDvr size={30} />
                        <FaPlus id="plus" size={18} /> */}
                        <h5>Cadastro de Serviço</h5>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    <CreateClientForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <div>
                            <FieldSet title="Dados do Serviço">
                                <div id="group1">
                                    <Select
                                        name="grupoServico"
                                        label="Grupo de serviço"
                                        classNamePrefix="react-select"
                                        defaultValue={{
                                            label: 'Selecione',
                                            value: 0,
                                        }}
                                        options={groupOptions}
                                        isSearchable
                                        blurInputOnSelect
                                        openMenuOnFocus
                                    />
                                    <Input name="servico" label="Serviço" />
                                </div>
                                <Select
                                    name="referenciaTributacao"
                                    label="Referência para tributação"
                                    classNamePrefix="react-select"
                                    defaultValue={{
                                        label: 'Selecione',
                                        value: 0,
                                    }}
                                    options={groupOptions}
                                    isSearchable
                                    blurInputOnSelect
                                    openMenuOnFocus
                                />
                                <TextArea
                                    name="descricaoServico"
                                    label="Descrição do serviço"
                                />
                                <div id="group2">
                                    <Input
                                        name="servico"
                                        label="Preço serviço"
                                    />
                                    <Input
                                        name="servico"
                                        label="Custo serviço"
                                    />
                                    <Input name="servico" label="Duração" />
                                </div>
                                {/*  <CheckBox
                                    options={checkboxOnlineScheduleptions}
                                    name="agendamentoOnline"
                                />
                                <CheckBox
                                    options={checkboxCanFitIn}
                                    name="possibilitaEncaixe"
                                />
                                <CheckBox
                                    options={checkboxDiferentPrice}
                                    name="precoDiferenciado"
                                    onChange={() =>
                                        setShowDiferentPriceContainer(
                                            !showDiferentPriceContainer,
                                        )
                                    }
                                /> */}
                                {showDiferentPriceContainer && (
                                    <>
                                        <WeekSchedule>
                                            <div>
                                                <label>Dia da semana</label>
                                                <button type="button">
                                                    Domingo
                                                </button>
                                                <button type="button">
                                                    Segunda
                                                </button>
                                                <button type="button">
                                                    Terça
                                                </button>
                                                <button type="button">
                                                    Quarta
                                                </button>
                                                <button type="button">
                                                    Quinta
                                                </button>
                                                <button type="button">
                                                    Sexta
                                                </button>
                                                <button type="button">
                                                    Sábado
                                                </button>
                                            </div>
                                            <div>
                                                <label>
                                                    Valor diferenciado
                                                </label>
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                                <MaskedInput
                                                    mask="R$ 99,99"
                                                    name="value"
                                                />
                                            </div>
                                            <div>
                                                <label>Definir horário</label>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                                <div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                    <div>ás</div>
                                                    <MaskedInput
                                                        mask="99:99"
                                                        name="value"
                                                    />
                                                </div>
                                            </div>
                                        </WeekSchedule>
                                    </>
                                )}
                            </FieldSet>
                        </div>
                        <SectionButton
                            type="button"
                            onClick={() =>
                                setShowCommissionContainer(
                                    !showCommissionContainer,
                                )
                            }
                        >
                            {showCommissionContainer
                                ? 'Ocultar comissões'
                                : 'Mostrar comissões'}
                            {showCommissionContainer ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </SectionButton>
                        {showCommissionContainer && (
                            <FieldSet title="Comissões">
                                <Select
                                    name="formaDeComissao"
                                    label="Forma de comissão"
                                />
                                <div> Quando Profissional</div>
                                <div id="group1">
                                    <Input name="tipo" label="Tipo" />
                                    <Input name="comissao" label="Comissão" />
                                </div>
                                <div>Quando Assistente</div>
                                <div id="group1">
                                    <Input name="tipo" label="Tipo" />
                                    <Input name="comissao" label="Comissão" />
                                </div>
                            </FieldSet>
                        )}
                    </CreateClientForm>
                </CreateClientModal.Body>
                <CreateClientModal.Footer>
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
                        Salvar
                    </button>
                </CreateClientModal.Footer>
            </CreateClientModal>
        </Container>
    );
};

export default CreateClient;
