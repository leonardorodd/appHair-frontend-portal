/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-bitwise */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef, useEffect } from 'react';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import * as Yup from 'yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import { Table } from 'react-bootstrap';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import Input from '../../../components/UnformFields/Input';
import MaskedInput from '../../../components/UnformFields/InputMaskd';
import DatePicker from '../../../components/UnformFields/DatePicker';
import Select from '../../../components/UnformFields/Select';
import CheckBox from '../../../components/UnformFields/CheckBox';
import FieldSet from '../../../components/FieldSet';
import AvatarInput from '../../../components/UnformFields/AvatarInput';
import AddSkill from './AddSkills';
import WebCam from '../../../components/WebcamCapture';
import brasilStatesAndCities from '../../../utils/brazilianStates.json';
import { cpfMask, cnpjMask } from '../../../utils/masks';

import { Container, CreateArtistForm, WeekScheduleContainer, DayScheduleItem, PageTitle, PageFooter, SectionButton } from './styles';
import '../../../styles/customreactselect.css';
import '../../../styles/customreactdatepicker.css';
import { convertToISO8601UTCDateFormat } from '../../../utils/dateUtils';
import apiClient from '../../../services/apiClient';
import { AddSkillModal } from './AddSkills/styles';

interface ICreateProviderProps {
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
    apelido: string;
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

interface CheckboxOption {
    id: string;
    value: string;
    label: string;
}

interface SelectOption {
    value: string;
    label: string;
}

const CreateProvider: React.FC = () => {
    const [show, setShow] = useState(false);
    const [addressInfo, setAddressInfo] = useState<IAddressapi>();
    const formRef = useRef<FormHandles>(null);
    const [showPreferencesContainer, setShowPreferencesContainer] = useState(
        false,
    );
    const [currentUf, setCurrentUf] = useState<string | undefined>();
    const [showAddressContainer, setShowAddressContainer] = useState(false);
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cepNumber, setCepNumber] = useState('');
    const [banks, setBanks] = useState('');
    const [cepLoading, setCepLoading] = useState<boolean>(false);
    const [showEndOfWorkDate, setShowEndOfWorkDate] = useState(false);
    const [currentCities, setCurrentCities] = useState<Array<SelectOption>> ([]);
    const [currentState, setCurrentState] = useState<string | null>(null);


    const genderOptions = [
        { value: 1, label: 'Masculino' },
        { value: 2, label: 'Feminino' },
    ];

    const typeOfBond = [
        { value: 1, label: 'Eventual' },
        { value: 2, label: 'Regime CLT' },
        { value: 3, label: 'Salão parceiro' },
    ];

      const skillsList = [
        { value: 1, label: 'Barba' },
        { value: 2, label: 'Cabelo' },
        { value: 3, label: 'Manícure e pedícure' },
    ];

    const comissionTypeOptions = [
        {value: 1, label: 'Percentual (%)'},
        {value: 2, label: 'Valor (R$)'}
    ];

    const checkboxCanFitIn: CheckboxOption[] = [
        {
            id: 'posibilitaEncaixe',
            value: 'true',
            label: 'Possibilita encaixe',
        },
    ];

    const checkboxShowInschedule: CheckboxOption[] = [
        {
            id: 'mostrarNaAgenda',
            value: 'true',
            label: 'Mostrar na agenda',
        },
    ];

    const checkboxFiredProfessional: CheckboxOption[] = [
        {
            id: 'profissionalDemitido',
            value: 'true',
            label: 'Profissional desligado',
        },
    ];

    useEffect(() => {
        console.log(currentUf);
        /* setCurrentCities(brasilStatesAndCities.estados.filter(uf => uf.sigla === currentUf).map(elem => ({
        value: elem.nome,
        label: elem.nome,
    }))) */
    }, [currentUf]);

    const states = brasilStatesAndCities.estados.map(elem => ({
        value: elem.nome,
        label: elem.nome,
        sigla: elem.sigla,
    }));


    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

