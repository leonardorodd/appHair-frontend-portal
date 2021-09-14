/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { FaPlus } from 'react-icons/fa';
import {
    MdEdit,
    MdKeyboardArrowDown,
    MdKeyboardArrowRight,
} from 'react-icons/md';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { Table } from 'react-bootstrap';
import Input from '../../../../components/UnformFields/Input';
import Select from '../../../../components/UnformFields/Select';
import TextArea from '../../../../components/UnformFields/TextArea';

import MaskedInput from '../../../../components/UnformFields/InputMaskd';
import {
    Container,
    AddSkillModal,
    CreateInputForm,
    SectionButton,
    PaymentContainer,
    ConfigurePaymentForm,
} from './styles';
import DatePicker from '../../../../components/UnformFields/DatePicker';

export interface IFormData {
    valor: string;
    formaDePagamento: string;
    tipoDeDespesa: string;
    tipoDeDocumento: string;
    numeroDeDocumento: string;
    colaborador: string;
    descricao: string;
}

const AddOutputs: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [show, setShow] = useState(false);
    const [showPaymentContainer, setShowPaymentContainer] = useState(false);

    function handleClose() {
        setShow(false);
    }

    const paymentOptions = [
        { value: 1, label: 'Cartão' },
        { value: 2, label: 'Dinheiro' },
        { value: 3, label: 'Pix' },
        { value: 4, label: 'Voucher' },
    ];

    const expensesOptions = [
        { value: 1, label: 'Limpeza' },
        { value: 2, label: 'Material de escritório' },
        { value: 3, label: 'Pagamento de funcionário' },
        { value: 4, label: 'Insumos' },
    ];

    const fornecedorOptions = [
        { value: 1, label: 'Marcia' },
        { value: 2, label: 'Maria' },
        { value: 3, label: 'Juliana' },
        { value: 4, label: 'Jéssica' },
    ];

    const colaboradorOptions = [
        { value: 1, label: 'Marcia' },
        { value: 2, label: 'Maria' },
        { value: 3, label: 'Juliana' },
        { value: 4, label: 'Jéssica' },
    ];

    const documentOptions = [
        { value: 1, label: 'Nota Fiscal' },
        { value: 2, label: 'Recibo' },
        { value: 3, label: 'Boleto' },
    ];

    function handleShow() {
        setShow(true);
    }

    const handleCreateClientSubmit: SubmitHandler<IFormData> = async data => {
        try {
            // Remove all previous errors
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                valor: Yup.string().required('O valor é obrigatório!'),
                descricao: Yup.string().required('A descrição é obrigatória!'),
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
            <MdEdit onClick={handleShow} />
            <AddSkillModal
                show={show}
                onHide={handleClose}
                className="baseModalStyle"
                size="lg"
                backdrop="static"
            >
                <AddSkillModal.Header>
                    <AddSkillModal.Title>
                        <p>Editar pagamento</p>
                    </AddSkillModal.Title>
                </AddSkillModal.Header>
                <AddSkillModal.Body>
                    <CreateInputForm
                        id="form"
                        onSubmit={handleCreateClientSubmit}
                        ref={formRef}
                    >
                        <div className="twoFieldsGroup">
                            <MaskedInput
                                mask="R$ 9.999"
                                name="valor"
                                label="Valor*"
                            />
                            <DatePicker
                                label="Data de vencimento"
                                name="dataDeVencimento"
                            />
                            <Select
                                label="Forma de pagamento"
                                name="tipoPagamento"
                                classNamePrefix="react-select"
                                defaultValue={paymentOptions[1]}
                                options={paymentOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                        <div className="twoFieldsGroup">
                            <Select
                                label="Fornecedor"
                                name="fornecedor"
                                classNamePrefix="react-select"
                                defaultValue={fornecedorOptions[1]}
                                options={fornecedorOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                            <Select
                                label="Colaborador"
                                name="colaborador"
                                classNamePrefix="react-select"
                                defaultValue={colaboradorOptions[1]}
                                options={colaboradorOptions}
                                isSearchable={false}
                                blurInputOnSelect
                                openMenuOnFocus
                            />
                        </div>
                        <TextArea name="descricao" label="Descrição*" />
                        <SectionButton
                            type="button"
                            onClick={() =>
                                setShowPaymentContainer(!showPaymentContainer)
                            }
                        >
                            {showPaymentContainer
                                ? 'Ocultar Quitação'
                                : 'Mostrar Quitação'}
                            {showPaymentContainer ? (
                                <MdKeyboardArrowDown />
                            ) : (
                                <MdKeyboardArrowRight />
                            )}
                        </SectionButton>
                        {showPaymentContainer && (
                            <PaymentContainer>
                                <div className="twoFieldsGroup">
                                    <Input
                                        label="Valor pago"
                                        textTransform="lowercase"
                                        name="qtd"
                                        value="50,00"
                                    />
                                    <Input
                                        label="Valor pendente"
                                        textTransform="lowercase"
                                        name="qtd"
                                        value="10,00"
                                    />
                                    <Input
                                        label="Juros"
                                        textTransform="lowercase"
                                        name="qtd"
                                        value="10,00"
                                    />
                                </div>
                                <div className="twoFieldsGroup">
                                    <Input
                                        label="Desconto"
                                        textTransform="lowercase"
                                        name="qtd"
                                        value="50,00"
                                    />
                                    <DatePicker
                                        label="Data de quitação"
                                        name="dataDeVencimento"
                                        value="10/06/2021"
                                    />
                                </div>
                                <div>Inserir pagamento</div>
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
                                </ConfigurePaymentForm>
                            </PaymentContainer>
                        )}
                    </CreateInputForm>
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

export default AddOutputs;
