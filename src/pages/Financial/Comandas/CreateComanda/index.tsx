/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef, useEffect } from 'react';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaPlus,
} from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowDown,
    MdRemoveRedEye,
} from 'react-icons/md';
import * as Yup from 'yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import { Table } from 'react-bootstrap';
import ReactInputMask from 'react-input-mask';
import { OptionTypeBase } from 'react-select';
import FieldSet from '../../../../components/FieldSet';
import Input from '../../../../components/UnformFields/Input';
import MaskedInput from '../../../../components/UnformFields/InputMaskd';
import Select from '../../../../components/UnformFields/Select';
import Checkbox from '../../../../components/UnformFields/CheckBox';
import DatePicker from '../../../../components/UnformFields/DatePicker';
import AvatarInput from '../../../../components/UnformFields/AvatarInput';
import brasilStatesAndCities from '../../../../utils/brazilianStates.json';
import { cpfMask, cnpjMask } from '../../../../utils/masks';
import {
    Container,
    CreateClientModal,
    CreateClientForm,
    CreateComandaForm,
    SectionButton,
    AddComandaMenu,
    TotalValue,
    PaymentContainer,
    ConfigurePaymentForm,
    PendingValue,
    Form1,
    Form2,
} from './styles';
import '../../../../styles/customreactselect.css';
import '../../../../styles/customreactdatepicker.css';
import { convertToISO8601UTCDateFormat } from '../../../../utils/dateUtils';
import apiClient from '../../../../services/apiClient';

interface ICreateComandaProps {
    saveComanda: (comanda: IFormData) => void;
}
export interface IFormData {
    nome: string;
    dataDeNascimento: string;
    sexo: string;
}

interface IComboBox {
    value: string;
    label: string;
}

const professionalsList = [
    { value: 1, label: 'Marcia' },
    { value: 2, label: 'Sergio' },
    { value: 3, label: 'Daniel' },
];

const types = [
    { value: 1, label: 'Produto' },
    { value: 2, label: 'Serviço' },
];

const paymentOptions = [
    { value: 1, label: 'Cartão' },
    { value: 2, label: 'Dinheiro' },
    { value: 3, label: 'Voucher' },
];

const servicesList = [
    { value: 1, label: 'Hidratação' },
    { value: 2, label: 'Cabelo' },
    { value: 3, label: 'Manícure e pedícure' },
];

