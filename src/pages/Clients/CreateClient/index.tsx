/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef, useEffect } from 'react';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import * as Yup from 'yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';

import Input from '../../../components/UnformFields/Input';
import MaskedInput from '../../../components/UnformFields/InputMask';
import Select from '../../../components/UnformFields/Select';
import DatePicker from '../../../components/UnformFields/DatePicker';
import AvatarInput from '../../../components/UnformFields/AvatarInput';
import brasilStatesAndCities from '../../../utils/brazilianStates.json';
import { cpfMask, cnpjMask } from '../../../utils/masks';

import {
    Container,
    CreateClientModal,
    CreateClientForm,
    FieldSet,
    SectionButton,
} from './styles';
import '../../../styles/customreactselect.css';
import '../../../styles/customreactdatepicker.css';
import { convertToISO8601UTCDateFormat } from '../../../utils/dateUtils';
import apiClient from '../../../services/apiClient';

interface ICreateClientProps {
    saveClient: (client: IFormData) => void;
}

interface IAddress {
    cep: string;
    logradouro: string;
    numero?: string;
    bairro: string;
    complemento: string;
    cidade: string;
    estado: string;
}

export interface IFormData {
    nome: string;
    dataDeNascimento: string;
    sexo: string;
    email: string;
    numeroCPFouCNPJ: string;
    RG?: string;
    avatarImage?: string;
    endereco: IAddress;
    whatsapp: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
    porcentagemDescontoProdutos?: string;
    porcentagemDescontoServicos?: string;
    indocadoPor?: string;
    idArtista1?: string;
    idArtista2?: string;
    coloracaoCabelo?: string;
    tipoDePele?: string;
    tipoDeUnha?: string;
}

interface IAddressapi {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
}