     function getAddressInfo(cep: string) {
        setCepLoading(true);
        apiClient
            .get<IAddressapi>(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(response => {
                setCurrentUf(response.data.state);
                formRef.current?.setFieldError('address.cep', '');
                formRef.current?.setData({
                    address: {
                        bairro: response.data.neighborhood,
                        logradouro: response.data.street,
                    },
                });
            })
            .catch(error => {
                let errorMessage = 'O preenchimento automático está offline';

                if (error.status === 404) {
                    errorMessage = 'CEP não encontrado!';
                }

                formRef.current?.setData({
                    address: {
                        bairro: '',
                        logradouro: '',
                    },
                });

                formRef.current?.setFieldError('address.cep', errorMessage);
            })
            .finally(() => setCepLoading(false));
    }

    const handleCreateClientSubmit: SubmitHandler<IFormData> = async data => {
        /*         formRef.current?.reset();
         */ setTipoPessoa('');

        console.log(data);

        try {
            // Remove all previous errors
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                razaoSocial: Yup.string().required(
                    'A razão social é obrigatória!',
                ),
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
                    .required('CPF é obrigatório!'),
                /*  sexo: Yup.string()
                    .matches(/^(?!Selecione$)/g, 'Informe o sexo')
                    .required('O sexo é obrigatório!'), */
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            // Validation passed
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
            <PageTitle>
                <p>Cadastro de artista</p>
            </PageTitle>
            <CreateArtistForm
                id="form"
                onSubmit={handleCreateClientSubmit}
                ref={formRef}
            >
                <FieldSet title="Informações Básicas">
                    <div>
                        <div className="fourFieldsGroup">
                            <Input name="nome" label="Nome*" />
                            <Input name="apelido" label="Apelido" />
                            <Input
                                name="numeroCPFouCNPJ"
                                label="CPF"
                                value={cpfMask(tipoPessoa)}
                                onChange={e => setTipoPessoa(e.target.value)}
                            />
                            <Select
                                label="Sexo"
                                name="sexo"
                                classNamePrefix="react-select"
                                placeholder="Selecione o sexo"
                                defaultValue={{
                                label: 'Selecione o sexo',
                                value: 0,
                            }}
                                options={genderOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                        <div className="fourFieldsGroup">
                            <MaskedInput
                                mask="(99) 9999-9999"
                                name="telefone"
                                label="Telefone"
                            />
                            <MaskedInput
                                mask="(99) 9 9999-9999"
                                name="celular"
                                label="Celular"
                            />
                            <Input name="email" label="E-mail" textTransform="lowercase" />
                            <DatePicker
                                label="Data de nascimento"
                                name="dataDeNascimento"
                            />
                        </div>
                        <Select
                            name="tipoDeVinculo"
                            label="Tipo de vínculo"
                            classNamePrefix="react-select"
                            defaultValue={{
                            label: 'Selecione o tipo de vínculo',
                            value: 0,
                        }}
                            options={typeOfBond}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                    </div>
                    <div>
                        <AvatarInput
                            name="avatarImage"
                            label="Foto do artista"
                        />
                    </div>
                </FieldSet>
                <FieldSet title="Informações Complementares">
                    <div className="fourFieldsGroup">
                        <DatePicker
                            label="Início do trabalho"
                            name="dataDeNascimento"
                        />
                        <DatePicker
                            label="Término do trabalho"
                            name="dataTerminoTrabalho"
                            disabled={!showEndOfWorkDate}
                        />
                        <Select
                            name="funcao"
                            label="Função"
                            classNamePrefix="react-select"
                            defaultValue={{
                                label: 'Escolha uma função',
                                value: 0,
                            }}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        <Select
                            name="funcao"
                            label="Perfil de permissões"
                            classNamePrefix="react-select"
                            defaultValue={{
                                label: 'Selecione',
                                value: 0,
                            }}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        <MaskedInput
                            label="Remuneração combinada"
                            mask="R$ 9.999,99"
                            name="value"
                        />

                    </div>
                    <div className="checkboxGroup">
                        <CheckBox
                            name="profissionalDesligado"
                            label="Profissional desligado"
                            onChangeCallback={() => {
                            formRef.current?.clearField('dataTerminoTrabalho');
                            setShowEndOfWorkDate(!showEndOfWorkDate)
                        }}
                        />
                        <CheckBox
                            name="possibilitaEncaixe"
                            label="Possibilita encaixe"
                        />
                        <CheckBox
                            name="mostrarNaAgenda"
                            label="Mostrar na agenda"
                        />
                    </div>
                </FieldSet>
                <FieldSet title="Endereço">
                    <Scope path="address">
                        <div className="fourFieldsGroup">
                            <MaskedInput
                                mask="99999-999"
                                name="cep"
                                showLoadingIcon
                                loading={cepLoading}
                                label="CEP"
                                disabled={cepLoading}
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
                                disabled={cepLoading}
                            />
                            <Input name="numero" label="Número" />
                            <Input
                                name="bairro"
                                label="Bairro"
                                disabled={cepLoading}
                            />
                        </div>
                        <div className="treeFieldsgroup">
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
                                onChange={value => {
                                                    setCurrentUf(value?.value);
                                                   /*  formRef.current?.clearField(
                                                        'address.cidade',
                                                    ); */
                                                }}
                                options={states}
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
                                options={currentCities}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                    </Scope>
                </FieldSet>
                <FieldSet title="Horário de trabalho">
                    <AddSkill />
                    <DayScheduleItem>
                        <CheckBox
                            name="sabado"
                            label="Informar um horário único"
                        />
                        <p>Horário</p>
                        <div>
                            <MaskedInput mask="99:99" name="value" />
                            às
                            <MaskedInput mask="99:99" name="value" />
                        </div>
                        <CheckBox
                            name="sabado"
                            label="Marcar todos os dias"
                        />
                    </DayScheduleItem>
                    <WeekScheduleContainer>
                        <DayScheduleItem>
                            <CheckBox
                                name="domingo"
                                label="Domingo"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox
                                name="segunda"
                                label="Segunda"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox
                                name="terca"
                                label="Terça"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>

                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox
                                name="quarta"
                                label="Quarta"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox
                                name="quinta"
                                label="Quinta"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox
                                name="sexta"
                                label="Sexta"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                        <DayScheduleItem>
                            <CheckBox
                                name="sabado"
                                label="Sábado"
                            />
                            <p>Horário</p>
                            <div>
                                <MaskedInput mask="99:99" name="value" />
                                às
                                <MaskedInput mask="99:99" name="value" />
                            </div>
                        </DayScheduleItem>
                    </WeekScheduleContainer>
                </FieldSet>
                <FieldSet title="Habilidades">
                    <Select
                        label="Filtrar por categoria"
                        name="categoria"
                        classNamePrefix="react-select"
                        placeholder="Selecione uma categoria"
                        defaultValue={{
                                label: 'Selecione uma categoria',
                                value: 0,
                            }}
                        options={skillsList}
                        isSearchable={false}
                        blurInputOnSelect
                        openMenuOnFocus
                    />
                    <Table responsive>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Nome do serviço</th>
                                <th>Tempo de serviço</th>
                                <th>Tipo de comissão</th>
                                <th>
                                    Margem de comissão
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <CheckBox
                                        name="quinta"
                                    />
                                </td>
                                <td>Barba com pezinho</td>
                                <td>45min</td>
                                <td>
                                    <Select
                                        name="tipoDeComissao"
                                        classNamePrefix="react-select"
                                        defaultValue={comissionTypeOptions[0]}
                                        options={comissionTypeOptions}
                                        blurInputOnSelect
                                        openMenuOnFocus
                                    />
                                </td>
                                <td>
                                    <MaskedInput name="valorComissão" mask="R$ 9.99" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CheckBox
                                        name="quinta"
                                    />
                                </td>
                                <td>Barba completa</td>
                                <td>40min</td>
                                <td>
                                    <Select
                                        name="tipoDeComissao"
                                        classNamePrefix="react-select"
                                        defaultValue={comissionTypeOptions[0]}
                                        options={comissionTypeOptions}
                                        blurInputOnSelect
                                        openMenuOnFocus
                                    />
                                </td>
                                <td>
                                    <MaskedInput name="valorComissão" mask="R$ 9.99" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CheckBox
                                        name="quinta"
                                    />
                                </td>
                                <td>Barba desenhada</td>
                                <td>40min</td>
                                <td>
                                    <Select
                                        name="tipoDeComissao"
                                        classNamePrefix="react-select"
                                        defaultValue={comissionTypeOptions[0]}
                                        options={comissionTypeOptions}
                                        blurInputOnSelect
                                        openMenuOnFocus
                                    />
                                </td>
                                <td>
                                    <MaskedInput name="valorComissão" mask="R$ 9.99" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </FieldSet>
            </CreateArtistForm>
            <PageFooter>

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


            </PageFooter>
        </Container>
    );
};

export default CreateProvider;
