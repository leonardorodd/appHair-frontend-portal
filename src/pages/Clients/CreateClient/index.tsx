/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../../../components/UnformFields/Input';
import Select from '../../../components/UnformFields/Select';
import DatePicker from '../../../components/UnformFields/DatePicker';
import AvatarInput from '../../../components/UnformFields/AvatarInput';
import {
    cpfMask,
    cnpjMask,
    phoneMask,
    cepMask,
    rgMask,
} from '../../../utils/masks';

import { Container, CreateClientModal, CreateClientForm } from './styles';
import '../../../styles/customreactselect.css';
import '../../../styles/customreactdatepicker.css';

const CreateClient: React.FC = () => {
    const [show, setShow] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const [showAddressContainer, setShowAddressContainer] = useState(false);
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cepNumber, setCepNumber] = useState('');
    const [rgNumber, setRgNumber] = useState('');

    const affiliationOptions = [
        { value: 1, label: 'Masculino' },
        { value: 2, label: 'Feminino' },
    ];

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
        nome: string;
        dataDeNascimento: string;
        numeroCPFouCNPJ: string;
        email: string;
        celular: string;
        sexo: string;
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
                Novo Cliente
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
                        <h5>Adicionar novo cliente</h5>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    <CreateClientForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <div id="rowNome">
                            <Input name="nome" label="Nome Completo" />
                            <AvatarInput
                                name="avatarImage"
                                label="Foto do cliente"
                            />
                        </div>
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
                        <div id="rowFourElements">
                            <Input
                                name="Whatsapp"
                                label="Whatsapp"
                                onChange={e => setPhoneNumber(e.target.value)}
                                value={phoneMask(phoneNumber)}
                            />
                            <Input name="Instagram" label="Instagram" />
                            <Input name="Twitter" label="Twitter" />
                            <Input name="Facebook" label="Facebook" />
                        </div>

                        <div id="rowOne">
                            <DatePicker
                                label="Data de nascimento"
                                name="dataDeNascimento"
                            />
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
                            <Input
                                name="RG"
                                label="RG"
                                onChange={e => setRgNumber(e.target.value)}
                                value={rgMask(rgNumber)}
                            />
                        </div>
                        <div id="rowTwo">
                            <Input name="email" label="E-mail" />
                            <Select
                                label="Sexo"
                                name="sexo"
                                classNamePrefix="react-select"
                                defaultValue={affiliationOptions[0]}
                                options={affiliationOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
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