const CreateClient: React.FC<ICreateClientProps> = ({ saveClient }) => {
    const [show, setShow] = useState(false);
    const [addressInfo, setAddressInfo] = useState<IAddressapi>();
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<FormHandles>(null);
    const [showPreferencesContainer, setShowPreferencesContainer] = useState(
        false,
    );
    const [showAddressContainer, setShowAddressContainer] = useState(false);
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cepNumber, setCepNumber] = useState('');
    const [rgNumber, setRgNumber] = useState('');

    const [currentState, setCurrentState] = useState<string | null>(null);

    const affiliationOptions = [
        { value: 1, label: 'Masculino' },
        { value: 2, label: 'Feminino' },
    ];

    const states = brasilStatesAndCities.estados.map(elem => ({
        value: elem.nome,
        label: elem.nome,
        sigla: elem.sigla,
    }));

    const cities = brasilStatesAndCities.estados
        .find(elem => elem.nome === currentState)
        ?.cidades.map(elem => ({
            value: elem,
            label: elem,
        }));

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function getAddressInfo(cep: string) {
        setLoading(true);
        apiClient
            .get<IAddressapi>(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(response => {
                formRef.current?.setFieldError('address.cep', '');
                formRef.current?.setData({
                    address: {
                        bairro: response.data.neighborhood,
                        logradouro: response.data.street,
                        estado: states.filter(
                            estado => estado.sigla === response.data.state,
                        ),
                        cidade: cities?.filter(
                            cidade => cidade.label === response.data.city,
                        ),
                    },
                });
                setCurrentState(
                    formRef.current?.getFieldValue('address.estado')[0].label,
                );
            })
            .catch(error => {
                let errorMessage = '';

                if (error.status === 404) {
                    errorMessage = 'CEP não encontrado!';
                } else {
                    errorMessage = 'O preenchimento automático está offline';
                }

                formRef.current?.setData({
                    address: {
                        bairro: '',
                        logradouro: '',
                    },
                });

                formRef.current?.setFieldError('address.cep', errorMessage);
            })
            .finally(() => setLoading(false));
    }

    const handleCreateClientSubmit: SubmitHandler<IFormData> = async data => {
        data.dataDeNascimento = convertToISO8601UTCDateFormat(
            new Date(data.dataDeNascimento),
        );

        console.log(data);
        /*         formRef.current?.reset();
         */ setTipoPessoa('');

        try {
            // Remove all previous errors
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome: Yup.string().required('O nome é obrigatório!'),
                email: Yup.string()
                    .email('O e-mail precisa ser válido.')
                    .required('O email é obrigatório!'),
                whatsapp: Yup.string().required(
                    'O número de celular é obrigatório!',
                ),
                numeroCPFouCNPJ: Yup.string()
                    .test(
                        'valid',
                        'CPF/CNPJ inválido',
                        valor =>
                            cpf.isValid(valor || '') ||
                            cnpj.isValid(valor || ''),
                    )
                    .required('CPF/CNPJ é obrigatório!'),
                /*  sexo: Yup.string()
                    .matches(/^(?!Selecione$)/g, 'Informe o sexo')
                    .required('O sexo é obrigatório!'), */
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            // Validation passed
            saveClient(data);
        } catch (err) {
            const validationErrors: Record<string, string> = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path || ''] = error.message;
                });
                formRef?.current?.setErrors(validationErrors);
            }
        }
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
                dialogClassName="modal-90w"
                backdrop="static"
            >
                <CreateClientModal.Header>
                    <CreateClientModal.Title>
                        <p>Cadastro de Cliente</p>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    <CreateClientForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <FieldSet>Informações Básicas</FieldSet>
                        <div id="group1">
                            <div>
                                <Input name="nome" label="Nome Completo*" />
                                <div>
                                    <div>
                                        <DatePicker
                                            label="Data de nascimento"
                                            name="dataDeNascimento"
                                        />
                                        <Select
                                            label="Sexo"
                                            name="sexo"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            options={affiliationOptions}
                                            isSearchable={false}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            textTransform="lowercase"
                                            name="email"
                                            label="E-mail"
                                        />
                                        <Input
                                            name="numeroCPFouCNPJ"
                                            label="CPF/CNPJ"
                                            value={
                                                tipoPessoa.length > 14
                                                    ? cnpjMask(tipoPessoa)
                                                    : cpfMask(tipoPessoa)
                                            }
                                            onChange={e =>
                                                setTipoPessoa(e.target.value)
                                            }
                                        />
                                        <MaskedInput
                                            mask="99.999.999-9"
                                            name="RG"
                                            label="RG"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AvatarInput
                                    name="avatarImage"
                                    label="Foto do cliente"
                                />
                            </div>
                        </div>
                        <FieldSet>Redes Sociais</FieldSet>
                        <div id="group4">
                            <MaskedInput
                                mask="(99) 9 9999-9999"
                                name="whatsapp"
                                label="Whatsapp"
                                labelIcon={FaWhatsapp}
                            />
                            <Input
                                textTransform="lowercase"
                                name="instagram"
                                labelIcon={FaInstagram}
                                label="Instagram"
                            />
                            <Input
                                textTransform="lowercase"
                                name="twitter"
                                labelIcon={FaTwitter}
                                label="Twitter"
                            />
                            <Input
                                textTransform="lowercase"
                                name="tiktok"
                                labelIcon={IoLogoTiktok}
                                label="TikTok"
                            />
                            <Input
                                textTransform="lowercase"
                                name="facebook"
                                labelIcon={FaFacebook}
                                label="Facebook"
                            />
                        </div>
                        <SectionButton
                            type="button"
                            onClick={() =>
                                setShowAddressContainer(!showAddressContainer)
                            }
                        >
                            {showAddressContainer
                                ? 'Ocultar Endereço'
                                : 'Mostrar Endereço'}
                            {showAddressContainer ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </SectionButton>
                        {showAddressContainer && (
                            <>
                                <FieldSet>Endereço</FieldSet>
                                <Scope path="address">
                                    <div id="group2">
                                        <MaskedInput
                                            mask="99999-999"
                                            name="cep"
                                            showLoadingIcon
                                            loading={loading}
                                            label="CEP"
                                            disabled={loading}
                                            onChangeCallback={event => {
                                                if (
                                                    RegExp(
                                                        /^\d{5}-\d{3}$/g,
                                                    ).test(event.target.value)
                                                ) {
                                                    getAddressInfo(
                                                        event.target.value,
                                                    );
                                                }
                                            }}
                                        />
                                        <Input
                                            name="logradouro"
                                            label="Logradouro"
                                            disabled={loading}
                                        />
                                        <Input name="numero" label="Número" />
                                        <Input
                                            name="bairro"
                                            label="Bairro"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div id="group3">
                                        <Input
                                            name="complemento"
                                            label="Complemento"
                                        />
                                        <Select
                                            label="Estado"
                                            name="estado"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            onChange={value =>
                                                setCurrentState(value?.value)
                                            }
                                            options={states}
                                            isSearchable={false}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                        <Select
                                            name="cidade"
                                            label="Cidade"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            isDisabled={currentState === ''}
                                            options={cities}
                                            isSearchable={false}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                    </div>
                                </Scope>
                            </>
                        )}
                        <SectionButton
                            type="button"
                            onClick={() =>
                                setShowPreferencesContainer(
                                    !showPreferencesContainer,
                                )
                            }
                        >
                            {showPreferencesContainer
                                ? 'Ocultar Preferências'
                                : 'Mostrar Preferências'}
                            {showPreferencesContainer ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </SectionButton>
                        {showPreferencesContainer && (
                            <>
                                <FieldSet>Preferências</FieldSet>
                                <div id="group5">
                                    <Input
                                        name="idArtista1"
                                        label="Artista de Preferência 1"
                                    />
                                    <Input
                                        textTransform="capitalize"
                                        name="porcentagemDescontoProdutos"
                                        label="Desconto em Produtos (%)"
                                    />
                                    <Input
                                        name="indocadoPor"
                                        label="Indicado por"
                                    />
                                    <Input
                                        name="coloracaoCabelo"
                                        label="Coloração Cabelo"
                                    />
                                </div>

                                <div id="group6">
                                    <Input
                                        name="idArtista2"
                                        label="Artista de Preferência 2"
                                    />
                                    <Input
                                        name="porcentagemDescontoServicos"
                                        label="Desconto em Serviços (%)"
                                    />

                                    <Input
                                        name="tipoDePele"
                                        label="Tipo de Pele"
                                    />
                                    <Input
                                        name="tipoDeUnha"
                                        label="Tipo de Unha"
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
                    >
                        Salvar
                    </button>
                </CreateClientModal.Footer>
            </CreateClientModal>
        </Container>
    );
};

export default CreateClient;
