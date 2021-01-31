/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../../../components/UnformFields/Input';

import { Container, CreateClientModal, CreateClientForm } from './styles';

const CreateClient: React.FC = () => {
    const [show, setShow] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const [showAddressContainer, setShowAddressContainer] = useState(false);

    interface address {
        cep: string;
        logradouro: string;
        numero: string;
        bairro: string;
        complemento: string;
        cidade: string;
        estado: string;
    }

    interface FormData {
        numeroCPFouCNPJ: string;
        razaoSocial: string;
        contato: string;
        telefone: string;
        email: string;
        celular: string;
        observacoes: string;
        endereco: address;
    }

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    const handleCreateClientSubmit: SubmitHandler<FormData> = data => {
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
                        <h5>Adicionar novo serviço</h5>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    {/*  <CreateClientForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <Input name="numeroCPFouCNPJ" label="CNPJ/CPF" />
                        <Input name="razaoSocial" label="Razão social" />
                        <Input name="email" label="E-mail" />

                        <div id="rowOne">
                            <Input name="contato" label="Contato" />
                            <Input name="telefone" label="Telefone" />
                            <Input name="celular" label="Celular" />
                        </div>
                        <Input name="observacoes" label="Observações" />

                        <button
                            type="button"
                            onClick={() =>
                                setShowAddressContainer(!showAddressContainer)
                            }
                        >
                            {showAddressContainer
                                ? 'Ocultar Endereço'
                                : 'Mostrar Endereço'}
                        </button>
                        {showAddressContainer && (
                            <>
                                <div id="rowTree">
                                    <Input name="cep" label="CEP" />
                                    <Input
                                        name="logradouro"
                                        label="Logradouro"
                                    />
                                    <Input name="numero" label="Número" />
                                    <Input name="bairro" label="Bairro" />
                                </div>

                                <div id="rowFour">
                                    <Input
                                        name="complemento"
                                        label="Complemento"
                                    />
                                    <Input name="cidade" label="Cidade" />
                                    <Input name="estado" label="Estado" />
                                </div>
                            </>
                        )}
                    </CreateClientForm> */}
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
                        onClick={handleClose}
                    >
                        Salvar
                    </button>
                </CreateClientModal.Footer>
            </CreateClientModal>
        </Container>
    );
};

export default CreateClient;
