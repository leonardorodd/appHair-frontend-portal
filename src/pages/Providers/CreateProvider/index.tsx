/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Select from '../../../components/UnformFields/Select';
import Input from '../../../components/UnformFields/Input';
import { cpfMask, cnpjMask, phoneMask, cepMask } from '../../../utils/masks';

import { Container, CreateClientModal, CreateClientForm } from './styles';

const CreateClient: React.FC = () => {
    const [show, setShow] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cellPhoneNumber, setCellPhoneNumber] = useState('');
    const [cepNumber, setCepNumber] = useState('');

    const states = [
        { value: 'AL', label: 'Alagoas' },
        { value: 'AC', label: 'Acre' },
        { value: 'AP', label: 'Amapá' },
        { value: 'AM', label: 'Amazonas' },
        { value: 'BA', label: 'Bahia' },
        { value: 'CE', label: 'Ceará' },
        { value: 'DF', label: 'Distrito Federal' },
        { value: 'ES', label: 'Espírito Santo' },
        { value: 'GO', label: 'Goías' },
        { value: 'MA', label: 'Maranhão' },
        { value: 'MT', label: 'Mato Grosso' },
        { value: 'MS', label: 'Mato Grosso do Sul' },
        { value: 'MG', label: 'Minas Gerais' },
        { value: 'PA', label: 'Pará' },
        { value: 'PB', label: 'Paraíba' },
        { value: 'PR', label: 'Paraná' },
        { value: 'PE', label: 'Pernambuco' },
        { value: 'PI', label: 'Piauí' },
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'RN', label: 'Rio Grande do Norte' },
        { value: 'RS', label: 'Rio Grande do Sul' },
        { value: 'RO', label: 'Rondônia' },
        { value: 'RR', label: 'Roraíma' },
        { value: 'SC', label: 'Santa Catarina' },
        { value: 'SP', label: 'São Paulo' },
        { value: 'SE', label: 'Sergipe' },
        { value: 'TO', label: 'Tocantins' },
    ];

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
                Novo Fornecedor
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
                        <h5>Adicionar novo fornecedor</h5>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    <CreateClientForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <Input name="razaoSocial" label="Razão social" />

                        <div id="rowTwo">
                            <Input
                                name="numeroCPFouCNPJ"
                                label="CPF/CNPJ"
                                value={
                                    tipoPessoa.length > 14
                                        ? cnpjMask(tipoPessoa)
                                        : cpfMask(tipoPessoa)
                                }
                                onChange={e => setTipoPessoa(e.target.value)}
                            />
                            <Input name="email" label="E-mail" />
                        </div>

                        <div id="rowOne">
                            <Input name="contato" label="Contato" />
                            <Input
                                name="telefone"
                                label="Telefone"
                                onChange={e => setPhoneNumber(e.target.value)}
                                value={phoneMask(phoneNumber)}
                            />
                            <Input
                                name="celular"
                                label="Celular"
                                onChange={e =>
                                    setCellPhoneNumber(e.target.value)
                                }
                                value={phoneMask(cellPhoneNumber)}
                            />
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
                                    <Input
                                        name="cep"
                                        label="CEP"
                                        onChange={e =>
                                            setCepNumber(e.target.value)
                                        }
                                        value={cepMask(cepNumber)}
                                    />
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
                                    <Select
                                        label="Estado"
                                        name="estado"
                                        classNamePrefix="react-select"
                                        defaultValue={{
                                            label: 'Selecione',
                                            value: 0,
                                        }}
                                        options={states}
                                        isSearchable={false}
                                        blurInputOnSelect
                                        openMenuOnFocus
                                    />
                                </div>
                            </>
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