const CreateClient: React.FC<ICreateComandaProps> = ({ saveComanda }) => {
    const [show, setShow] = useState(false);
    const [currentForm, setCurrentForm] = useState<OptionTypeBase>({
        value: 2,
        label: 'Serviço',
    });
    const [showPaymentContainer, setShowPaymentContainer] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const affiliationOptions = [
        { value: 1, label: 'Masculino' },
        { value: 2, label: 'Feminino' },
    ];

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    const handleCreateClientSubmit: SubmitHandler<IFormData> = async data => {
        console.log(data);

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
                porcentagemDescontoServicos: Yup.string().test(
                    'valid',
                    'Porcentagem inválida',
                    valor => !valor || Number.parseInt(valor, 10) <= 100,
                ),
                porcentagemDescontoProdutos: Yup.string().test(
                    'valid',
                    'Porcentagem inválida',
                    valor => !valor || Number.parseInt(valor, 10) <= 100,
                ),
                /*  sexo: Yup.string()
                    .matches(/^(?!Selecione$)/g, 'Informe o sexo')
                    .required('O sexo é obrigatório!'), */
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            // Validation passed
            saveComanda(data);
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
            <MdRemoveRedEye onClick={handleShow} />
            <CreateClientModal
                show={show}
                onHide={handleClose}
                className="baseModalStyle"
                size="lg"
                backdrop="static"
            >
                <CreateClientModal.Header>
                    <CreateClientModal.Title>
                        <p>Detalhes da Comanda - Márcia Soares</p>
                    </CreateClientModal.Title>
                </CreateClientModal.Header>
                <CreateClientModal.Body>
                    <PendingValue>
                        <div>Pendente de pagamento:</div>
                        <div>R$ 00,00</div>
                    </PendingValue>
                    <div>
                        {' '}
                        <AddComandaMenu>
                            <CreateComandaForm onSubmit={() => ''} id="form">
                                <Select
                                    label="Tipo"
                                    name="type"
                                    classNamePrefix="react-select"
                                    defaultValue={types[2]}
                                    options={types}
                                    onChange={value =>
                                        value && setCurrentForm(value)
                                    }
                                    blurInputOnSelect
                                    openMenuOnFocus
                                />
                                {currentForm.value === 1 ? (
                                    <>
                                        <Select
                                            label="Produto"
                                            name="servico"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            options={servicesList}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                        <Select
                                            label="Profissional"
                                            name="profissional"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            options={professionalsList}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                        <Input
                                            textTransform="lowercase"
                                            name="qtd"
                                            label="Quantidade"
                                        />
                                        <MaskedInput
                                            label="Valor unitário (R$)"
                                            mask="R$ 99.999"
                                            name="value"
                                        />
                                        <MaskedInput
                                            label="Desconto (R$)"
                                            mask="R$ 99.999"
                                            name="value"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Select
                                            label="Serviço"
                                            name="servico"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            options={servicesList}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                        <Select
                                            label="Profissional"
                                            name="profissional"
                                            classNamePrefix="react-select"
                                            defaultValue={{
                                                label: 'Selecione',
                                                value: 0,
                                            }}
                                            options={professionalsList}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                        <MaskedInput
                                            label="Valor unitário (R$)"
                                            mask="R$ 99.999"
                                            name="value"
                                        />
                                    </>
                                )}

                                <button
                                    className="fibre-button fibre-button--cancel"
                                    type="button"
                                >
                                    Incluir item
                                </button>
                            </CreateComandaForm>
                        </AddComandaMenu>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Serviço/Produto</th>
                                    <th>Profissional</th>
                                    <th>Preço Unit.</th>
                                    <th>Qtde</th>
                                    <th>Desconto</th>
                                    <th>Preço total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Hidratação</td>
                                    <td>Marcela</td>
                                    <td>R$ 50,00</td>
                                    <td>-</td>
                                    <td>R$ 10,00</td>
                                    <td>R$ 40,00</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Máscara Capilar</td>
                                    <td>Marcela</td>
                                    <td>R$ 20,00</td>
                                    <td>1</td>
                                    <td>R$ 0,00</td>
                                    <td>R$ 20,00</td>
                                </tr>
                            </tbody>
                        </Table>
                        <SectionButton
                            type="button"
                            onClick={() =>
                                setShowPaymentContainer(!showPaymentContainer)
                            }
                        >
                            {showPaymentContainer
                                ? 'Ocultar Pagamento'
                                : 'Mostrar Pagamento'}
                            {showPaymentContainer ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </SectionButton>
                        {showPaymentContainer && (
                            <PaymentContainer>
                                <ConfigurePaymentForm
                                    onSubmit={() => ''}
                                    id="form2"
                                >
                                    <div>
                                        <Select
                                            label="Forma de pagamento"
                                            name="type"
                                            classNamePrefix="react-select"
                                            defaultValue={paymentOptions[1]}
                                            options={paymentOptions}
                                            blurInputOnSelect
                                            openMenuOnFocus
                                        />
                                        <MaskedInput
                                            label="Valor (R$)"
                                            mask="R$ 99.999"
                                            name="value"
                                        />
                                        <button type="button">
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Forma de pagamento </th>
                                                <th>Valor (R$) </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dinheiro</td>
                                                <td>R$ 50,00</td>
                                            </tr>
                                            <tr>
                                                <td>Voucher</td>
                                                <td>R$ 10,00</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div>
                                        <MaskedInput
                                            label="Desconto"
                                            mask="99%"
                                            name="value"
                                        />
                                        <div>
                                            <Checkbox
                                                name="possibilitaEncaixe"
                                                label="Gerar Nota Fiscal"
                                            />
                                            <Checkbox
                                                name="possibilitaEncaixe"
                                                label="Guardar troco como crédito"
                                            />
                                        </div>
                                    </div>
                                </ConfigurePaymentForm>
                            </PaymentContainer>
                        )}
                    </div>
                    <TotalValue>
                        <div>Valor da Comanda:</div>
                        <div>R$ 60,00</div>
                        <div>-</div>
                        <div>Desconto:</div>
                        <div>R$ 00,00</div>
                        <div>=</div>
                        <div>Total a pagar:</div>
                        <div>R$ 60,00</div>
                    </TotalValue>
                </CreateClientModal.Body>
                <CreateClientModal.Footer>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="button"
                        onClick={handleClose}
                    >
                        Voltar
                    </button>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="submit"
                        form="form"
                    >
                        Fechar comanda
                    </button>
                </CreateClientModal.Footer>
            </CreateClientModal>
        </Container>
    );
};

export default CreateClient;
