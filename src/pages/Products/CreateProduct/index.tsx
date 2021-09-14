/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { brazilianCurrencyMask } from '../../../utils/masks';
import Input from '../../../components/UnformFields/Input';
import CheckBox from '../../../components/UnformFields/CheckBox';
import FieldSet from '../../../components/FieldSet';
import Select from '../../../components/UnformFields/Select';

import {
    Container,
    CreateClientModal,
    CreateClientForm,
    SectionButton,
} from './styles';

interface CheckboxOption {
    id: string;
    value: string;
    label: string;
}

const CreateClient: React.FC = () => {
    const [show, setShow] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const [showDiscountContainer, setShowDiscountContainer] = useState(false);
    const [showCommissionContainer, setShowCommissionContainer] = useState(
        false,
    );
    const [showConfigContainer, setShowConfigContainer] = useState(false);

    const typeComissionOptions = [
        {
            label: 'Percentual',
            value: 'percentual',
        },
        {
            label: 'Valor',
            value: 'valor',
        },
    ];

    const comissionOptions = [
        { value: 1, label: 'Comissão única' },
        { value: 2, label: 'Por profissional' },
    ];

    const groupOptions = [
        { value: 1, label: 'Cabelo' },
        { value: 2, label: 'Barba' },
        { value: 3, label: 'Maquiagem' },
        { value: 4, label: 'Manicure e Pedicure' },
        { value: 5, label: 'Estética (facial ou corporal)' },
        { value: 6, label: 'Massagem' },
        { value: 7, label: 'Sobrancelhas' },
    ];

    const checkboxProfessionalOptions: CheckboxOption[] = [
        {
            id: 'descontarProfessional',
            value: 'Descontar do Profissional',
            label: 'Descontar do Profissional',
        },
    ];

    const checkboxClientOptions: CheckboxOption[] = [
        {
            id: 'descontarClient',
            value: 'Descontar do Cliente',
            label: 'Descontar do Cliente',
        },
    ];

    const checkboxProductForSale: CheckboxOption[] = [
        {
            id: 'produtoParaVenda',
            value: 'Produto para Venda',
            label: 'Produto para Venda',
        },
    ];

    const checkboxProductForConsuption: CheckboxOption[] = [
        {
            id: 'produtoParaConsumo',
            value: 'Produto para Consumo',
            label: 'Produto para Consumo',
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
                <span>Adicionar</span>
                <FaPlus />
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
                        <p>Cadastro de Produto</p>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    <CreateClientForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <div>
                            <div>
                                <FieldSet title="Dados do Produto">
                                    <Input name="descricao" label="Descrição" />
                                    <div id="group1">
                                        <Select name="marca" label="Marca" />
                                        <Input name="linha" label="Linha" />
                                    </div>
                                    <div id="group1">
                                        <Select
                                            name="grupo"
                                            label="Grupo"
                                            options={groupOptions}
                                        />
                                        <Select name="tipo" label="Tipo" />
                                    </div>
                                </FieldSet>

                                <FieldSet title="Fornecedor">
                                    <Select
                                        name="nomefornecedor"
                                        label="Nome"
                                    />
                                    <Input
                                        name="tempodeentrega"
                                        label="Tempo médio de Entrega (dias)"
                                    />
                                    <Input
                                        name="codigoDoFornecedor"
                                        label="Código do fornecedor"
                                    />
                                </FieldSet>
                            </div>
                            <div>
                                <FieldSet title="Comissões">
                                    <Select
                                        name="formaDeComissao"
                                        label="Forma de comissão"
                                    />
                                    <div> Quando Profissional</div>
                                    <div id="group1">
                                        <Select
                                            name="tipoProfissional"
                                            label="Tipo"
                                            defaultValue={
                                                typeComissionOptions[0]
                                            }
                                            options={typeComissionOptions}
                                        />
                                        <Input
                                            name="comissao"
                                            label="Comissão"
                                        />
                                    </div>
                                    <div>Quando Assistente</div>
                                    <div id="group1">
                                        <Select
                                            name="tipoAssitente"
                                            label="Tipo"
                                            defaultValue={
                                                typeComissionOptions[0]
                                            }
                                            options={typeComissionOptions}
                                        />
                                        <Input
                                            name="comissao"
                                            label="Comissão"
                                        />
                                    </div>
                                </FieldSet>
                                <FieldSet title="Descontos">
                                    <div id="group1">
                                        {/* <CheckBox
                                            options={
                                                checkboxProfessionalOptions
                                            }
                                            name="decontardoprofissional"
                                        />
                                        <CheckBox
                                            options={checkboxClientOptions}
                                            name="decontardocliente"
                                        /> */}
                                    </div>
                                    <div id="group1">
                                        <Input
                                            name="usoInterno"
                                            label="Uso Interno"
                                        />
                                        <Input
                                            name="usoProprio"
                                            label="Uso Próprio"
                                        />
                                    </div>
                                </FieldSet>
                            </div>
                        </div>
                        <SectionButton
                            type="button"
                            onClick={() =>
                                setShowConfigContainer(!showConfigContainer)
                            }
                        >
                            {showConfigContainer
                                ? 'Ocultar configurações do produto'
                                : 'Mostrar configurações do produto'}
                            {showConfigContainer ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </SectionButton>
                        <div>
                            {showConfigContainer && (
                                <>
                                    <div>
                                        <FieldSet title="Finalidade">
                                            <div id="group1">
                                                {/*  <CheckBox
                                                    options={
                                                        checkboxProductForSale
                                                    }
                                                    name="produtoParaVenda"
                                                />
                                                <CheckBox
                                                    options={
                                                        checkboxProductForConsuption
                                                    }
                                                    name="produtoParaConsumo"
                                                /> */}
                                            </div>
                                            <div id="group1">
                                                <Input
                                                    name="valorDaVenda"
                                                    label="Valor da Venda"
                                                />
                                                <Input
                                                    name="descontoMáximoPermitido"
                                                    label="Desconto Máximo Permitido"
                                                />
                                            </div>
                                        </FieldSet>

                                        <FieldSet title="Estoque Mínimo">
                                            <Input
                                                name="estoqueMinimo"
                                                label="Estoque mínimo (unidades)"
                                            />
                                            <Input
                                                name="valorConvertido"
                                                label="Valor Convertido"
                                            />
                                        </FieldSet>
                                    </div>
                                    <FieldSet title="Registro de Saída">
                                        <Select
                                            name="registrarSaidaPor"
                                            label="Registrar saída por"
                                        />
                                        <div id="group1">
                                            <Select
                                                name="conversao"
                                                label="Informe a conversão"
                                            />
                                            <Input
                                                name="possui"
                                                label="Possui (cm)"
                                            />
                                        </div>
                                    </FieldSet>
                                </>
                            )}
                        </div>
                    </CreateClientForm>
                </CreateClientModal.Body>
                <CreateClientModal.Footer>
                    <button
                        className="fibre-button"
                        type="button"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                    <button className="fibre-button" type="submit" form="form">
                        Salvar
                    </button>
                </CreateClientModal.Footer>
            </CreateClientModal>
        </Container>
    );
};

export default CreateClient;
