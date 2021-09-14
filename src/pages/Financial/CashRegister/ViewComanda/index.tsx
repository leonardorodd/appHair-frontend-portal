/* eslint-disable no-shadow */
/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef, useEffect, BaseSyntheticEvent } from 'react';
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
    CreateComandaModal,
    CreateComandaForm,
    SectionButton,
    AddComandaMenu,
    TotalValue,
    PaymentContainer,
    ConfigurePaymentForm,
    PendingValue,
    ProductFormContainer,
    ServiceFormContainer,
} from './styles';
import '../../../../styles/customreactselect.css';
import '../../../../styles/customreactdatepicker.css';
import { convertToISO8601UTCDateFormat } from '../../../../utils/dateUtils';
import apiClient from '../../../../services/apiClient';

export enum discountType {
    'value',
    'percentage',
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

const CreateClient: React.FC = () => {
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

    return (
        <Container>
            <MdRemoveRedEye onClick={handleShow} />
            <CreateComandaModal
                show={show}
                onHide={handleClose}
                className="baseModalStyle"
                size="lg"
                backdrop="static"
            >
                <CreateComandaModal.Header>
                    <CreateComandaModal.Title>
                        <p>Detalhes da Comanda - Márcia Soares</p>
                    </CreateComandaModal.Title>
                </CreateComandaModal.Header>
                <CreateComandaModal.Body>
                    <PendingValue>
                        <div>Pendente de pagamento:</div>
                        <div>R$ 00,00</div>
                    </PendingValue>
                    <div>
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
                                    <td
                                        contentEditable="true"
                                        onInput={(event: BaseSyntheticEvent) =>
                                            console.log(event.target.innerText)
                                        }
                                    />
                                    <td contentEditable="true">R$ 10,00</td>
                                    <td>R$ 40,00</td>
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
                </CreateComandaModal.Body>
                <CreateComandaModal.Footer>
                    <button
                        className="fibre-button fibre-button--cancel"
                        type="button"
                        onClick={handleClose}
                    >
                        Voltar
                    </button>
                </CreateComandaModal.Footer>
            </CreateComandaModal>
        </Container>
    );
};

export default CreateClient;
