/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { FaPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import { SubmitHandler, FormHandles, Scope } from '@unform/core';
import { Table } from 'react-bootstrap';
import Input from '../../../../components/UnformFields/Input';
import Select from '../../../../components/UnformFields/Select';
import TextArea from '../../../../components/UnformFields/TextArea';
import FieldSet from '../../../../components/FieldSet';
import NumericInput from '../../../../components/UnformFields/NumericInput';

import MaskedInput from '../../../../components/UnformFields/InputMaskd';
import {
    Container,
    AddSkillModal,
    CreateInputForm,
    ConfigurePaymentForm,
    Total,
    Title,
    PaymentConfig,
    StockHeaderContainer,
} from './styles';
import DatePicker from '../../../../components/UnformFields/DatePicker';
import CheckBox from '../../../../components/UnformFields/CheckBox';

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

    function handleClose() {
        setShow(false);
    }

    const operationOptions = [
        { value: 1, label: 'Consumo' },
        { value: 2, label: 'Perda/roubo/avaria' },
        { value: 3, label: 'Fora da validade' },
        { value: 4, label: 'Ajuste de estoque' },
    ];

    const fornecedorOptions = [
        { value: 1, label: 'Marcia' },
        { value: 2, label: 'Maria' },
        { value: 3, label: 'Juliana' },
        { value: 4, label: 'Jéssica' },
    ];

    const unityOptions = [
        { value: 1, label: 'ml' },
        { value: 2, label: 'lt' },
        { value: 3, label: 'mg' },
        { value: 4, label: 'kg' },
    ];

    const finalizadoraOptions = [
        { value: 1, label: 'Dinheiro' },
        { value: 2, label: 'PIX' },
        { value: 3, label: 'Transferência' },
        { value: 4, label: 'Débito' },
        { value: 5, label: 'Crédito' },
        { value: 6, label: 'Voucher' },
        { value: 7, label: 'Permuta' },
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
            <StockHeaderContainer>
                <h1>Saída de nota</h1>
            </StockHeaderContainer>
            <CreateInputForm
                id="form"
                onSubmit={handleCreateClientSubmit}
                ref={formRef}
            >
                <div className="twoFieldsGroup">
                    <Select
                        label="Cliente"
                        name="cliente"
                        classNamePrefix="react-select"
                        defaultValue={fornecedorOptions[1]}
                        options={fornecedorOptions}
                        blurInputOnSelect
                        openMenuOnFocus
                    />
                    <DatePicker label="Data da nota" name="data" />
                </div>
                <ConfigurePaymentForm onSubmit={() => ''} id="form2">
                    <div className="twoFieldsGroup ">
                        <Select
                            textTransform="lowercase"
                            name="descricao"
                            label="Descrição"
                            classNamePrefix="react-select"
                            defaultValue={unityOptions[1]}
                            options={unityOptions}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        <Select
                            label="Operação"
                            name="operacao"
                            classNamePrefix="react-select"
                            defaultValue={operationOptions[1]}
                            options={operationOptions}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                    </div>
                    <div className="twoFieldsGroup ">
                        <Select
                            label="Unidade"
                            name="unidade"
                            classNamePrefix="react-select"
                            defaultValue={unityOptions[1]}
                            options={unityOptions}
                            blurInputOnSelect
                            openMenuOnFocus
                        />
                        {/*   <Input
                            textTransform="lowercase"
                            name="qtd"
                            label="Qtd"
                        /> */}

                        <NumericInput name="qtd" label="Qtd" />
                        <MaskedInput
                            label="Valor"
                            mask="R$ 99.999"
                            name="value"
                        />
                        <button type="button">
                            <FaPlus />
                        </button>
                    </div>
                    <FieldSet title="Lista de itens">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Und</th>
                                    <th>Qtd</th>
                                    <th>Valor unitário</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Creme</td>
                                    <th>ml</th>
                                    <td>5</td>
                                    <td>10,00</td>
                                    <td>
                                        <MdDelete onClick={() => ''} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creme</td>
                                    <th>ml</th>
                                    <td>5</td>
                                    <td>10,00</td>
                                    <td>
                                        <MdDelete onClick={() => ''} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creme</td>
                                    <th>ml</th>
                                    <td>5</td>
                                    <td>10,00</td>
                                    <td>
                                        <MdDelete onClick={() => ''} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creme</td>
                                    <th>ml</th>
                                    <td>5</td>
                                    <td>10,00</td>
                                    <td>
                                        <MdDelete onClick={() => ''} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creme</td>
                                    <th>ml</th>
                                    <td>5</td>
                                    <td>10,00</td>
                                    <td>
                                        <MdDelete onClick={() => ''} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </FieldSet>
                </ConfigurePaymentForm>
                <Total>
                    <div>Total da nota:</div>
                    <div>R$ 5000,00</div>
                </Total>
                <PaymentConfig>
                    <CheckBox
                        name="retiradoCaixa"
                        label="Valor retirado da caixa"
                    />
                    <label>Finalizadora</label>
                    <Select
                        id="finalizadora"
                        name="finalizadora"
                        classNamePrefix="react-select"
                        defaultValue={finalizadoraOptions[0]}
                        options={finalizadoraOptions}
                        isSearchable={false}
                        blurInputOnSelect
                        openMenuOnFocuss
                    />
                </PaymentConfig>
            </CreateInputForm>
            <div>
                <button type="button">Cancelar</button>
                <button type="button">Confirmar saída</button>
            </div>
        </Container>
    );
};

export default AddOutputs;
